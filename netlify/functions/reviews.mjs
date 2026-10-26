import { getRedisClient, allowMethod, jsonResponse, readJson, safeErrorResponse } from './_shared/redis.mjs';
const KEY = 'portfolio:reviews';
const MIN = 60, MAX = 200;
function storedReviews(value) {
  if (Array.isArray(value)) return value;
  if (typeof value !== 'string') return [];
  try { const parsed = JSON.parse(value); return Array.isArray(parsed) ? parsed : []; } catch { return []; }
}
const cleanText = (value, max) => typeof value === 'string' ? value.trim().slice(0, max) : '';
export default async function handler(event) {
  const blocked = allowMethod(event.httpMethod, ['GET', 'POST']);
  if (blocked) return blocked;
  try {
    const redis = getRedisClient();
    if (event.httpMethod === 'GET') return jsonResponse(200, { reviews: storedReviews(await redis.get(KEY)).slice(0, 30) });
    const body = await readJson(event);
    const username = cleanText(body.username, 80);
    const occupation = cleanText(body.occupation, 100);
    const review = cleanText(body.review, MAX);
    if (!username || !occupation || !review) return jsonResponse(400, { error: 'Name, occupation, and review are required.' });
    if (review.length < MIN) return jsonResponse(400, { error: `Review must be between ${MIN} and ${MAX} characters.` });
    const ip = event.headers?.['x-nf-client-connection-ip'] || event.headers?.['x-forwarded-for']?.split(',')[0]?.trim() || 'unknown';
    const key = `portfolio:reviews:rate:${String(ip).replace(/[^a-zA-Z0-9:._-]/g, '').slice(0, 80)}`;
    const attempts = await redis.incr(key);
    if (attempts === 1) await redis.expire(key, 60);
    if (attempts > 5) return jsonResponse(429, { error: 'Too many submissions. Please try again in a minute.' });
    const item = { id: crypto.randomUUID(), username, occupation, review, createdAt: new Date().toISOString() };
    const current = storedReviews(await redis.get(KEY));
    await redis.set(KEY, JSON.stringify([item, ...current].slice(0, 30)));
    return jsonResponse(201, { review: item });
  } catch (error) { return safeErrorResponse(error, 'Reviews are temporarily unavailable.'); }
}
