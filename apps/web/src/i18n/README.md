# `i18n/` — Internationalization Configuration

## Purpose
Configures `next-intl` for multi-language support. The platform supports any number of languages with RTL support.

## Role
Handles locale detection (cookie → Accept-Language header → default), message loading, and RTL direction.

## Current Files
| File | Description |
|---|---|
| `config.ts` | Supported locales, default locale, RTL locale list, locale display names |
| `request.ts` | Server-side request config — detects locale and loads messages |

## How to Add a New Language
1. Create `messages/{locale}.json` with all translated keys
2. Add the locale code to `locales` array in `config.ts`
3. Add display name to `localeNames` in `config.ts`
4. If RTL, add to `rtlLocales` in `config.ts`
5. Done — the language appears in the switcher automatically

## Architecture
- **No URL prefix** — locale is stored in a cookie, not in the URL path
- **Server Components** — use `await getTranslations('namespace')`
- **Client Components** — use `useTranslations('namespace')`
- **Messages** — stored in `apps/web/messages/{locale}.json`
