# `api/domain/` — Domain Management

## Purpose
Custom domain verification and DNS management for agencies.

## Routes
| Folder | URL | Description |
|---|---|---|
| `verify/` | `/api/domain/verify` | Verify domain ownership via DNS |

## Future Routes
- `check/route.ts` — Check DNS propagation status
- `remove/route.ts` — Disconnect a custom domain
- `ssl/route.ts` — SSL certificate status
