# `api/domain/verify/` — Domain Verification

## Purpose
Verifies that a custom domain's DNS records are correctly configured (CNAME + TXT verification).

## Method
`POST /api/domain/verify`

## Body
```json
{ "domain": "string", "agencyId": "string" }
```
