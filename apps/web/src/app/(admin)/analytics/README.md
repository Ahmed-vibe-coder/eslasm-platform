# `(admin)/analytics/` — Platform Analytics

## Purpose
Platform-wide metrics dashboard showing signups, revenue, churn, enrollments, and other key performance indicators.

## URL
`/admin/analytics`

## Future Files
- `_components/metrics-grid.tsx` — Key metric cards with trend indicators
- `_components/signups-chart.tsx` — Monthly signups line chart
- `_components/revenue-chart.tsx` — MRR/ARR revenue chart
- `_components/churn-chart.tsx` — Churn rate over time
- `_components/top-agencies.tsx` — Top performing agencies table
- `_hooks/use-analytics.ts` — Analytics data hooks with date range filter
- `loading.tsx` — Dashboard skeleton
