# `(auth)/` — Authentication Pages

## Purpose
Handles user authentication — signing in and creating new accounts. Uses a centered card layout with no header or sidebar.

## Role
Entry point for all user types (agency owners, trainers, students sign in from tenant pages). Integrates with Auth.js v5 for session management.

## URL Mapping
| Folder | URL | Page |
|---|---|---|
| `login/` | `/login` | Sign in form |
| `register/` | `/register` | Account creation form |

## Future Pages
- `forgot-password/page.tsx` → `/forgot-password` — Password reset request
- `reset-password/page.tsx` → `/reset-password` — Password reset form (with token)
- `verify-email/page.tsx` → `/verify-email` — Email verification callback
- `sso/page.tsx` → `/sso` — SSO/OAuth callback page

## Future Files in Each Folder
- `_components/login-form.tsx` — Login form with react-hook-form + zod
- `_components/register-form.tsx` — Registration form with field validation
- `_components/social-buttons.tsx` — Google/GitHub OAuth buttons
- `_hooks/use-auth.ts` — Authentication hooks (login, logout, session)
