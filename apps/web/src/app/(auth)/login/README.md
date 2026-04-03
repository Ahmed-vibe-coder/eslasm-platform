# `(auth)/login/` — Sign In Page

## Purpose
Allows existing users to sign in to their EduForge account using email/password or OAuth providers.

## URL
`/login`

## Current Files
- `page.tsx` — Sign in page with title and subtitle

## Future Files
- `_components/login-form.tsx` — Full login form (email, password, remember me)
- `_components/social-login.tsx` — OAuth buttons (Google, GitHub)
- `_hooks/use-login.ts` — Login mutation hook with error handling
- `loading.tsx` — Loading skeleton
- `error.tsx` — Error boundary
