# `api/` — API Route Handlers

## Purpose
Next.js API routes that handle server-side logic. The most important is the proxy route that forwards requests to the real backend.

## Role
Acts as a Backend-for-Frontend (BFF) layer. Client-side code never calls the real backend directly — all requests go through these API routes which inject auth tokens and handle server-side logic.

## URL Mapping
| Folder | URL | Method(s) | Description |
|---|---|---|---|
| `proxy/[...path]/` | `/api/proxy/*` | ALL | Forward requests to backend API |
| `builder/save/` | `/api/builder/save` | POST | Save builder page JSON |
| `builder/publish/` | `/api/builder/publish` | POST | Publish a builder page |
| `upload/` | `/api/upload` | POST | File upload (images, documents) |
| `domain/verify/` | `/api/domain/verify` | POST | Verify custom domain DNS |

## Future Routes
- `auth/[...nextauth]/route.ts` — Auth.js route handlers
- `webhooks/stripe/route.ts` — Stripe webhook handler
- `webhooks/cloudflare/route.ts` — Cloudflare DNS webhook
- `cron/cleanup/route.ts` — Scheduled cleanup tasks
- `og/route.tsx` — Dynamic Open Graph image generation
- `export/[type]/route.ts` — Data export (CSV, PDF)
