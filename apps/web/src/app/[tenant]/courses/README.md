# `[tenant]/courses/` — Tenant Course Catalog

## Purpose
Displays all published courses for this agency. Students can browse, filter, and enroll.

## URL
`/courses` (on tenant subdomain)

## Future Files
- `_components/course-card.tsx` — Course preview card (thumbnail, title, price, instructor)
- `_components/course-filters.tsx` — Filter by level, category, price range
- `_components/course-search.tsx` — Search input with debounce
- `_hooks/use-tenant-courses.ts` — Course listing hooks filtered by tenant
- `[courseId]/` — Course detail page
- `[courseId]/learn/page.tsx` — Course player (after enrollment)
- `loading.tsx` — Course grid skeleton
