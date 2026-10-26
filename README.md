# Mohammed Minhaj Mahmood — Portfolio

A React 19 + Vite portfolio with interactive visuals, project case studies, contact links, and Netlify Functions for reviews, AI-assisted review drafts, and resume-view counting.

## Netlify deployment

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Functions directory:** `netlify/functions`
- **Node runtime:** 22
- **Routing:** `netlify.toml` maps `/api/*` to Netlify Functions and falls back to `index.html` for client-side routes.

Connect `MuhammadMinhaj229/portfollio` to Netlify and use these settings. Keep the base directory empty unless you intentionally build from a subdirectory.

### Environment variables

Configure these in Netlify → Site configuration → Environment variables:

- `UPSTASH_REDIS_REST_URL` — Upstash Redis REST endpoint.
- `UPSTASH_REDIS_REST_TOKEN` — Upstash Redis REST token.
- `GEMINI_API_KEY` — Google Gemini API key for optional review assistance.
- `GEMINI_MODEL` — optional model override; defaults to `gemini-2.5-flash`.

Keep secret values in Netlify settings; never commit a `.env` file or expose provider keys in client-side code. Static content loads without optional services; reviews and resume counting need Redis, and AI assistance also needs Gemini.

### Local development and validation

```bash
npm ci
npm run dev
npm run lint
npm run build
```

After deployment, verify the home page, direct refreshes, resume download, contact form, and `/api/resume-views`, `/api/reviews`, and `/api/review-assist`. The contact form uses FormSubmit, which may require first-time recipient confirmation.

## Security and operations

- Server errors return generic messages rather than runtime/provider details.
- Review fields are bounded and submission attempts are rate-limited via Redis per client IP.
- Rate limiting complements, rather than replaces, managed bot protection/WAF controls.
- Public user-generated review content should be moderated before being presented as endorsed testimonials.
