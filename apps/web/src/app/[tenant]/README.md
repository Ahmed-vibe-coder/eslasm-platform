# `[tenant]/` — Dynamic Tenant Pages

## Purpose
Public-facing pages for each agency (tenant). When a user visits `ahmed-academy.eduforge.com`, the middleware rewrites to `/ahmed-academy/...` and this route group renders the agency's website.

## Role
Completely separate UI from the main EduForge app. Each tenant gets their own branded site with courses, registration, and student dashboard. The design comes from the builder-generated pages.

## How It Works
1. User visits `subdomain.eduforge.com` or a custom domain
2. `middleware.ts` detects the subdomain/domain
3. Request is rewritten to `/[tenant]/...`
4. Pages in this folder render using the tenant's branding and data

## URL Mapping
| Folder | URL (on subdomain) | Page |
|---|---|---|
| `page.tsx` | `/` | Agency homepage |
| `courses/` | `/courses` | Course catalog |
| `courses/[courseId]/` | `/courses/:id` | Course detail and enrollment |
| `login/` | `/login` | Tenant-scoped student login |
| `register/` | `/register` | Student registration |
| `dashboard/` | `/dashboard` | Student learning dashboard |
| `[...slug]/` | `/*` | Builder-generated pages (catch-all) |

## Future Pages
- `courses/[courseId]/learn/page.tsx` — Course player (video + lesson navigation)
- `courses/[courseId]/learn/[lessonId]/page.tsx` — Single lesson view
- `profile/page.tsx` — Student profile editing
- `certificates/page.tsx` — Earned certificates list
- `certificates/[id]/page.tsx` — Certificate detail and download
- `checkout/page.tsx` — Course checkout page (Stripe)
- `checkout/success/page.tsx` — Payment success
