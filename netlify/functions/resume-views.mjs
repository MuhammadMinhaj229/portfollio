import { getRedisClient, allowMethod, jsonResponse, safeErrorResponse } from './_shared/redis.mjs';
const COUNTER_KEY = 'resume:views';
export default async function handler(event) {
  const blocked = allowMethod(event.httpMethod, ['GET', 'POST']);
  if (blocked) return blocked;
  try {
    const redis = getRedisClient();
    if (event.httpMethod === 'GET') { const value = await redis.get(COUNTER_KEY); return jsonResponse(200, { value: typeof value === 'number' ? value : Number(value) || 0 }); }
    return jsonResponse(200, { value: await redis.incr(COUNTER_KEY) });
  } catch (error) { return safeErrorResponse(error, 'Resume counter is temporarily unavailable.'); }
}
