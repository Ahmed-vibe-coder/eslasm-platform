# `[tenant]/[...slug]/` — Builder-Generated Pages (Catch-All)

## Purpose
Renders pages created by the agency owner through the GrapesJS builder. The `[...slug]` catches any URL path not matched by other tenant routes and looks up the corresponding builder page.

## URL
`/*` (any unmatched path on tenant subdomain)

## How It Works
1. Slug segments are joined: `/about/team` → `about/team`
2. Database lookup for a published `BuilderPage` with matching slug and tenant
3. If found → render the stored GrapesJS JSON as HTML/React
4. If not found → show 404

## Future Implementation
- Fetch `BuilderPage` from database by `tenantId` + `slug`
- Use `@eduforge/builder-core` renderer to convert JSON to HTML
- Inject dynamic data into LMS blocks (courses, trainers, etc.)
- Support page-level metadata (title, description, OG image)
