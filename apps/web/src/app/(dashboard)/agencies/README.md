# `(dashboard)/agencies/` — Agencies Management

## Purpose
Agency CRUD — list, create, and manage learning platforms. Each agency is a fully branded tenant.

## URL Mapping
| Folder | URL | Description |
|---|---|---|
| `page.tsx` | `/agencies` | Agency listing grid/table |
| `new/` | `/agencies/new` | Create new agency form |
| `[id]/` | `/agencies/:id` | Agency detail and management |

## Future Files
- `_components/agency-card.tsx` — Agency preview card with status badge
- `_components/create-agency-form.tsx` — Multi-step agency creation form
- `_hooks/use-agencies.ts` — TanStack Query hooks for agency CRUD
- `loading.tsx` — Skeleton grid while loading agencies
