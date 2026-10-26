import { Redis } from '@upstash/redis';

let client;
export function getRedisClient() {
  if (client) return client;
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) {
    const error = new Error('Storage is not configured.');
    error.statusCode = 503;
    throw error;
  }
  client = new Redis({ url, token });
  return client;
}
export function jsonResponse(statusCode, body, extraHeaders = {}) {
  return new Response(JSON.stringify(body), {
    status: statusCode,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store, max-age=0', 'X-Content-Type-Options': 'nosniff', ...extraHeaders },
  });
}
export function allowMethod(method, allowed) {
  if (method === 'OPTIONS') return new Response(null, { status: 204, headers: { Allow: allowed.join(', '), 'Cache-Control': 'no-store' } });
  if (!allowed.includes(method)) return jsonResponse(405, { error: 'Method Not Allowed' }, { Allow: allowed.join(', ') });
  return null;
}
export async function readJson(event) {
  if (!event.body) return {};
  if (event.body.length > 12000) { const error = new Error('Request body is too large.'); error.statusCode = 413; throw error; }
  try { return JSON.parse(event.body); } catch { const error = new Error('Request body must be valid JSON.'); error.statusCode = 400; throw error; }
}
export function safeErrorResponse(error, fallback = 'Request failed.') {
  const status = Number.isInteger(error?.statusCode) ? error.statusCode : 500;
  return jsonResponse(status, { error: status < 500 ? error.message : fallback });
}
