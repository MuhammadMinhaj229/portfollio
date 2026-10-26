import { getRedisClient } from './redis.js';

const REVIEWS_KEY = 'portfolio:reviews';
const REVIEW_MIN_LENGTH = 60;
const REVIEW_MAX_LENGTH = 200;

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

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  res.setHeader('X-Content-Type-Options', 'nosniff');

  try {
    const redis = getRedisClient();

    if (req.method === 'GET') {
      return res.status(200).json({ reviews: readStoredReviews(await redis.get(REVIEWS_KEY)).slice(0, 30) });
    }

    if (req.method === 'POST') {
      const { username, occupation, review } = req.body || {};
      const name = typeof username === 'string' ? username.trim().slice(0, 80) : '';
      const role = typeof occupation === 'string' ? occupation.trim().slice(0, 100) : '';
      const message = typeof review === 'string' ? review.trim() : '';

      if (!name || !role || !message) {
        return res.status(400).json({ error: 'Name, occupation, and review are required.' });
      }
      if (message.length < REVIEW_MIN_LENGTH || message.length > REVIEW_MAX_LENGTH) {
        return res.status(400).json({ error: `Review must be between ${REVIEW_MIN_LENGTH} and ${REVIEW_MAX_LENGTH} characters.` });
      }

      const sourceIp = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || 'unknown';
      const throttleKey = `portfolio:reviews:rate:${String(sourceIp).replace(/[^a-zA-Z0-9:._-]/g, '').slice(0, 80)}`;
      const attempts = await redis.incr(throttleKey);
      if (attempts === 1) await redis.expire(throttleKey, 60);
      if (attempts > 5) return res.status(429).json({ error: 'Too many submissions. Please try again in a minute.' });

      const nextReview = {
        id: crypto.randomUUID(),
        username: name,
        occupation: role,
        review: message,
        createdAt: new Date().toISOString(),
      };
      const existing = readStoredReviews(await redis.get(REVIEWS_KEY));
      await redis.set(REVIEWS_KEY, JSON.stringify([nextReview, ...existing].slice(0, 30)));
      return res.status(201).json({ review: nextReview });
    }

    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  } catch {
    return res.status(503).json({ error: 'Reviews are temporarily unavailable.' });
  }
}
