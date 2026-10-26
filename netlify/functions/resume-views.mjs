import { getRedisClient, allowMethod, jsonResponse, safeErrorResponse } from './_shared/redis.mjs';

const COUNTER_KEY = 'resume:views';

export default async function handler(event) {
  const methodResponse = allowMethod(event.httpMethod, ['GET', 'POST']);
  if (methodResponse) return methodResponse;

  try {
    const redis = getRedisClient();
    if (event.httpMethod === 'GET') {
      const value = await redis.get(COUNTER_KEY);
      const count = typeof value === 'number' ? value : Number(value) || 0;
      return jsonResponse(200, { value: count });
    }

    const value = await redis.incr(COUNTER_KEY);
    return jsonResponse(200, { value });
  } catch (error) {
    return safeErrorResponse(error, 'Resume counter is temporarily unavailable.');
  }
}
