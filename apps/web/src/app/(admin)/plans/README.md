# `(admin)/plans/` — Pricing Plans Management

## Purpose
Configure the subscription plans (Starter, Pro, Enterprise) with pricing, features, and limits.

## URL
`/admin/plans`

## Future Files
- `_components/plan-form.tsx` — Edit plan details (price, features, limits)
- `_components/feature-list-editor.tsx` — Dynamic feature list editor
- `_components/limits-config.tsx` — Configure limits (max courses, students, storage)
- `_hooks/use-admin-plans.ts` — Plan CRUD hooks
- `[id]/page.tsx` → `/admin/plans/:id` — Edit single plan
