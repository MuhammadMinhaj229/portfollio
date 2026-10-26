import { getRedisClient, allowMethod, jsonResponse, readJson, safeErrorResponse } from './_shared/redis.mjs';
const REVIEWS_KEY = 'portfolio:reviews';
const MIN_LENGTH = 60;
const MAX_LENGTH = 200;
function readStoredReviews(value) {
  if (Array.isArray(value)) return value;
  if (typeof value !== 'string') return [];
  try { const parsed = JSON.parse(value); return Array.isArray(parsed) ? parsed : []; } catch { return []; }
}
function cleanText(value, limit) { return typeof value === 'string' ? value.trim().slice(0, limit) : ''; }
export default async function handler(event) {
  const blocked = allowMethod(event.httpMethod, ['GET', 'POST']);
  if (blocked) return blocked;
  try {
    const redis = getRedisClient();
    if (event.httpMethod === 'GET') return jsonResponse(200, { reviews: readStoredReviews(await redis.get(REVIEWS_KEY)).slice(0, 30) });
    const body = await readJson(event);
    const username = cleanText(body.username, 80);
    const occupation = cleanText(body.occupation, 100);
    const review = cleanText(body.review, MAX_LENGTH);
    if (!username || !occupation || !review) return jsonResponse(400, { error: 'Name, occupation, and review are required.' });
    if (review.length < MIN_LENGTH) return jsonResponse(400, { error: `Review must be between ${MIN_LENGTH} and ${MAX_LENGTH} characters.` });
    const sourceIp = event.headers?.['x-nf-client-connection-ip'] || event.headers?.['x-forwarded-for']?.split(',')[0]?.trim() || 'unknown';
    const throttleKey = `portfolio:reviews:rate:${String(sourceIp).replace(/[^a-zA-Z0-9:._-]/g, '').slice(0, 80)}`;
    const attempts = await redis.incr(throttleKey);
    if (attempts === 1) await redis.expire(throttleKey, 60);
    if (attempts > 5) return jsonResponse(429, { error: 'Too many submissions. Please try again in a minute.' });
    const nextReview = { id: crypto.randomUUID(), username, occupation, review, createdAt: new Date().toISOString() };
    const previous = readStoredReviews(await redis.get(REVIEWS_KEY));
    await redis.set(REVIEWS_KEY, JSON.stringify([nextReview, ...previous].slice(0, 30)));
    return jsonResponse(201, { review: nextReview });
  } catch (error) { return safeErrorResponse(error, 'Reviews are temporarily unavailable.'); }
}
