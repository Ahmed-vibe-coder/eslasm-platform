# `packages/api-client/` — API Client Library

## Purpose
Provides typed functions for every API call in the platform. Components never call backend URLs directly — they always go through this package.

## Role
Acts as the single abstraction layer between the frontend and the backend API. All requests are routed through the Next.js proxy at `/api/proxy/[...path]`.

## Flow
```
Component → @eduforge/api-client → /api/proxy/... → Backend API
```

## Current Files
| File | Contents |
|---|---|
| `src/base.ts` | `ApiClient` class with generic HTTP methods (GET, POST, PUT, PATCH, DELETE) |
| `src/agencies.ts` | `agenciesApi` — CRUD for agencies/tenants + domain connection |
| `src/courses.ts` | `coursesApi` — CRUD for courses + lessons + enrollment |
| `src/builder.ts` | `builderApi` — Page CRUD + templates + publish |
| `src/index.ts` | Barrel re-export |

## Future Files
- `src/users.ts` — User management API (CRUD, role assignment, avatar upload)
- `src/auth.ts` — Authentication API (login, register, password reset, OAuth)
- `src/payments.ts` — Stripe payment API (checkout, subscriptions, invoices)
- `src/uploads.ts` — File upload API (images, videos, documents)
- `src/analytics.ts` — Analytics API (metrics, reports, dashboards)
- `src/notifications.ts` — Notification API (list, mark read, preferences)
- `src/certificates.ts` — Certificate API (generate, download, verify)
