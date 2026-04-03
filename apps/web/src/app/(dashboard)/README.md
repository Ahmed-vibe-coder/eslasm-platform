# `(dashboard)/` — Agency Owner Dashboard

## Purpose
The main workspace for agency owners. This is where they manage their learning platforms (agencies), view analytics, manage billing, and access the builder.

## Role
Protected area requiring authentication. Uses a sidebar + header layout. Agency owners spend most of their time here.

## URL Mapping
| Folder | URL | Page |
|---|---|---|
| `page.tsx` | `/` | Dashboard overview with key metrics |
| `agencies/` | `/agencies` | List of owned agencies |
| `agencies/new/` | `/agencies/new` | Create new agency form |
| `agencies/[id]/` | `/agencies/:id` | Single agency detail/management |
| `templates/` | `/templates` | Browse website templates |
| `billing/` | `/billing` | Subscription and payment management |
| `settings/` | `/settings` | Account settings |
| `settings/domain/` | `/settings/domain` | Custom domain configuration |

## Future Pages
- `agencies/[id]/courses/page.tsx` → `/agencies/:id/courses` — Courses for this agency
- `agencies/[id]/students/page.tsx` → `/agencies/:id/students` — Students enrolled
- `agencies/[id]/trainers/page.tsx` → `/agencies/:id/trainers` — Trainers in this agency
- `agencies/[id]/analytics/page.tsx` → `/agencies/:id/analytics` — Agency analytics
- `agencies/[id]/settings/page.tsx` → `/agencies/:id/settings` — Agency-specific settings
- `notifications/page.tsx` → `/notifications` — Notification center
- `support/page.tsx` → `/support` — Help and support
