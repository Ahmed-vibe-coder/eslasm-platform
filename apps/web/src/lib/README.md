# `lib/` — Utility Functions

## Purpose
Pure utility functions and helper modules. No React components or hooks — just plain TypeScript functions.

## Current Files
| File | Exports |
|---|---|
| `utils.ts` | `cn()`, `formatCurrency()`, `formatDate()`, `slugify()`, `getInitials()` |
| `set-locale.ts` | `setLocaleCookie()` — Server action to persist locale |

## Future Files
- `auth.ts` — Auth.js configuration and helpers
- `db.ts` — Database client instance (Prisma)
- `stripe.ts` — Stripe client initialization
- `r2.ts` — Cloudflare R2 storage client
- `email.ts` — Email sending helpers (Resend / Nodemailer)
- `rate-limit.ts` — API rate limiting utilities
- `logger.ts` — Structured logging (Pino / Winston)
- `permissions.ts` — Role-based permission checking helpers
- `validation.ts` — Shared validation helpers (email, slug, domain)
