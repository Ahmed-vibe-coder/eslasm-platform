# `(dashboard)/settings/` — Account Settings

## Purpose
Account-level settings for the agency owner: profile, password, notifications, and custom domain configuration.

## URL Mapping
| Folder | URL | Description |
|---|---|---|
| `page.tsx` | `/settings` | General account settings |
| `domain/` | `/settings/domain` | Custom domain DNS configuration |

## Future Pages
- `profile/page.tsx` → `/settings/profile` — Profile editing (name, avatar, bio)
- `security/page.tsx` → `/settings/security` — Password change, 2FA setup
- `notifications/page.tsx` → `/settings/notifications` — Email notification preferences
- `api-keys/page.tsx` → `/settings/api-keys` — API key management
- `danger/page.tsx` → `/settings/danger` — Delete account, export data
