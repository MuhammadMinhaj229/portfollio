import { getRedisClient, allowMethod, jsonResponse, readJson, safeErrorResponse } from './_shared/redis.mjs';

const REVIEWS_KEY = 'portfolio:reviews';
const REVIEW_MIN_LENGTH = 60;
const REVIEW_MAX_LENGTH = 200;
const MAX_NAME_LENGTH = 80;
const MAX_OCCUPATION_LENGTH = 100;

function readStoredReviews(value) {
  if (Array.isArray(value)) return value;
  if (typeof value !== 'string') return [];
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function cleanText(value, maxLength) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

export default async function handler(event) {
  const methodResponse = allowMethod(event.httpMethod, ['GET', 'POST']);
  if (methodResponse) return methodResponse;

  try {
    const redis = getRedisClient();

    if (event.httpMethod === 'GET') {
      const stored = await redis.get(REVIEWS_KEY);
      const reviews = readStoredReviews(stored).slice(0, 30);
      return jsonResponse(200, { reviews });
    }

    const body = await readJson(event);
    const username = cleanText(body.username, MAX_NAME_LENGTH);
    const occupation = cleanText(body.occupation, MAX_OCCUPATION_LENGTH);
    const review = cleanText(body.review, REVIEW_MAX_LENGTH);
    const reviewLength = review.length;

    if (!username || !occupation || !review) {
      return jsonResponse(400, { error: 'Name, occupation, and review are required.' });
    }
    if (reviewLength < REVIEW_MIN_LENGTH || reviewLength > REVIEW_MAX_LENGTH) {
      return jsonResponse(400, {
        error: `Review must be between ${REVIEW_MIN_LENGTH} and ${REVIEW_MAX_LENGTH} characters.`,
      });
    }

    // Conservative per-IP throttle; requires Redis and is not a replacement for a managed WAF.
    const ip = event.headers?.['x-nf-client-connection-ip'] || event.headers?.['x-forwarded-for']?.split(',')[0]?.trim() || 'unknown';
    const throttleKey = `portfolio:reviews:rate:${String(ip).replace(/[^a-zA-Z0-9:._-]/g, '').slice(0, 80)}`;
    const attempts = await redis.incr(throttleKey);
    if (attempts === 1) await redis.expire(throttleKey, 60);
    if (attempts > 5) {
      return jsonResponse(429, { error: 'Too many submissions. Please try again in a minute.' });
    }

    const nextReview = {
      id: crypto.randomUUID(),
      username,
      occupation,
      review,
      createdAt: new Date().toISOString(),
    };
    const existingReviews = readStoredReviews(await redis.get(REVIEWS_KEY));
    const reviews = [nextReview, ...existingReviews].slice(0, 30);
    await redis.set(REVIEWS_KEY, JSON.stringify(reviews));

    return jsonResponse(201, { review: nextReview });
  } catch (error) {
    return safeErrorResponse(error, 'Reviews are temporarily unavailable.');
  }
}
