const REVIEW_MIN_LENGTH = 60;
const REVIEW_MAX_LENGTH = 200;
const AI_TARGET_MIN_LENGTH = 170;
const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash';

function cleanReview(value) {
  return String(value || '').replace(/^["'`]+|["'`]+$/g, '').replace(/\s+/g, ' ').trim();
}

function fitReview(value, occupation = '') {
  let result = cleanReview(value).slice(0, REVIEW_MAX_LENGTH);
  if (result.length < AI_TARGET_MIN_LENGTH) {
    const additions = [
      ` The work shows care and attention to detail${occupation ? ` for a ${cleanReview(occupation).slice(0, 50)}` : ''}.`,
      ' The result is thoughtful, clear, and useful.',
    ];
    for (const addition of additions) {
      if (result.length >= AI_TARGET_MIN_LENGTH || (result + addition).length > REVIEW_MAX_LENGTH) break;
      result += addition;
    }
  }
  if (result.length > REVIEW_MAX_LENGTH) {
    const end = result.lastIndexOf(' ', REVIEW_MAX_LENGTH);
    result = result.slice(0, end > REVIEW_MIN_LENGTH ? end : REVIEW_MAX_LENGTH).trim();
  }
  return result;
}

async function generateReview(prompt) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    const error = new Error('AI review assistance is not configured.');
    error.statusCode = 503;
    throw error;
  }

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(GEMINI_MODEL)}:generateContent?key=${encodeURIComponent(apiKey)}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.45, maxOutputTokens: 120 },
      }),
      signal: AbortSignal.timeout(15_000),
    }
  );

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const error = new Error('AI provider request failed.');
    error.statusCode = response.status === 429 ? 429 : 502;
    throw error;
  }

  return cleanReview(data?.candidates?.[0]?.content?.parts?.map((part) => part.text || '').join(' '));
}

export default async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json; charset=utf-8', Allow: 'POST', 'Cache-Control': 'no-store' },
    });
  }

  try {
    if ((event.body || '').length > 12_000) {
      return new Response(JSON.stringify({ error: 'Request body is too large.' }), {
        status: 413, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
      });
    }
    let body;
    try { body = JSON.parse(event.body || '{}'); } catch {
      return new Response(JSON.stringify({ error: 'Request body must be valid JSON.' }), {
        status: 400, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
      });
    }

    const username = cleanReview(body.username).slice(0, 80);
    const occupation = cleanReview(body.occupation).slice(0, 100);
    const draft = cleanReview(body.review).slice(0, 1000);
    if (!draft && !occupation) {
      return new Response(JSON.stringify({ error: 'Add a draft review or occupation first.' }), {
        status: 400, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
      });
    }

    const prompt = [
      'Rewrite or generate a portfolio review using only the supplied user-provided facts.',
      `Return only review text with ${AI_TARGET_MIN_LENGTH}-${REVIEW_MAX_LENGTH} characters, as one natural and professional paragraph.`,
      'Do not fabricate a personal experience or claim the author is a real customer; phrase this as a draft for the user to review and edit.',
      `Reviewer name: ${username || 'Not provided'}`,
      `Reviewer occupation: ${occupation || 'Not provided'}`,
      `Draft: ${draft || 'Generate a neutral review draft based on the occupation, without claiming specific experience.'}`,
    ].join('\n');

    let review = fitReview(await generateReview(prompt), occupation);
    if (review.length < REVIEW_MIN_LENGTH) {
      return new Response(JSON.stringify({ error: 'AI returned an unusable draft. Please edit your notes and retry.' }), {
        status: 502, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
      });
    }

    return new Response(JSON.stringify({ review, assistedReview: review }), {
      status: 200,
      headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' },
    });
  } catch (error) {
    const statusCode = Number.isInteger(error?.statusCode) ? error.statusCode : 500;
    const message = statusCode < 500 ? error.message : 'AI review assistance is temporarily unavailable.';
    return new Response(JSON.stringify({ error: message }), {
      status: statusCode,
      headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' },
    });
  }
}
