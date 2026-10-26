const MIN = 60, MAX = 200, TARGET = 170;
const MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash';
const clean = value => String(value || '').replace(/^["'`]+|["'`]+$/g, '').replace(/\s+/g, ' ').trim();
const respond = (status, body) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' } });
async function generate(prompt) {
  const key = process.env.GEMINI_API_KEY;
  if (!key) { const error = new Error('AI review assistance is not configured.'); error.statusCode = 503; throw error; }
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(MODEL)}:generateContent?key=${encodeURIComponent(key)}`;
  const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ contents: [{ role: 'user', parts: [{ text: prompt }] }], generationConfig: { temperature: 0.45, maxOutputTokens: 120 } }), signal: AbortSignal.timeout(15000) });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) { const error = new Error('AI provider request failed.'); error.statusCode = res.status === 429 ? 429 : 502; throw error; }
  return clean(data?.candidates?.[0]?.content?.parts?.map(part => part.text || '').join(' '));
}
function fit(value) {
  const text = clean(value);
  if (text.length <= MAX) return text;
  const end = text.lastIndexOf(' ', MAX);
  return text.slice(0, end > MIN ? end : MAX).trim();
}
export default async function handler(event) {
  if (event.httpMethod !== 'POST') return respond(405, { error: 'Method Not Allowed' });
  if ((event.body || '').length > 12000) return respond(413, { error: 'Request body is too large.' });
  let body;
  try { body = JSON.parse(event.body || '{}'); } catch { return respond(400, { error: 'Request body must be valid JSON.' }); }
  const username = clean(body.username).slice(0, 80), occupation = clean(body.occupation).slice(0, 100), draft = clean(body.review).slice(0, 1000);
  if (!draft && !occupation) return respond(400, { error: 'Add a draft review or occupation first.' });
  try {
    const prompt = ['Rewrite or generate a portfolio review draft using only supplied facts.', `Return a natural professional paragraph of ${TARGET}-${MAX} characters.`, 'Do not fabricate personal experience or present generated text as an authentic customer testimonial. This is a draft for the user to review and edit.', `Reviewer name: ${username || 'Not provided'}`, `Reviewer occupation: ${occupation || 'Not provided'}`, `Draft: ${draft || 'Generate a neutral draft from the occupation without claiming specific experience.'}`].join('\n');
    const review = fit(await generate(prompt));
    if (review.length < MIN) return respond(502, { error: 'AI returned an unusable draft. Please edit your notes and retry.' });
    return respond(200, { review, assistedReview: review });
  } catch (error) {
    const status = Number.isInteger(error?.statusCode) ? error.statusCode : 500;
    return respond(status, { error: status < 500 ? error.message : 'AI review assistance is temporarily unavailable.' });
  }
}
