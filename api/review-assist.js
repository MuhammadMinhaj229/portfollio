const REVIEW_MIN_LENGTH = 60;
const REVIEW_MAX_LENGTH = 200;
const AI_TARGET_MIN_LENGTH = 170;
const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash';

function cleanReview(value) {
  return String(value || '').replace(/^["'`]+|["'`]+$/g, '').replace(/\s+/g, ' ').trim();
}

function fitReview(value) {
  const cleaned = cleanReview(value);
  if (cleaned.length <= REVIEW_MAX_LENGTH) return cleaned;
  const sentenceEnd = Math.max(
    cleaned.lastIndexOf('.', REVIEW_MAX_LENGTH),
    cleaned.lastIndexOf('!', REVIEW_MAX_LENGTH),
    cleaned.lastIndexOf('?', REVIEW_MAX_LENGTH)
  );
  if (sentenceEnd >= REVIEW_MIN_LENGTH) return cleaned.slice(0, sentenceEnd + 1).trim();
  const wordEnd = cleaned.lastIndexOf(' ', REVIEW_MAX_LENGTH);
  return cleaned.slice(0, wordEnd >= REVIEW_MIN_LENGTH ? wordEnd : REVIEW_MAX_LENGTH).replace(/[,:;.-]+$/g, '').trim();
}

function extendReview(value, occupation) {
  let result = fitReview(value);
  const additions = [
    ` Their work shows attention to detail${occupation ? ` in ${cleanReview(occupation).slice(0, 40)}` : ''}.`,
    ' The result is thoughtful, polished, and useful.',
  ];
  for (const addition of additions) {
    if (result.length >= AI_TARGET_MIN_LENGTH || (result + addition).length > REVIEW_MAX_LENGTH) break;
    result += addition;
  }
  return fitReview(result);
}

async function generateReview(prompt) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(GEMINI_MODEL)}:generateContent?key=${encodeURIComponent(apiKey)}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.45, maxOutputTokens: 120 },
      }),
      signal: AbortSignal.timeout(15000),
    }
  );
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error('Gemini request failed.');
  return cleanReview(data?.candidates?.[0]?.content?.parts?.map((part) => part.text || '').join(' '));
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  res.setHeader('X-Content-Type-Options', 'nosniff');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { username, occupation, review } = req.body || {};
    const draft = cleanReview(review).slice(0, 1000);
    const role = typeof occupation === 'string' ? occupation.trim().slice(0, 100) : '';
    if (!draft && !role) return res.status(400).json({ error: 'Add a draft review or occupation first.' });

    const prompt = [
      'Rewrite or generate a portfolio review draft using only the supplied facts.',
      `Return one natural, professional paragraph of ${AI_TARGET_MIN_LENGTH}-${REVIEW_MAX_LENGTH} characters.`,
      'Never fabricate personal experience or present the generated text as an authentic customer testimonial. This is a draft for the user to review and edit.',
      `Reviewer name: ${cleanReview(username).slice(0, 80) || 'Not provided'}`,
      `Reviewer occupation: ${role || 'Not provided'}`,
      `Draft: ${draft || 'Generate a neutral draft from the occupation without claiming specific experience.'}`,
    ].join('\n');

    let generated = null;
    try { generated = await generateReview(prompt); } catch {
      return res.status(502).json({ error: 'AI review assistance is temporarily unavailable.' });
    }

    if (!generated) {
      // Allow the form to remain usable without a configured API key.
      generated = draft;
    }
    generated = extendReview(generated, role);
    if (generated.length < REVIEW_MIN_LENGTH) {
      return res.status(400).json({ error: 'Add more detail before generating a review draft.' });
    }
    return res.status(200).json({ review: generated, assistedReview: generated });
  } catch {
    return res.status(500).json({ error: 'AI review assistance is temporarily unavailable.' });
  }
}
