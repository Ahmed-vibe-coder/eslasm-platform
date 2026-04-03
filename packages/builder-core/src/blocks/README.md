# `packages/builder-core/src/blocks/` — GrapesJS Custom Blocks

## Purpose
Each file defines a custom block for the GrapesJS drag-and-drop editor. Blocks appear in the editor's sidebar and can be dragged onto the canvas.

## Role
Provides LMS-specific building blocks that agency owners use to construct their website pages. Each block contains meaningful default content.

## Block Structure
Every block file exports a function:
```typescript
export const myBlock = (editor: grapesjs.Editor) => {
  editor.BlockManager.add('block-id', {
    label: 'Display Name',
    category: 'Category',
    content: { /* GrapesJS component tree */ },
  })
}
```

## Current Blocks
| File | Block | Category |
|---|---|---|
| `hero-block.ts` | Hero Section (title + subtitle + CTA) | Sections |
| `courses-grid.ts` | Course Cards Grid (3 cards) | LMS |

## Future Blocks
- `navbar-block.ts` — Responsive navigation bar | Layout
- `footer-block.ts` — Multi-column footer | Layout
- `testimonials-block.ts` — Student testimonials | LMS
- `trainer-card-block.ts` — Trainer profile card | LMS
- `pricing-table-block.ts` — Pricing comparison | Sections
- `faq-block.ts` — FAQ accordion | Components
- `contact-form-block.ts` — Contact form | Components
- `video-embed-block.ts` — Video player embed | Components
- `stats-counter-block.ts` — Animated statistics | Components
- `cta-block.ts` — Call-to-action banner | Sections
- `gallery-block.ts` — Image gallery/carousel | Components
