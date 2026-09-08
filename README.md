# MONTREVE — Made for Higher Places

A full luxury alpine fashion e-commerce storefront for **MONTREVE**, a fictional
European fashion house inspired by the French and Swiss Alps (Courchevel, Megève,
Gstaad, St. Moritz, Verbier). Built with Next.js (App Router), TypeScript and
Tailwind CSS.

## What's here

- **Homepage** with hero, Women/Men split, New Arrivals rail, editorial campaign,
  materials section, alpine stories and newsletter.
- **7 category / listing pages** (`/women`, `/men`, `/new-arrivals`, `/cashmere`,
  `/outerwear`, `/ski`, `/accessories`) sharing one data-driven `PLPTemplate` with
  working category, size, colour, material and price filters, sort, and a 2/3/4
  column toggle.
- **32 unique products** (12 women, 12 men, 8 accessories) in `lib/products.ts`,
  each with full commerce data: price, colourways, sizes, materials, details,
  care, related products and a "complete the look" set.
- **Real product detail pages** at `/products/[slug]`, one template driven
  entirely by product data: gallery with zoom, colour/size selectors, size guide
  modal, accordions, "you may also like", "complete the look", and a mobile
  sticky add-to-bag bar.
- **Functional cart** (slide-out drawer, `localStorage`-backed), **fullscreen
  search overlay**, and a **luxury mega-menu** in the header.
- Fully responsive, from a cinematic desktop hero down to a fullscreen mobile nav.

## Product photography — placeholder art system

No real photography exists for a brand that doesn't exist yet. Rather than ship
broken image tags, every product ships with a **deterministic, on-brand SVG
placeholder** (`components/ArtPlate.tsx`): a warm studio backdrop, a simplified
garment silhouette in the product's actual colourway, a soft MONTREVE watermark,
and a small proof-sheet caption naming the shot (front / back / material /
hardware / worn / lifestyle). It's seeded per product+shot+colour, so it's stable
across reloads and visually consistent with the rest of the catalogue.

**`IMAGE_MANIFEST.md`** (regenerate with `npx tsx scripts/generate-manifest.ts`)
lists all 192 required shots (6 per product × 32 products) with a ready-to-use
image-generation prompt for each — product name, colourway, material, hardware
and location are already interpolated in. Feed these straight to an image model
or a photographer's shot list to replace the placeholders with real photography;
nothing else in the app needs to change, since every image reference flows
through `lib/products.ts`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # eslint
```

## Project structure

```
app/                    routes (App Router)
components/              UI components (Header, ProductCard, ProductGallery, …)
lib/                     product data, types, cart/UI context, art-direction helpers
IMAGE_MANIFEST.md        full photography shot list + generation prompts
```
