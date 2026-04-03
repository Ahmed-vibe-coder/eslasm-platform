# `(dashboard)/billing/` — Billing & Subscription

## Purpose
Manage subscription plan, payment methods, and view invoice history. Integrates with Stripe.

## URL
`/billing`

## Future Files
- `_components/current-plan.tsx` — Current plan display with upgrade button
- `_components/payment-methods.tsx` — Credit card management
- `_components/invoice-table.tsx` — Invoice history table
- `_components/plan-upgrade-modal.tsx` — Plan comparison and upgrade flow
- `_hooks/use-billing.ts` — Billing and subscription hooks
- `loading.tsx` — Skeleton while loading billing data
