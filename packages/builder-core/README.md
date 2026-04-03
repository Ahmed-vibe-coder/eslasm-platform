# `packages/builder-core/` — GrapesJS Builder Core

## Purpose
Contains all GrapesJS configuration, custom blocks, plugins, and the page renderer. This is the engine behind the drag-and-drop page builder.

## Role
Separates builder logic from the Next.js app so it can be tested independently and potentially reused in other contexts (e.g., a standalone builder preview).

## Current Files
| File | Contents |
|---|---|
| `src/index.ts` | Default builder config + re-exports |
| `src/blocks/index.ts` | Block registry barrel export |
| `src/blocks/hero-block.ts` | Hero section block with title, subtitle, CTA |
| `src/blocks/courses-grid.ts` | Dynamic course cards grid block |

## Future Files
- `src/blocks/navbar-block.ts` — Navigation bar block with logo and links
- `src/blocks/footer-block.ts` — Footer block with columns and social links
- `src/blocks/testimonials-block.ts` — Student testimonials carousel block
- `src/blocks/trainer-card-block.ts` — Trainer profile card block
- `src/blocks/pricing-table-block.ts` — Pricing comparison table block
- `src/blocks/faq-block.ts` — FAQ accordion block
- `src/blocks/contact-form-block.ts` — Contact form block
- `src/blocks/video-embed-block.ts` — Video embed block (YouTube, Bunny.net)
- `src/plugins/` — GrapesJS plugins (custom panels, style manager presets)
- `src/renderer/json-to-html.ts` — Converts stored GrapesJS JSON to static HTML for tenant pages
- `src/renderer/json-to-react.tsx` — Converts stored JSON to React components
- `src/themes/` — Pre-built GrapesJS editor themes (light, dark)
- `src/styles/` — Default CSS styles injected into the builder canvas
