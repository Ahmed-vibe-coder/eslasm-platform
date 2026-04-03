# `(dashboard)/settings/domain/` — Custom Domain

## Purpose
Connect a custom domain to an agency. Guides users through DNS configuration and verifies domain ownership.

## URL
`/settings/domain`

## Future Files
- `_components/domain-form.tsx` — Domain input with validation
- `_components/dns-records-table.tsx` — Required DNS records display (CNAME, TXT)
- `_components/verification-status.tsx` — Real-time domain verification status
- `_hooks/use-domain-verification.ts` — Polling hook for DNS verification
