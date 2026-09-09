# MONTREVE — Product Photography Generation Manifest

This document is the complete image architecture for the MONTREVE web store, generated
directly from the live product data in `lib/products.ts`. Every product currently ships
with a branded, deterministic SVG placeholder (see `components/ArtPlate.tsx`) so the site
is fully navigable and visually coherent today. Each placeholder should be replaced with a
real photograph generated (or shot) from the prompt below it — the prompt already encodes
the product name, colourway, material and location so the six shots per product stay
consistent with each other and with the rest of the catalogue.

**Total products:** 32
**Total images required:** 192 (6 shots × 32 products)

Recommended image spec: 2400 × 3000px (4:5), sRGB, exported as JPEG or WebP. Background:
warm ivory / stone seamless for studio shots (Images 1, 2, 5); neutral macro backdrop for
Images 3–4; natural alpine environment for Image 6.

## How a real photo replaces a placeholder — no code changes needed

Every product image on the site is resolved by `components/ProductArt.tsx` /
`components/ProductGallery.tsx`. Both first try to load a real file at a fixed path
under `/public/products/`; if that file doesn't exist (404), they silently fall back to
the generated SVG placeholder. So to go live with a real photo, just save it — nothing
else needs to change.

**Path convention:** `public/products/<slug>/<shot>--<colour-slug>.jpg`

Each entry below already prints the exact path to save that file at. `<colour-slug>` is
the colour name lower-cased with spaces replaced by hyphens (e.g. "Warm Cream" →
`warm-cream`). You can fill the catalogue in gradually, one file at a time — any shot
without a matching file just keeps showing its placeholder.

---


## WOMEN (12 products)

### The Megève Cashmere Turtleneck
- Slug: `megeve-cashmere-turtleneck`
- Category: Cashmere
- Colourways: Ivory (#EEEAE1), Oatmeal (#CEC4B4), Taupe (#87796B), Black (#111111)
- Materials: 100% cashmere
- Location: Megève, France

**Image 1 — Front**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio front-view product shot of the MONTREVE The Megève Cashmere Turtleneck in Ivory, shown on an invisible mannequin or gently draped, centred on a warm ivory/stone seamless background. Crisp focus on cut, silhouette and construction. 85mm lens, even soft shadow, colour-accurate 100% cashmere.

Save as: `public/products/megeve-cashmere-turtleneck/front--ivory.jpg`

**Image 2 — Back**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio back-view product shot of the MONTREVE The Megève Cashmere Turtleneck in Ivory, same styling, lighting, background and proportions as the matching front-view shot for exact visual consistency. Show back seaming, yoke and hem construction clearly. 85mm lens, warm ivory/stone seamless background.

Save as: `public/products/megeve-cashmere-turtleneck/back--ivory.jpg`

**Image 3 — Material Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Extreme macro close-up of the 100% cashmere fabric of the MONTREVE The Megève Cashmere Turtleneck in Ivory. Visible fibre structure and natural texture, shallow depth of field, soft directional daylight, styled as a luxury fabric-swatch detail shot for an e-commerce product gallery.

Save as: `public/products/megeve-cashmere-turtleneck/material--ivory.jpg`

**Image 4 — Hardware / Stitching Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Macro detail shot of the ribbed collar seam and woven interior MONTREVE label on the MONTREVE The Megève Cashmere Turtleneck in Ivory, including visible stitching. Shallow depth of field, warm directional light, subtle embossed or engraved "MONTREVE" mark on the hardware where realistic. Neutral ivory background.

Save as: `public/products/megeve-cashmere-turtleneck/hardware--ivory.jpg`

**Image 5 — Worn (Studio)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. An elegant female model in her late twenties, natural European casting, high-fashion casting, wearing the MONTREVE The Megève Cashmere Turtleneck in Ivory against a soft neutral studio backdrop. Relaxed, confident, unposed stance, natural skin, realistic fabric drape. 85mm fashion photography, shallow depth of field.

Save as: `public/products/megeve-cashmere-turtleneck/worn--ivory.jpg`

**Image 6 — Lifestyle (Alpine)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Editorial lifestyle photograph of a model wearing the MONTREVE The Megève Cashmere Turtleneck in Ivory, seated on a sunlit chalet terrace with a coffee, mountains behind her, in Megève, France. Natural winter sunlight, soft shadows, cinematic 35mm environmental fashion photography, shallow depth of field, quiet, exclusive alpine atmosphere with no crowds.

Save as: `public/products/megeve-cashmere-turtleneck/lifestyle--ivory.jpg`

Note: generate this same six-shot set once per additional colourway shown on the PDP (Oatmeal, Taupe, Black), reusing the identical prompt with the colour name substituted. Save each set at `public/products/megeve-cashmere-turtleneck/<shot>--<colour-slug>.jpg` so garment cut, styling and background stay identical across every colour of this product.

### The Courchevel Shearling Coat
- Slug: `courchevel-shearling-coat`
- Category: Coats & Jackets
- Colourways: Ivory (#EEEAE1), Warm Cream (#E5DED1), Oatmeal (#CEC4B4)
- Materials: Shearling (sheepskin), Horn buttons
- Location: Courchevel 1850, France

**Image 1 — Front**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio front-view product shot of the MONTREVE The Courchevel Shearling Coat in Ivory, shown on an invisible mannequin or gently draped, centred on a warm ivory/stone seamless background. Crisp focus on cut, silhouette and construction. 85mm lens, even soft shadow, colour-accurate Shearling (sheepskin).

Save as: `public/products/courchevel-shearling-coat/front--ivory.jpg`

**Image 2 — Back**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio back-view product shot of the MONTREVE The Courchevel Shearling Coat in Ivory, same styling, lighting, background and proportions as the matching front-view shot for exact visual consistency. Show back seaming, yoke and hem construction clearly. 85mm lens, warm ivory/stone seamless background.

Save as: `public/products/courchevel-shearling-coat/back--ivory.jpg`

**Image 3 — Material Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Extreme macro close-up of the Shearling (sheepskin) fabric of the MONTREVE The Courchevel Shearling Coat in Ivory. Visible fibre structure and natural texture, shallow depth of field, soft directional daylight, styled as a luxury fabric-swatch detail shot for an e-commerce product gallery.

Save as: `public/products/courchevel-shearling-coat/material--ivory.jpg`

**Image 4 — Hardware / Stitching Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Macro detail shot of the horn button closure and interior leather MONTREVE tag on the MONTREVE The Courchevel Shearling Coat in Ivory, including visible stitching. Shallow depth of field, warm directional light, subtle embossed or engraved "MONTREVE" mark on the hardware where realistic. Neutral ivory background.

Save as: `public/products/courchevel-shearling-coat/hardware--ivory.jpg`

**Image 5 — Worn (Studio)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. An elegant female model in her thirties, natural European casting, high-fashion casting, wearing the MONTREVE The Courchevel Shearling Coat in Ivory against a soft neutral studio backdrop. Relaxed, confident, unposed stance, natural skin, realistic fabric drape. 85mm fashion photography, shallow depth of field.

Save as: `public/products/courchevel-shearling-coat/worn--ivory.jpg`

**Image 6 — Lifestyle (Alpine)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Editorial lifestyle photograph of a model wearing the MONTREVE The Courchevel Shearling Coat in Ivory, walking along a snow-covered chalet terrace at golden hour, in Courchevel 1850, France. Natural winter sunlight, soft shadows, cinematic 35mm environmental fashion photography, shallow depth of field, quiet, exclusive alpine atmosphere with no crowds.

Save as: `public/products/courchevel-shearling-coat/lifestyle--ivory.jpg`

Note: generate this same six-shot set once per additional colourway shown on the PDP (Warm Cream, Oatmeal), reusing the identical prompt with the colour name substituted. Save each set at `public/products/courchevel-shearling-coat/<shot>--<colour-slug>.jpg` so garment cut, styling and background stay identical across every colour of this product.

### The Valais Cashmere Knit
- Slug: `valais-cashmere-knit`
- Category: Cashmere
- Colourways: Snow White (#F7F6F2), Ivory (#EEEAE1), Stone (#AAA195), Espresso (#332A25)
- Materials: 100% cashmere
- Location: Val de Bagnes, Switzerland

**Image 1 — Front**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio front-view product shot of the MONTREVE The Valais Cashmere Knit in Snow White, shown on an invisible mannequin or gently draped, centred on a warm ivory/stone seamless background. Crisp focus on cut, silhouette and construction. 85mm lens, even soft shadow, colour-accurate 100% cashmere.

Save as: `public/products/valais-cashmere-knit/front--snow-white.jpg`

**Image 2 — Back**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio back-view product shot of the MONTREVE The Valais Cashmere Knit in Snow White, same styling, lighting, background and proportions as the matching front-view shot for exact visual consistency. Show back seaming, yoke and hem construction clearly. 85mm lens, warm ivory/stone seamless background.

Save as: `public/products/valais-cashmere-knit/back--snow-white.jpg`

**Image 3 — Material Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Extreme macro close-up of the 100% cashmere fabric of the MONTREVE The Valais Cashmere Knit in Snow White. Visible fibre structure and natural texture, shallow depth of field, soft directional daylight, styled as a luxury fabric-swatch detail shot for an e-commerce product gallery.

Save as: `public/products/valais-cashmere-knit/material--snow-white.jpg`

**Image 4 — Hardware / Stitching Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Macro detail shot of the ribbed crew neckline and woven interior MONTREVE label on the MONTREVE The Valais Cashmere Knit in Snow White, including visible stitching. Shallow depth of field, warm directional light, subtle embossed or engraved "MONTREVE" mark on the hardware where realistic. Neutral ivory background.

Save as: `public/products/valais-cashmere-knit/hardware--snow-white.jpg`

**Image 5 — Worn (Studio)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. An elegant female model in her twenties, natural European casting, high-fashion casting, wearing the MONTREVE The Valais Cashmere Knit in Snow White against a soft neutral studio backdrop. Relaxed, confident, unposed stance, natural skin, realistic fabric drape. 85mm fashion photography, shallow depth of field.

Save as: `public/products/valais-cashmere-knit/worn--snow-white.jpg`

**Image 6 — Lifestyle (Alpine)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Editorial lifestyle photograph of a model wearing the MONTREVE The Valais Cashmere Knit in Snow White, walking through a quiet snow-covered pine forest, in Val de Bagnes, Switzerland. Natural winter sunlight, soft shadows, cinematic 35mm environmental fashion photography, shallow depth of field, quiet, exclusive alpine atmosphere with no crowds.

Save as: `public/products/valais-cashmere-knit/lifestyle--snow-white.jpg`

Note: generate this same six-shot set once per additional colourway shown on the PDP (Ivory, Stone, Espresso), reusing the identical prompt with the colour name substituted. Save each set at `public/products/valais-cashmere-knit/<shot>--<colour-slug>.jpg` so garment cut, styling and background stay identical across every colour of this product.

### The St. Moritz Wool Coat
- Slug: `st-moritz-wool-coat`
- Category: Coats & Jackets
- Colourways: Oatmeal (#CEC4B4), Stone (#AAA195), Espresso (#332A25), Black (#111111)
- Materials: 90% wool, 10% cashmere
- Location: St. Moritz, Switzerland

**Image 1 — Front**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio front-view product shot of the MONTREVE The St. Moritz Wool Coat in Oatmeal, shown on an invisible mannequin or gently draped, centred on a warm ivory/stone seamless background. Crisp focus on cut, silhouette and construction. 85mm lens, even soft shadow, colour-accurate 90% wool, 10% cashmere.

Save as: `public/products/st-moritz-wool-coat/front--oatmeal.jpg`

**Image 2 — Back**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio back-view product shot of the MONTREVE The St. Moritz Wool Coat in Oatmeal, same styling, lighting, background and proportions as the matching front-view shot for exact visual consistency. Show back seaming, yoke and hem construction clearly. 85mm lens, warm ivory/stone seamless background.

Save as: `public/products/st-moritz-wool-coat/back--oatmeal.jpg`

**Image 3 — Material Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Extreme macro close-up of the 90% wool, 10% cashmere fabric of the MONTREVE The St. Moritz Wool Coat in Oatmeal. Visible fibre structure and natural texture, shallow depth of field, soft directional daylight, styled as a luxury fabric-swatch detail shot for an e-commerce product gallery.

Save as: `public/products/st-moritz-wool-coat/material--oatmeal.jpg`

**Image 4 — Hardware / Stitching Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Macro detail shot of the double-breasted horn buttons and notch lapel stitching on the MONTREVE The St. Moritz Wool Coat in Oatmeal, including visible stitching. Shallow depth of field, warm directional light, subtle embossed or engraved "MONTREVE" mark on the hardware where realistic. Neutral ivory background.

Save as: `public/products/st-moritz-wool-coat/hardware--oatmeal.jpg`

**Image 5 — Worn (Studio)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. An elegant female model in her thirties, natural European casting, high-fashion casting, wearing the MONTREVE The St. Moritz Wool Coat in Oatmeal against a soft neutral studio backdrop. Relaxed, confident, unposed stance, natural skin, realistic fabric drape. 85mm fashion photography, shallow depth of field.

Save as: `public/products/st-moritz-wool-coat/worn--oatmeal.jpg`

**Image 6 — Lifestyle (Alpine)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Editorial lifestyle photograph of a model wearing the MONTREVE The St. Moritz Wool Coat in Oatmeal, standing beside a frozen lake with mountains in the distance, in St. Moritz, Switzerland. Natural winter sunlight, soft shadows, cinematic 35mm environmental fashion photography, shallow depth of field, quiet, exclusive alpine atmosphere with no crowds.

Save as: `public/products/st-moritz-wool-coat/lifestyle--oatmeal.jpg`

Note: generate this same six-shot set once per additional colourway shown on the PDP (Stone, Espresso, Black), reusing the identical prompt with the colour name substituted. Save each set at `public/products/st-moritz-wool-coat/<shot>--<colour-slug>.jpg` so garment cut, styling and background stay identical across every colour of this product.

### The Gstaad Alpine Jacket
- Slug: `gstaad-alpine-jacket`
- Category: Ski & Alpine
- Colourways: Snow White (#F7F6F2), Stone (#AAA195), Espresso (#332A25)
- Materials: Technical wool-blend shell, Merino wool lining
- Location: Gstaad, Switzerland

**Image 1 — Front**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio front-view product shot of the MONTREVE The Gstaad Alpine Jacket in Snow White, shown on an invisible mannequin or gently draped, centred on a warm ivory/stone seamless background. Crisp focus on cut, silhouette and construction. 85mm lens, even soft shadow, colour-accurate Technical wool-blend shell.

Save as: `public/products/gstaad-alpine-jacket/front--snow-white.jpg`

**Image 2 — Back**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio back-view product shot of the MONTREVE The Gstaad Alpine Jacket in Snow White, same styling, lighting, background and proportions as the matching front-view shot for exact visual consistency. Show back seaming, yoke and hem construction clearly. 85mm lens, warm ivory/stone seamless background.

Save as: `public/products/gstaad-alpine-jacket/back--snow-white.jpg`

**Image 3 — Material Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Extreme macro close-up of the Technical wool-blend shell fabric of the MONTREVE The Gstaad Alpine Jacket in Snow White. Visible fibre structure and natural texture, shallow depth of field, soft directional daylight, styled as a luxury fabric-swatch detail shot for an e-commerce product gallery.

Save as: `public/products/gstaad-alpine-jacket/material--snow-white.jpg`

**Image 4 — Hardware / Stitching Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Macro detail shot of the matte zip pull with engraved M and popper storm flap on the MONTREVE The Gstaad Alpine Jacket in Snow White, including visible stitching. Shallow depth of field, warm directional light, subtle embossed or engraved "MONTREVE" mark on the hardware where realistic. Neutral ivory background.

Save as: `public/products/gstaad-alpine-jacket/hardware--snow-white.jpg`

**Image 5 — Worn (Studio)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. An elegant female model in her twenties, natural European casting, high-fashion casting, wearing the MONTREVE The Gstaad Alpine Jacket in Snow White against a soft neutral studio backdrop. Relaxed, confident, unposed stance, natural skin, realistic fabric drape. 85mm fashion photography, shallow depth of field.

Save as: `public/products/gstaad-alpine-jacket/worn--snow-white.jpg`

**Image 6 — Lifestyle (Alpine)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Editorial lifestyle photograph of a model wearing the MONTREVE The Gstaad Alpine Jacket in Snow White, standing at the top of a quiet ski slope, skis in hand, in Gstaad, Switzerland. Natural winter sunlight, soft shadows, cinematic 35mm environmental fashion photography, shallow depth of field, quiet, exclusive alpine atmosphere with no crowds.

Save as: `public/products/gstaad-alpine-jacket/lifestyle--snow-white.jpg`

Note: generate this same six-shot set once per additional colourway shown on the PDP (Stone, Espresso), reusing the identical prompt with the colour name substituted. Save each set at `public/products/gstaad-alpine-jacket/<shot>--<colour-slug>.jpg` so garment cut, styling and background stay identical across every colour of this product.

### The Verbier Ski Trouser
- Slug: `verbier-ski-trouser`
- Category: Ski & Alpine
- Colourways: Snow White (#F7F6F2), Stone (#AAA195), Black (#111111)
- Materials: Technical stretch wool-blend
- Location: Verbier, Switzerland

**Image 1 — Front**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio front-view product shot of the MONTREVE The Verbier Ski Trouser in Snow White, shown on an invisible mannequin or gently draped, centred on a warm ivory/stone seamless background. Crisp focus on cut, silhouette and construction. 85mm lens, even soft shadow, colour-accurate Technical stretch wool-blend.

Save as: `public/products/verbier-ski-trouser/front--snow-white.jpg`

**Image 2 — Back**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio back-view product shot of the MONTREVE The Verbier Ski Trouser in Snow White, same styling, lighting, background and proportions as the matching front-view shot for exact visual consistency. Show back seaming, yoke and hem construction clearly. 85mm lens, warm ivory/stone seamless background.

Save as: `public/products/verbier-ski-trouser/back--snow-white.jpg`

**Image 3 — Material Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Extreme macro close-up of the Technical stretch wool-blend fabric of the MONTREVE The Verbier Ski Trouser in Snow White. Visible fibre structure and natural texture, shallow depth of field, soft directional daylight, styled as a luxury fabric-swatch detail shot for an e-commerce product gallery.

Save as: `public/products/verbier-ski-trouser/material--snow-white.jpg`

**Image 4 — Hardware / Stitching Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Macro detail shot of the side-seam zip pocket and reinforced hem stitching on the MONTREVE The Verbier Ski Trouser in Snow White, including visible stitching. Shallow depth of field, warm directional light, subtle embossed or engraved "MONTREVE" mark on the hardware where realistic. Neutral ivory background.

Save as: `public/products/verbier-ski-trouser/hardware--snow-white.jpg`

**Image 5 — Worn (Studio)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. An elegant female model in her twenties, natural European casting, high-fashion casting, wearing the MONTREVE The Verbier Ski Trouser in Snow White against a soft neutral studio backdrop. Relaxed, confident, unposed stance, natural skin, realistic fabric drape. 85mm fashion photography, shallow depth of field.

Save as: `public/products/verbier-ski-trouser/worn--snow-white.jpg`

**Image 6 — Lifestyle (Alpine)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Editorial lifestyle photograph of a model wearing the MONTREVE The Verbier Ski Trouser in Snow White, walking across a sunlit mountain plateau with skis over one shoulder, in Verbier, Switzerland. Natural winter sunlight, soft shadows, cinematic 35mm environmental fashion photography, shallow depth of field, quiet, exclusive alpine atmosphere with no crowds.

Save as: `public/products/verbier-ski-trouser/lifestyle--snow-white.jpg`

Note: generate this same six-shot set once per additional colourway shown on the PDP (Stone, Black), reusing the identical prompt with the colour name substituted. Save each set at `public/products/verbier-ski-trouser/<shot>--<colour-slug>.jpg` so garment cut, styling and background stay identical across every colour of this product.

### The Chamonix Cashmere Cardigan
- Slug: `chamonix-cashmere-cardigan`
- Category: Cashmere
- Colourways: Ivory (#EEEAE1), Oatmeal (#CEC4B4), Taupe (#87796B)
- Materials: 100% cashmere
- Location: Chamonix, France

**Image 1 — Front**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio front-view product shot of the MONTREVE The Chamonix Cashmere Cardigan in Ivory, shown on an invisible mannequin or gently draped, centred on a warm ivory/stone seamless background. Crisp focus on cut, silhouette and construction. 85mm lens, even soft shadow, colour-accurate 100% cashmere.

Save as: `public/products/chamonix-cashmere-cardigan/front--ivory.jpg`

**Image 2 — Back**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio back-view product shot of the MONTREVE The Chamonix Cashmere Cardigan in Ivory, same styling, lighting, background and proportions as the matching front-view shot for exact visual consistency. Show back seaming, yoke and hem construction clearly. 85mm lens, warm ivory/stone seamless background.

Save as: `public/products/chamonix-cashmere-cardigan/back--ivory.jpg`

**Image 3 — Material Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Extreme macro close-up of the 100% cashmere fabric of the MONTREVE The Chamonix Cashmere Cardigan in Ivory. Visible fibre structure and natural texture, shallow depth of field, soft directional daylight, styled as a luxury fabric-swatch detail shot for an e-commerce product gallery.

Save as: `public/products/chamonix-cashmere-cardigan/material--ivory.jpg`

**Image 4 — Hardware / Stitching Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Macro detail shot of the horn button placket and patch pocket stitching on the MONTREVE The Chamonix Cashmere Cardigan in Ivory, including visible stitching. Shallow depth of field, warm directional light, subtle embossed or engraved "MONTREVE" mark on the hardware where realistic. Neutral ivory background.

Save as: `public/products/chamonix-cashmere-cardigan/hardware--ivory.jpg`

**Image 5 — Worn (Studio)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. An elegant female model in her thirties, natural European casting, high-fashion casting, wearing the MONTREVE The Chamonix Cashmere Cardigan in Ivory against a soft neutral studio backdrop. Relaxed, confident, unposed stance, natural skin, realistic fabric drape. 85mm fashion photography, shallow depth of field.

Save as: `public/products/chamonix-cashmere-cardigan/worn--ivory.jpg`

**Image 6 — Lifestyle (Alpine)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Editorial lifestyle photograph of a model wearing the MONTREVE The Chamonix Cashmere Cardigan in Ivory, sitting beside a fireplace in a wood-panelled chalet interior, in Chamonix, France. Natural winter sunlight, soft shadows, cinematic 35mm environmental fashion photography, shallow depth of field, quiet, exclusive alpine atmosphere with no crowds.

Save as: `public/products/chamonix-cashmere-cardigan/lifestyle--ivory.jpg`

Note: generate this same six-shot set once per additional colourway shown on the PDP (Oatmeal, Taupe), reusing the identical prompt with the colour name substituted. Save each set at `public/products/chamonix-cashmere-cardigan/<shot>--<colour-slug>.jpg` so garment cut, styling and background stay identical across every colour of this product.

### The Savoie Wool Trouser
- Slug: `savoie-wool-trouser`
- Category: Trousers
- Colourways: Oatmeal (#CEC4B4), Stone (#AAA195), Espresso (#332A25)
- Materials: Brushed wool
- Location: Savoie, France

**Image 1 — Front**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio front-view product shot of the MONTREVE The Savoie Wool Trouser in Oatmeal, shown on an invisible mannequin or gently draped, centred on a warm ivory/stone seamless background. Crisp focus on cut, silhouette and construction. 85mm lens, even soft shadow, colour-accurate Brushed wool.

Save as: `public/products/savoie-wool-trouser/front--oatmeal.jpg`

**Image 2 — Back**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio back-view product shot of the MONTREVE The Savoie Wool Trouser in Oatmeal, same styling, lighting, background and proportions as the matching front-view shot for exact visual consistency. Show back seaming, yoke and hem construction clearly. 85mm lens, warm ivory/stone seamless background.

Save as: `public/products/savoie-wool-trouser/back--oatmeal.jpg`

**Image 3 — Material Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Extreme macro close-up of the Brushed wool fabric of the MONTREVE The Savoie Wool Trouser in Oatmeal. Visible fibre structure and natural texture, shallow depth of field, soft directional daylight, styled as a luxury fabric-swatch detail shot for an e-commerce product gallery.

Save as: `public/products/savoie-wool-trouser/material--oatmeal.jpg`

**Image 4 — Hardware / Stitching Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Macro detail shot of the concealed hook-and-bar waistband closure on the MONTREVE The Savoie Wool Trouser in Oatmeal, including visible stitching. Shallow depth of field, warm directional light, subtle embossed or engraved "MONTREVE" mark on the hardware where realistic. Neutral ivory background.

Save as: `public/products/savoie-wool-trouser/hardware--oatmeal.jpg`

**Image 5 — Worn (Studio)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. An elegant female model in her twenties, natural European casting, high-fashion casting, wearing the MONTREVE The Savoie Wool Trouser in Oatmeal against a soft neutral studio backdrop. Relaxed, confident, unposed stance, natural skin, realistic fabric drape. 85mm fashion photography, shallow depth of field.

Save as: `public/products/savoie-wool-trouser/worn--oatmeal.jpg`

**Image 6 — Lifestyle (Alpine)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Editorial lifestyle photograph of a model wearing the MONTREVE The Savoie Wool Trouser in Oatmeal, walking through a quiet alpine village street, in Savoie, France. Natural winter sunlight, soft shadows, cinematic 35mm environmental fashion photography, shallow depth of field, quiet, exclusive alpine atmosphere with no crowds.

Save as: `public/products/savoie-wool-trouser/lifestyle--oatmeal.jpg`

Note: generate this same six-shot set once per additional colourway shown on the PDP (Stone, Espresso), reusing the identical prompt with the colour name substituted. Save each set at `public/products/savoie-wool-trouser/<shot>--<colour-slug>.jpg` so garment cut, styling and background stay identical across every colour of this product.

### The Mont Blanc Down Jacket
- Slug: `mont-blanc-down-jacket`
- Category: Outerwear
- Colourways: Snow White (#F7F6F2), Oatmeal (#CEC4B4), Espresso (#332A25), Black (#111111)
- Materials: Responsibly-sourced down fill, Technical matte shell
- Location: Chamonix-Mont-Blanc, France

**Image 1 — Front**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio front-view product shot of the MONTREVE The Mont Blanc Down Jacket in Snow White, shown on an invisible mannequin or gently draped, centred on a warm ivory/stone seamless background. Crisp focus on cut, silhouette and construction. 85mm lens, even soft shadow, colour-accurate Responsibly-sourced down fill.

Save as: `public/products/mont-blanc-down-jacket/front--snow-white.jpg`

**Image 2 — Back**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio back-view product shot of the MONTREVE The Mont Blanc Down Jacket in Snow White, same styling, lighting, background and proportions as the matching front-view shot for exact visual consistency. Show back seaming, yoke and hem construction clearly. 85mm lens, warm ivory/stone seamless background.

Save as: `public/products/mont-blanc-down-jacket/back--snow-white.jpg`

**Image 3 — Material Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Extreme macro close-up of the Responsibly-sourced down fill fabric of the MONTREVE The Mont Blanc Down Jacket in Snow White. Visible fibre structure and natural texture, shallow depth of field, soft directional daylight, styled as a luxury fabric-swatch detail shot for an e-commerce product gallery.

Save as: `public/products/mont-blanc-down-jacket/material--snow-white.jpg`

**Image 4 — Hardware / Stitching Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Macro detail shot of the two-way front zip with leather pull tab on the MONTREVE The Mont Blanc Down Jacket in Snow White, including visible stitching. Shallow depth of field, warm directional light, subtle embossed or engraved "MONTREVE" mark on the hardware where realistic. Neutral ivory background.

Save as: `public/products/mont-blanc-down-jacket/hardware--snow-white.jpg`

**Image 5 — Worn (Studio)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. An elegant female model in her twenties, natural European casting, high-fashion casting, wearing the MONTREVE The Mont Blanc Down Jacket in Snow White against a soft neutral studio backdrop. Relaxed, confident, unposed stance, natural skin, realistic fabric drape. 85mm fashion photography, shallow depth of field.

Save as: `public/products/mont-blanc-down-jacket/worn--snow-white.jpg`

**Image 6 — Lifestyle (Alpine)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Editorial lifestyle photograph of a model wearing the MONTREVE The Mont Blanc Down Jacket in Snow White, standing on a snow-covered balcony overlooking Mont Blanc, in Chamonix-Mont-Blanc, France. Natural winter sunlight, soft shadows, cinematic 35mm environmental fashion photography, shallow depth of field, quiet, exclusive alpine atmosphere with no crowds.

Save as: `public/products/mont-blanc-down-jacket/lifestyle--snow-white.jpg`

Note: generate this same six-shot set once per additional colourway shown on the PDP (Oatmeal, Espresso, Black), reusing the identical prompt with the colour name substituted. Save each set at `public/products/mont-blanc-down-jacket/<shot>--<colour-slug>.jpg` so garment cut, styling and background stay identical across every colour of this product.

### The Arlberg Rollneck
- Slug: `arlberg-rollneck`
- Category: Knitwear
- Colourways: Warm Cream (#E5DED1), Stone (#AAA195), Espresso (#332A25)
- Materials: 100% merino wool
- Location: Arlberg, Austria

**Image 1 — Front**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio front-view product shot of the MONTREVE The Arlberg Rollneck in Warm Cream, shown on an invisible mannequin or gently draped, centred on a warm ivory/stone seamless background. Crisp focus on cut, silhouette and construction. 85mm lens, even soft shadow, colour-accurate 100% merino wool.

Save as: `public/products/arlberg-rollneck/front--warm-cream.jpg`

**Image 2 — Back**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio back-view product shot of the MONTREVE The Arlberg Rollneck in Warm Cream, same styling, lighting, background and proportions as the matching front-view shot for exact visual consistency. Show back seaming, yoke and hem construction clearly. 85mm lens, warm ivory/stone seamless background.

Save as: `public/products/arlberg-rollneck/back--warm-cream.jpg`

**Image 3 — Material Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Extreme macro close-up of the 100% merino wool fabric of the MONTREVE The Arlberg Rollneck in Warm Cream. Visible fibre structure and natural texture, shallow depth of field, soft directional daylight, styled as a luxury fabric-swatch detail shot for an e-commerce product gallery.

Save as: `public/products/arlberg-rollneck/material--warm-cream.jpg`

**Image 4 — Hardware / Stitching Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Macro detail shot of the fine-gauge ribbed rollneck collar on the MONTREVE The Arlberg Rollneck in Warm Cream, including visible stitching. Shallow depth of field, warm directional light, subtle embossed or engraved "MONTREVE" mark on the hardware where realistic. Neutral ivory background.

Save as: `public/products/arlberg-rollneck/hardware--warm-cream.jpg`

**Image 5 — Worn (Studio)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. An elegant female model in her twenties, natural European casting, high-fashion casting, wearing the MONTREVE The Arlberg Rollneck in Warm Cream against a soft neutral studio backdrop. Relaxed, confident, unposed stance, natural skin, realistic fabric drape. 85mm fashion photography, shallow depth of field.

Save as: `public/products/arlberg-rollneck/worn--warm-cream.jpg`

**Image 6 — Lifestyle (Alpine)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Editorial lifestyle photograph of a model wearing the MONTREVE The Arlberg Rollneck in Warm Cream, walking along a mountain ridge path in soft morning light, in Arlberg, Austria. Natural winter sunlight, soft shadows, cinematic 35mm environmental fashion photography, shallow depth of field, quiet, exclusive alpine atmosphere with no crowds.

Save as: `public/products/arlberg-rollneck/lifestyle--warm-cream.jpg`

Note: generate this same six-shot set once per additional colourway shown on the PDP (Stone, Espresso), reusing the identical prompt with the colour name substituted. Save each set at `public/products/arlberg-rollneck/<shot>--<colour-slug>.jpg` so garment cut, styling and background stay identical across every colour of this product.

### The Engadin Cashmere Pant
- Slug: `engadin-cashmere-pant`
- Category: Trousers
- Colourways: Oatmeal (#CEC4B4), Stone (#AAA195), Espresso (#332A25)
- Materials: 95% cashmere, 5% elastane
- Location: Engadin Valley, Switzerland

**Image 1 — Front**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio front-view product shot of the MONTREVE The Engadin Cashmere Pant in Oatmeal, shown on an invisible mannequin or gently draped, centred on a warm ivory/stone seamless background. Crisp focus on cut, silhouette and construction. 85mm lens, even soft shadow, colour-accurate 95% cashmere, 5% elastane.

Save as: `public/products/engadin-cashmere-pant/front--oatmeal.jpg`

**Image 2 — Back**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio back-view product shot of the MONTREVE The Engadin Cashmere Pant in Oatmeal, same styling, lighting, background and proportions as the matching front-view shot for exact visual consistency. Show back seaming, yoke and hem construction clearly. 85mm lens, warm ivory/stone seamless background.

Save as: `public/products/engadin-cashmere-pant/back--oatmeal.jpg`

**Image 3 — Material Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Extreme macro close-up of the 95% cashmere, 5% elastane fabric of the MONTREVE The Engadin Cashmere Pant in Oatmeal. Visible fibre structure and natural texture, shallow depth of field, soft directional daylight, styled as a luxury fabric-swatch detail shot for an e-commerce product gallery.

Save as: `public/products/engadin-cashmere-pant/material--oatmeal.jpg`

**Image 4 — Hardware / Stitching Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Macro detail shot of the elasticated knit waistband and tapered ankle hem on the MONTREVE The Engadin Cashmere Pant in Oatmeal, including visible stitching. Shallow depth of field, warm directional light, subtle embossed or engraved "MONTREVE" mark on the hardware where realistic. Neutral ivory background.

Save as: `public/products/engadin-cashmere-pant/hardware--oatmeal.jpg`

**Image 5 — Worn (Studio)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. An elegant female model in her thirties, natural European casting, high-fashion casting, wearing the MONTREVE The Engadin Cashmere Pant in Oatmeal against a soft neutral studio backdrop. Relaxed, confident, unposed stance, natural skin, realistic fabric drape. 85mm fashion photography, shallow depth of field.

Save as: `public/products/engadin-cashmere-pant/worn--oatmeal.jpg`

**Image 6 — Lifestyle (Alpine)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Editorial lifestyle photograph of a model wearing the MONTREVE The Engadin Cashmere Pant in Oatmeal, seated on a stone wall overlooking the Engadin valley, in Engadin Valley, Switzerland. Natural winter sunlight, soft shadows, cinematic 35mm environmental fashion photography, shallow depth of field, quiet, exclusive alpine atmosphere with no crowds.

Save as: `public/products/engadin-cashmere-pant/lifestyle--oatmeal.jpg`

Note: generate this same six-shot set once per additional colourway shown on the PDP (Stone, Espresso), reusing the identical prompt with the colour name substituted. Save each set at `public/products/engadin-cashmere-pant/<shot>--<colour-slug>.jpg` so garment cut, styling and background stay identical across every colour of this product.

### The Alpine Shearling Gilet
- Slug: `alpine-shearling-gilet`
- Category: Outerwear
- Colourways: Ivory (#EEEAE1), Oatmeal (#CEC4B4), Taupe (#87796B)
- Materials: Shearling (sheepskin)
- Location: Zermatt, Switzerland

**Image 1 — Front**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio front-view product shot of the MONTREVE The Alpine Shearling Gilet in Ivory, shown on an invisible mannequin or gently draped, centred on a warm ivory/stone seamless background. Crisp focus on cut, silhouette and construction. 85mm lens, even soft shadow, colour-accurate Shearling (sheepskin).

Save as: `public/products/alpine-shearling-gilet/front--ivory.jpg`

**Image 2 — Back**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio back-view product shot of the MONTREVE The Alpine Shearling Gilet in Ivory, same styling, lighting, background and proportions as the matching front-view shot for exact visual consistency. Show back seaming, yoke and hem construction clearly. 85mm lens, warm ivory/stone seamless background.

Save as: `public/products/alpine-shearling-gilet/back--ivory.jpg`

**Image 3 — Material Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Extreme macro close-up of the Shearling (sheepskin) fabric of the MONTREVE The Alpine Shearling Gilet in Ivory. Visible fibre structure and natural texture, shallow depth of field, soft directional daylight, styled as a luxury fabric-swatch detail shot for an e-commerce product gallery.

Save as: `public/products/alpine-shearling-gilet/material--ivory.jpg`

**Image 4 — Hardware / Stitching Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Macro detail shot of the raw shearling edge finish and interior leather MONTREVE tag on the MONTREVE The Alpine Shearling Gilet in Ivory, including visible stitching. Shallow depth of field, warm directional light, subtle embossed or engraved "MONTREVE" mark on the hardware where realistic. Neutral ivory background.

Save as: `public/products/alpine-shearling-gilet/hardware--ivory.jpg`

**Image 5 — Worn (Studio)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. An elegant female model in her twenties, natural European casting, high-fashion casting, wearing the MONTREVE The Alpine Shearling Gilet in Ivory against a soft neutral studio backdrop. Relaxed, confident, unposed stance, natural skin, realistic fabric drape. 85mm fashion photography, shallow depth of field.

Save as: `public/products/alpine-shearling-gilet/worn--ivory.jpg`

**Image 6 — Lifestyle (Alpine)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Editorial lifestyle photograph of a model wearing the MONTREVE The Alpine Shearling Gilet in Ivory, standing at a wooden chalet doorway with snow falling softly, in Zermatt, Switzerland. Natural winter sunlight, soft shadows, cinematic 35mm environmental fashion photography, shallow depth of field, quiet, exclusive alpine atmosphere with no crowds.

Save as: `public/products/alpine-shearling-gilet/lifestyle--ivory.jpg`

Note: generate this same six-shot set once per additional colourway shown on the PDP (Oatmeal, Taupe), reusing the identical prompt with the colour name substituted. Save each set at `public/products/alpine-shearling-gilet/<shot>--<colour-slug>.jpg` so garment cut, styling and background stay identical across every colour of this product.

## MEN (12 products)

### The Valais Cashmere Rollneck
- Slug: `valais-cashmere-rollneck`
- Category: Cashmere
- Colourways: Oatmeal (#CEC4B4), Stone (#AAA195), Espresso (#332A25), Black (#111111)
- Materials: 100% cashmere
- Location: Val de Bagnes, Switzerland

**Image 1 — Front**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio front-view product shot of the MONTREVE The Valais Cashmere Rollneck in Oatmeal, shown on an invisible mannequin or gently draped, centred on a warm ivory/stone seamless background. Crisp focus on cut, silhouette and construction. 85mm lens, even soft shadow, colour-accurate 100% cashmere.

Save as: `public/products/valais-cashmere-rollneck/front--oatmeal.jpg`

**Image 2 — Back**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio back-view product shot of the MONTREVE The Valais Cashmere Rollneck in Oatmeal, same styling, lighting, background and proportions as the matching front-view shot for exact visual consistency. Show back seaming, yoke and hem construction clearly. 85mm lens, warm ivory/stone seamless background.

Save as: `public/products/valais-cashmere-rollneck/back--oatmeal.jpg`

**Image 3 — Material Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Extreme macro close-up of the 100% cashmere fabric of the MONTREVE The Valais Cashmere Rollneck in Oatmeal. Visible fibre structure and natural texture, shallow depth of field, soft directional daylight, styled as a luxury fabric-swatch detail shot for an e-commerce product gallery.

Save as: `public/products/valais-cashmere-rollneck/material--oatmeal.jpg`

**Image 4 — Hardware / Stitching Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Macro detail shot of the ribbed rollneck collar and woven interior MONTREVE label on the MONTREVE The Valais Cashmere Rollneck in Oatmeal, including visible stitching. Shallow depth of field, warm directional light, subtle embossed or engraved "MONTREVE" mark on the hardware where realistic. Neutral ivory background.

Save as: `public/products/valais-cashmere-rollneck/hardware--oatmeal.jpg`

**Image 5 — Worn (Studio)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. An elegant male model in his thirties, natural European casting, high-fashion casting, wearing the MONTREVE The Valais Cashmere Rollneck in Oatmeal against a soft neutral studio backdrop. Relaxed, confident, unposed stance, natural skin, realistic fabric drape. 85mm fashion photography, shallow depth of field.

Save as: `public/products/valais-cashmere-rollneck/worn--oatmeal.jpg`

**Image 6 — Lifestyle (Alpine)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Editorial lifestyle photograph of a model wearing the MONTREVE The Valais Cashmere Rollneck in Oatmeal, standing on a chalet balcony looking out at the mountains, in Val de Bagnes, Switzerland. Natural winter sunlight, soft shadows, cinematic 35mm environmental fashion photography, shallow depth of field, quiet, exclusive alpine atmosphere with no crowds.

Save as: `public/products/valais-cashmere-rollneck/lifestyle--oatmeal.jpg`

Note: generate this same six-shot set once per additional colourway shown on the PDP (Stone, Espresso, Black), reusing the identical prompt with the colour name substituted. Save each set at `public/products/valais-cashmere-rollneck/<shot>--<colour-slug>.jpg` so garment cut, styling and background stay identical across every colour of this product.

### The St. Moritz Overcoat
- Slug: `st-moritz-overcoat`
- Category: Coats & Jackets
- Colourways: Stone (#AAA195), Taupe (#87796B), Espresso (#332A25), Charcoal (#292827)
- Materials: 90% wool, 10% cashmere
- Location: St. Moritz, Switzerland

**Image 1 — Front**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio front-view product shot of the MONTREVE The St. Moritz Overcoat in Stone, shown on an invisible mannequin or gently draped, centred on a warm ivory/stone seamless background. Crisp focus on cut, silhouette and construction. 85mm lens, even soft shadow, colour-accurate 90% wool, 10% cashmere.

Save as: `public/products/st-moritz-overcoat/front--stone.jpg`

**Image 2 — Back**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio back-view product shot of the MONTREVE The St. Moritz Overcoat in Stone, same styling, lighting, background and proportions as the matching front-view shot for exact visual consistency. Show back seaming, yoke and hem construction clearly. 85mm lens, warm ivory/stone seamless background.

Save as: `public/products/st-moritz-overcoat/back--stone.jpg`

**Image 3 — Material Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Extreme macro close-up of the 90% wool, 10% cashmere fabric of the MONTREVE The St. Moritz Overcoat in Stone. Visible fibre structure and natural texture, shallow depth of field, soft directional daylight, styled as a luxury fabric-swatch detail shot for an e-commerce product gallery.

Save as: `public/products/st-moritz-overcoat/material--stone.jpg`

**Image 4 — Hardware / Stitching Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Macro detail shot of the horn button placket and notch lapel stitching on the MONTREVE The St. Moritz Overcoat in Stone, including visible stitching. Shallow depth of field, warm directional light, subtle embossed or engraved "MONTREVE" mark on the hardware where realistic. Neutral ivory background.

Save as: `public/products/st-moritz-overcoat/hardware--stone.jpg`

**Image 5 — Worn (Studio)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. An elegant male model in his thirties, natural European casting, high-fashion casting, wearing the MONTREVE The St. Moritz Overcoat in Stone against a soft neutral studio backdrop. Relaxed, confident, unposed stance, natural skin, realistic fabric drape. 85mm fashion photography, shallow depth of field.

Save as: `public/products/st-moritz-overcoat/worn--stone.jpg`

**Image 6 — Lifestyle (Alpine)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Editorial lifestyle photograph of a model wearing the MONTREVE The St. Moritz Overcoat in Stone, walking along a snow-dusted lakeside promenade, in St. Moritz, Switzerland. Natural winter sunlight, soft shadows, cinematic 35mm environmental fashion photography, shallow depth of field, quiet, exclusive alpine atmosphere with no crowds.

Save as: `public/products/st-moritz-overcoat/lifestyle--stone.jpg`

Note: generate this same six-shot set once per additional colourway shown on the PDP (Taupe, Espresso, Charcoal), reusing the identical prompt with the colour name substituted. Save each set at `public/products/st-moritz-overcoat/<shot>--<colour-slug>.jpg` so garment cut, styling and background stay identical across every colour of this product.

### The Courchevel Ski Jacket
- Slug: `courchevel-ski-jacket`
- Category: Ski & Alpine
- Colourways: Snow White (#F7F6F2), Stone (#AAA195), Espresso (#332A25)
- Materials: Technical wool-blend shell, Merino wool lining
- Location: Courchevel 1850, France

**Image 1 — Front**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio front-view product shot of the MONTREVE The Courchevel Ski Jacket in Snow White, shown on an invisible mannequin or gently draped, centred on a warm ivory/stone seamless background. Crisp focus on cut, silhouette and construction. 85mm lens, even soft shadow, colour-accurate Technical wool-blend shell.

Save as: `public/products/courchevel-ski-jacket/front--snow-white.jpg`

**Image 2 — Back**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio back-view product shot of the MONTREVE The Courchevel Ski Jacket in Snow White, same styling, lighting, background and proportions as the matching front-view shot for exact visual consistency. Show back seaming, yoke and hem construction clearly. 85mm lens, warm ivory/stone seamless background.

Save as: `public/products/courchevel-ski-jacket/back--snow-white.jpg`

**Image 3 — Material Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Extreme macro close-up of the Technical wool-blend shell fabric of the MONTREVE The Courchevel Ski Jacket in Snow White. Visible fibre structure and natural texture, shallow depth of field, soft directional daylight, styled as a luxury fabric-swatch detail shot for an e-commerce product gallery.

Save as: `public/products/courchevel-ski-jacket/material--snow-white.jpg`

**Image 4 — Hardware / Stitching Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Macro detail shot of the matte zip pull with engraved M and popper storm flap on the MONTREVE The Courchevel Ski Jacket in Snow White, including visible stitching. Shallow depth of field, warm directional light, subtle embossed or engraved "MONTREVE" mark on the hardware where realistic. Neutral ivory background.

Save as: `public/products/courchevel-ski-jacket/hardware--snow-white.jpg`

**Image 5 — Worn (Studio)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. An elegant male model in his thirties, natural European casting, high-fashion casting, wearing the MONTREVE The Courchevel Ski Jacket in Snow White against a soft neutral studio backdrop. Relaxed, confident, unposed stance, natural skin, realistic fabric drape. 85mm fashion photography, shallow depth of field.

Save as: `public/products/courchevel-ski-jacket/worn--snow-white.jpg`

**Image 6 — Lifestyle (Alpine)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Editorial lifestyle photograph of a model wearing the MONTREVE The Courchevel Ski Jacket in Snow White, standing on a quiet ski slope with goggles resting on his beanie, in Courchevel 1850, France. Natural winter sunlight, soft shadows, cinematic 35mm environmental fashion photography, shallow depth of field, quiet, exclusive alpine atmosphere with no crowds.

Save as: `public/products/courchevel-ski-jacket/lifestyle--snow-white.jpg`

Note: generate this same six-shot set once per additional colourway shown on the PDP (Stone, Espresso), reusing the identical prompt with the colour name substituted. Save each set at `public/products/courchevel-ski-jacket/<shot>--<colour-slug>.jpg` so garment cut, styling and background stay identical across every colour of this product.

### The Gstaad Cashmere Polo
- Slug: `gstaad-cashmere-crewneck`
- Category: Cashmere
- Colourways: Ivory (#EEEAE1), Oatmeal (#CEC4B4), Stone (#AAA195), Black (#111111)
- Materials: 100% cashmere
- Location: Gstaad, Switzerland

**Image 1 — Front**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio front-view product shot of the MONTREVE The Gstaad Cashmere Polo in Ivory, shown on an invisible mannequin or gently draped, centred on a warm ivory/stone seamless background. Crisp focus on cut, silhouette and construction. 85mm lens, even soft shadow, colour-accurate 100% cashmere.

Save as: `public/products/gstaad-cashmere-crewneck/front--ivory.jpg`

**Image 2 — Back**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio back-view product shot of the MONTREVE The Gstaad Cashmere Polo in Ivory, same styling, lighting, background and proportions as the matching front-view shot for exact visual consistency. Show back seaming, yoke and hem construction clearly. 85mm lens, warm ivory/stone seamless background.

Save as: `public/products/gstaad-cashmere-crewneck/back--ivory.jpg`

**Image 3 — Material Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Extreme macro close-up of the 100% cashmere fabric of the MONTREVE The Gstaad Cashmere Polo in Ivory. Visible fibre structure and natural texture, shallow depth of field, soft directional daylight, styled as a luxury fabric-swatch detail shot for an e-commerce product gallery.

Save as: `public/products/gstaad-cashmere-crewneck/material--ivory.jpg`

**Image 4 — Hardware / Stitching Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Macro detail shot of the horn button placket and woven interior MONTREVE label on the MONTREVE The Gstaad Cashmere Polo in Ivory, including visible stitching. Shallow depth of field, warm directional light, subtle embossed or engraved "MONTREVE" mark on the hardware where realistic. Neutral ivory background.

Save as: `public/products/gstaad-cashmere-crewneck/hardware--ivory.jpg`

**Image 5 — Worn (Studio)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. An elegant male model in his twenties, natural European casting, high-fashion casting, wearing the MONTREVE The Gstaad Cashmere Polo in Ivory against a soft neutral studio backdrop. Relaxed, confident, unposed stance, natural skin, realistic fabric drape. 85mm fashion photography, shallow depth of field.

Save as: `public/products/gstaad-cashmere-crewneck/worn--ivory.jpg`

**Image 6 — Lifestyle (Alpine)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Editorial lifestyle photograph of a model wearing the MONTREVE The Gstaad Cashmere Polo in Ivory, seated at a mountain restaurant terrace table with a coffee, in Gstaad, Switzerland. Natural winter sunlight, soft shadows, cinematic 35mm environmental fashion photography, shallow depth of field, quiet, exclusive alpine atmosphere with no crowds.

Save as: `public/products/gstaad-cashmere-crewneck/lifestyle--ivory.jpg`

Note: generate this same six-shot set once per additional colourway shown on the PDP (Oatmeal, Stone, Black), reusing the identical prompt with the colour name substituted. Save each set at `public/products/gstaad-cashmere-crewneck/<shot>--<colour-slug>.jpg` so garment cut, styling and background stay identical across every colour of this product.

### The Verbier Wool Trouser
- Slug: `verbier-wool-trouser`
- Category: Trousers
- Colourways: Oatmeal (#CEC4B4), Stone (#AAA195), Espresso (#332A25), Charcoal (#292827)
- Materials: Brushed wool
- Location: Verbier, Switzerland

**Image 1 — Front**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio front-view product shot of the MONTREVE The Verbier Wool Trouser in Oatmeal, shown on an invisible mannequin or gently draped, centred on a warm ivory/stone seamless background. Crisp focus on cut, silhouette and construction. 85mm lens, even soft shadow, colour-accurate Brushed wool.

Save as: `public/products/verbier-wool-trouser/front--oatmeal.jpg`

**Image 2 — Back**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio back-view product shot of the MONTREVE The Verbier Wool Trouser in Oatmeal, same styling, lighting, background and proportions as the matching front-view shot for exact visual consistency. Show back seaming, yoke and hem construction clearly. 85mm lens, warm ivory/stone seamless background.

Save as: `public/products/verbier-wool-trouser/back--oatmeal.jpg`

**Image 3 — Material Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Extreme macro close-up of the Brushed wool fabric of the MONTREVE The Verbier Wool Trouser in Oatmeal. Visible fibre structure and natural texture, shallow depth of field, soft directional daylight, styled as a luxury fabric-swatch detail shot for an e-commerce product gallery.

Save as: `public/products/verbier-wool-trouser/material--oatmeal.jpg`

**Image 4 — Hardware / Stitching Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Macro detail shot of the concealed hook-and-bar waistband closure on the MONTREVE The Verbier Wool Trouser in Oatmeal, including visible stitching. Shallow depth of field, warm directional light, subtle embossed or engraved "MONTREVE" mark on the hardware where realistic. Neutral ivory background.

Save as: `public/products/verbier-wool-trouser/hardware--oatmeal.jpg`

**Image 5 — Worn (Studio)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. An elegant male model in his thirties, natural European casting, high-fashion casting, wearing the MONTREVE The Verbier Wool Trouser in Oatmeal against a soft neutral studio backdrop. Relaxed, confident, unposed stance, natural skin, realistic fabric drape. 85mm fashion photography, shallow depth of field.

Save as: `public/products/verbier-wool-trouser/worn--oatmeal.jpg`

**Image 6 — Lifestyle (Alpine)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Editorial lifestyle photograph of a model wearing the MONTREVE The Verbier Wool Trouser in Oatmeal, walking through a quiet alpine village street, in Verbier, Switzerland. Natural winter sunlight, soft shadows, cinematic 35mm environmental fashion photography, shallow depth of field, quiet, exclusive alpine atmosphere with no crowds.

Save as: `public/products/verbier-wool-trouser/lifestyle--oatmeal.jpg`

Note: generate this same six-shot set once per additional colourway shown on the PDP (Stone, Espresso, Charcoal), reusing the identical prompt with the colour name substituted. Save each set at `public/products/verbier-wool-trouser/<shot>--<colour-slug>.jpg` so garment cut, styling and background stay identical across every colour of this product.

### The Engadin Field Jacket
- Slug: `engadin-field-jacket`
- Category: Outerwear
- Colourways: Oatmeal (#CEC4B4), Stone (#AAA195), Espresso (#332A25)
- Materials: Waxed wool-cotton blend
- Location: Engadin Valley, Switzerland

**Image 1 — Front**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio front-view product shot of the MONTREVE The Engadin Field Jacket in Oatmeal, shown on an invisible mannequin or gently draped, centred on a warm ivory/stone seamless background. Crisp focus on cut, silhouette and construction. 85mm lens, even soft shadow, colour-accurate Waxed wool-cotton blend.

Save as: `public/products/engadin-field-jacket/front--oatmeal.jpg`

**Image 2 — Back**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio back-view product shot of the MONTREVE The Engadin Field Jacket in Oatmeal, same styling, lighting, background and proportions as the matching front-view shot for exact visual consistency. Show back seaming, yoke and hem construction clearly. 85mm lens, warm ivory/stone seamless background.

Save as: `public/products/engadin-field-jacket/back--oatmeal.jpg`

**Image 3 — Material Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Extreme macro close-up of the Waxed wool-cotton blend fabric of the MONTREVE The Engadin Field Jacket in Oatmeal. Visible fibre structure and natural texture, shallow depth of field, soft directional daylight, styled as a luxury fabric-swatch detail shot for an e-commerce product gallery.

Save as: `public/products/engadin-field-jacket/material--oatmeal.jpg`

**Image 4 — Hardware / Stitching Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Macro detail shot of the corozo button front and patch pocket stitching on the MONTREVE The Engadin Field Jacket in Oatmeal, including visible stitching. Shallow depth of field, warm directional light, subtle embossed or engraved "MONTREVE" mark on the hardware where realistic. Neutral ivory background.

Save as: `public/products/engadin-field-jacket/hardware--oatmeal.jpg`

**Image 5 — Worn (Studio)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. An elegant male model in his thirties, natural European casting, high-fashion casting, wearing the MONTREVE The Engadin Field Jacket in Oatmeal against a soft neutral studio backdrop. Relaxed, confident, unposed stance, natural skin, realistic fabric drape. 85mm fashion photography, shallow depth of field.

Save as: `public/products/engadin-field-jacket/worn--oatmeal.jpg`

**Image 6 — Lifestyle (Alpine)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Editorial lifestyle photograph of a model wearing the MONTREVE The Engadin Field Jacket in Oatmeal, walking through a mountain village with wooden chalets behind him, in Engadin Valley, Switzerland. Natural winter sunlight, soft shadows, cinematic 35mm environmental fashion photography, shallow depth of field, quiet, exclusive alpine atmosphere with no crowds.

Save as: `public/products/engadin-field-jacket/lifestyle--oatmeal.jpg`

Note: generate this same six-shot set once per additional colourway shown on the PDP (Stone, Espresso), reusing the identical prompt with the colour name substituted. Save each set at `public/products/engadin-field-jacket/<shot>--<colour-slug>.jpg` so garment cut, styling and background stay identical across every colour of this product.

### The Savoie Cashmere Zip
- Slug: `savoie-cashmere-zip`
- Category: Cashmere
- Colourways: Oatmeal (#CEC4B4), Stone (#AAA195), Espresso (#332A25)
- Materials: 100% cashmere
- Location: Savoie, France

**Image 1 — Front**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio front-view product shot of the MONTREVE The Savoie Cashmere Zip in Oatmeal, shown on an invisible mannequin or gently draped, centred on a warm ivory/stone seamless background. Crisp focus on cut, silhouette and construction. 85mm lens, even soft shadow, colour-accurate 100% cashmere.

Save as: `public/products/savoie-cashmere-zip/front--oatmeal.jpg`

**Image 2 — Back**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio back-view product shot of the MONTREVE The Savoie Cashmere Zip in Oatmeal, same styling, lighting, background and proportions as the matching front-view shot for exact visual consistency. Show back seaming, yoke and hem construction clearly. 85mm lens, warm ivory/stone seamless background.

Save as: `public/products/savoie-cashmere-zip/back--oatmeal.jpg`

**Image 3 — Material Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Extreme macro close-up of the 100% cashmere fabric of the MONTREVE The Savoie Cashmere Zip in Oatmeal. Visible fibre structure and natural texture, shallow depth of field, soft directional daylight, styled as a luxury fabric-swatch detail shot for an e-commerce product gallery.

Save as: `public/products/savoie-cashmere-zip/material--oatmeal.jpg`

**Image 4 — Hardware / Stitching Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Macro detail shot of the matte metal zip pull engraved with a small M on the MONTREVE The Savoie Cashmere Zip in Oatmeal, including visible stitching. Shallow depth of field, warm directional light, subtle embossed or engraved "MONTREVE" mark on the hardware where realistic. Neutral ivory background.

Save as: `public/products/savoie-cashmere-zip/hardware--oatmeal.jpg`

**Image 5 — Worn (Studio)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. An elegant male model in his twenties, natural European casting, high-fashion casting, wearing the MONTREVE The Savoie Cashmere Zip in Oatmeal against a soft neutral studio backdrop. Relaxed, confident, unposed stance, natural skin, realistic fabric drape. 85mm fashion photography, shallow depth of field.

Save as: `public/products/savoie-cashmere-zip/worn--oatmeal.jpg`

**Image 6 — Lifestyle (Alpine)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Editorial lifestyle photograph of a model wearing the MONTREVE The Savoie Cashmere Zip in Oatmeal, standing at the entrance of a mountain restaurant terrace, in Savoie, France. Natural winter sunlight, soft shadows, cinematic 35mm environmental fashion photography, shallow depth of field, quiet, exclusive alpine atmosphere with no crowds.

Save as: `public/products/savoie-cashmere-zip/lifestyle--oatmeal.jpg`

Note: generate this same six-shot set once per additional colourway shown on the PDP (Stone, Espresso), reusing the identical prompt with the colour name substituted. Save each set at `public/products/savoie-cashmere-zip/<shot>--<colour-slug>.jpg` so garment cut, styling and background stay identical across every colour of this product.

### The Alpine Down Jacket
- Slug: `alpine-down-jacket`
- Category: Outerwear
- Colourways: Snow White (#F7F6F2), Stone (#AAA195), Espresso (#332A25), Black (#111111)
- Materials: Responsibly-sourced down fill, Technical matte shell
- Location: Chamonix-Mont-Blanc, France

**Image 1 — Front**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio front-view product shot of the MONTREVE The Alpine Down Jacket in Snow White, shown on an invisible mannequin or gently draped, centred on a warm ivory/stone seamless background. Crisp focus on cut, silhouette and construction. 85mm lens, even soft shadow, colour-accurate Responsibly-sourced down fill.

Save as: `public/products/alpine-down-jacket/front--snow-white.jpg`

**Image 2 — Back**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio back-view product shot of the MONTREVE The Alpine Down Jacket in Snow White, same styling, lighting, background and proportions as the matching front-view shot for exact visual consistency. Show back seaming, yoke and hem construction clearly. 85mm lens, warm ivory/stone seamless background.

Save as: `public/products/alpine-down-jacket/back--snow-white.jpg`

**Image 3 — Material Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Extreme macro close-up of the Responsibly-sourced down fill fabric of the MONTREVE The Alpine Down Jacket in Snow White. Visible fibre structure and natural texture, shallow depth of field, soft directional daylight, styled as a luxury fabric-swatch detail shot for an e-commerce product gallery.

Save as: `public/products/alpine-down-jacket/material--snow-white.jpg`

**Image 4 — Hardware / Stitching Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Macro detail shot of the two-way front zip with leather pull tab on the MONTREVE The Alpine Down Jacket in Snow White, including visible stitching. Shallow depth of field, warm directional light, subtle embossed or engraved "MONTREVE" mark on the hardware where realistic. Neutral ivory background.

Save as: `public/products/alpine-down-jacket/hardware--snow-white.jpg`

**Image 5 — Worn (Studio)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. An elegant male model in his thirties, natural European casting, high-fashion casting, wearing the MONTREVE The Alpine Down Jacket in Snow White against a soft neutral studio backdrop. Relaxed, confident, unposed stance, natural skin, realistic fabric drape. 85mm fashion photography, shallow depth of field.

Save as: `public/products/alpine-down-jacket/worn--snow-white.jpg`

**Image 6 — Lifestyle (Alpine)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Editorial lifestyle photograph of a model wearing the MONTREVE The Alpine Down Jacket in Snow White, standing on a snow-covered balcony overlooking Mont Blanc, in Chamonix-Mont-Blanc, France. Natural winter sunlight, soft shadows, cinematic 35mm environmental fashion photography, shallow depth of field, quiet, exclusive alpine atmosphere with no crowds.

Save as: `public/products/alpine-down-jacket/lifestyle--snow-white.jpg`

Note: generate this same six-shot set once per additional colourway shown on the PDP (Stone, Espresso, Black), reusing the identical prompt with the colour name substituted. Save each set at `public/products/alpine-down-jacket/<shot>--<colour-slug>.jpg` so garment cut, styling and background stay identical across every colour of this product.

### The Chamonix Wool Blazer
- Slug: `chamonix-wool-blazer`
- Category: Coats & Jackets
- Colourways: Stone (#AAA195), Taupe (#87796B), Espresso (#332A25)
- Materials: 100% wool flannel
- Location: Chamonix, France

**Image 1 — Front**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio front-view product shot of the MONTREVE The Chamonix Wool Blazer in Stone, shown on an invisible mannequin or gently draped, centred on a warm ivory/stone seamless background. Crisp focus on cut, silhouette and construction. 85mm lens, even soft shadow, colour-accurate 100% wool flannel.

Save as: `public/products/chamonix-wool-blazer/front--stone.jpg`

**Image 2 — Back**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio back-view product shot of the MONTREVE The Chamonix Wool Blazer in Stone, same styling, lighting, background and proportions as the matching front-view shot for exact visual consistency. Show back seaming, yoke and hem construction clearly. 85mm lens, warm ivory/stone seamless background.

Save as: `public/products/chamonix-wool-blazer/back--stone.jpg`

**Image 3 — Material Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Extreme macro close-up of the 100% wool flannel fabric of the MONTREVE The Chamonix Wool Blazer in Stone. Visible fibre structure and natural texture, shallow depth of field, soft directional daylight, styled as a luxury fabric-swatch detail shot for an e-commerce product gallery.

Save as: `public/products/chamonix-wool-blazer/material--stone.jpg`

**Image 4 — Hardware / Stitching Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Macro detail shot of the horn buttons and hand-finished lapel stitching on the MONTREVE The Chamonix Wool Blazer in Stone, including visible stitching. Shallow depth of field, warm directional light, subtle embossed or engraved "MONTREVE" mark on the hardware where realistic. Neutral ivory background.

Save as: `public/products/chamonix-wool-blazer/hardware--stone.jpg`

**Image 5 — Worn (Studio)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. An elegant male model in his thirties, natural European casting, high-fashion casting, wearing the MONTREVE The Chamonix Wool Blazer in Stone against a soft neutral studio backdrop. Relaxed, confident, unposed stance, natural skin, realistic fabric drape. 85mm fashion photography, shallow depth of field.

Save as: `public/products/chamonix-wool-blazer/worn--stone.jpg`

**Image 6 — Lifestyle (Alpine)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Editorial lifestyle photograph of a model wearing the MONTREVE The Chamonix Wool Blazer in Stone, standing beside a fireplace in a wood-panelled chalet interior, in Chamonix, France. Natural winter sunlight, soft shadows, cinematic 35mm environmental fashion photography, shallow depth of field, quiet, exclusive alpine atmosphere with no crowds.

Save as: `public/products/chamonix-wool-blazer/lifestyle--stone.jpg`

Note: generate this same six-shot set once per additional colourway shown on the PDP (Taupe, Espresso), reusing the identical prompt with the colour name substituted. Save each set at `public/products/chamonix-wool-blazer/<shot>--<colour-slug>.jpg` so garment cut, styling and background stay identical across every colour of this product.

### The Mont Blanc Ski Trouser
- Slug: `mont-blanc-ski-trouser`
- Category: Ski & Alpine
- Colourways: Snow White (#F7F6F2), Stone (#AAA195), Black (#111111)
- Materials: Technical stretch shell
- Location: Chamonix-Mont-Blanc, France

**Image 1 — Front**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio front-view product shot of the MONTREVE The Mont Blanc Ski Trouser in Snow White, shown on an invisible mannequin or gently draped, centred on a warm ivory/stone seamless background. Crisp focus on cut, silhouette and construction. 85mm lens, even soft shadow, colour-accurate Technical stretch shell.

Save as: `public/products/mont-blanc-ski-trouser/front--snow-white.jpg`

**Image 2 — Back**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio back-view product shot of the MONTREVE The Mont Blanc Ski Trouser in Snow White, same styling, lighting, background and proportions as the matching front-view shot for exact visual consistency. Show back seaming, yoke and hem construction clearly. 85mm lens, warm ivory/stone seamless background.

Save as: `public/products/mont-blanc-ski-trouser/back--snow-white.jpg`

**Image 3 — Material Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Extreme macro close-up of the Technical stretch shell fabric of the MONTREVE The Mont Blanc Ski Trouser in Snow White. Visible fibre structure and natural texture, shallow depth of field, soft directional daylight, styled as a luxury fabric-swatch detail shot for an e-commerce product gallery.

Save as: `public/products/mont-blanc-ski-trouser/material--snow-white.jpg`

**Image 4 — Hardware / Stitching Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Macro detail shot of the side-seam zip pocket and reinforced hem stitching on the MONTREVE The Mont Blanc Ski Trouser in Snow White, including visible stitching. Shallow depth of field, warm directional light, subtle embossed or engraved "MONTREVE" mark on the hardware where realistic. Neutral ivory background.

Save as: `public/products/mont-blanc-ski-trouser/hardware--snow-white.jpg`

**Image 5 — Worn (Studio)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. An elegant male model in his twenties, natural European casting, high-fashion casting, wearing the MONTREVE The Mont Blanc Ski Trouser in Snow White against a soft neutral studio backdrop. Relaxed, confident, unposed stance, natural skin, realistic fabric drape. 85mm fashion photography, shallow depth of field.

Save as: `public/products/mont-blanc-ski-trouser/worn--snow-white.jpg`

**Image 6 — Lifestyle (Alpine)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Editorial lifestyle photograph of a model wearing the MONTREVE The Mont Blanc Ski Trouser in Snow White, walking across a sunlit mountain plateau with skis over one shoulder, in Chamonix-Mont-Blanc, France. Natural winter sunlight, soft shadows, cinematic 35mm environmental fashion photography, shallow depth of field, quiet, exclusive alpine atmosphere with no crowds.

Save as: `public/products/mont-blanc-ski-trouser/lifestyle--snow-white.jpg`

Note: generate this same six-shot set once per additional colourway shown on the PDP (Stone, Black), reusing the identical prompt with the colour name substituted. Save each set at `public/products/mont-blanc-ski-trouser/<shot>--<colour-slug>.jpg` so garment cut, styling and background stay identical across every colour of this product.

### The Glacier Cashmere Hoodie
- Slug: `glacier-cashmere-hoodie`
- Category: Cashmere
- Colourways: Oatmeal (#CEC4B4), Stone (#AAA195), Espresso (#332A25)
- Materials: 95% cashmere, 5% wool
- Location: Zermatt, Switzerland

**Image 1 — Front**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio front-view product shot of the MONTREVE The Glacier Cashmere Hoodie in Oatmeal, shown on an invisible mannequin or gently draped, centred on a warm ivory/stone seamless background. Crisp focus on cut, silhouette and construction. 85mm lens, even soft shadow, colour-accurate 95% cashmere, 5% wool.

Save as: `public/products/glacier-cashmere-hoodie/front--oatmeal.jpg`

**Image 2 — Back**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio back-view product shot of the MONTREVE The Glacier Cashmere Hoodie in Oatmeal, same styling, lighting, background and proportions as the matching front-view shot for exact visual consistency. Show back seaming, yoke and hem construction clearly. 85mm lens, warm ivory/stone seamless background.

Save as: `public/products/glacier-cashmere-hoodie/back--oatmeal.jpg`

**Image 3 — Material Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Extreme macro close-up of the 95% cashmere, 5% wool fabric of the MONTREVE The Glacier Cashmere Hoodie in Oatmeal. Visible fibre structure and natural texture, shallow depth of field, soft directional daylight, styled as a luxury fabric-swatch detail shot for an e-commerce product gallery.

Save as: `public/products/glacier-cashmere-hoodie/material--oatmeal.jpg`

**Image 4 — Hardware / Stitching Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Macro detail shot of the flat drawcord and ribbed kangaroo pocket stitching on the MONTREVE The Glacier Cashmere Hoodie in Oatmeal, including visible stitching. Shallow depth of field, warm directional light, subtle embossed or engraved "MONTREVE" mark on the hardware where realistic. Neutral ivory background.

Save as: `public/products/glacier-cashmere-hoodie/hardware--oatmeal.jpg`

**Image 5 — Worn (Studio)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. An elegant male model in his twenties, natural European casting, high-fashion casting, wearing the MONTREVE The Glacier Cashmere Hoodie in Oatmeal against a soft neutral studio backdrop. Relaxed, confident, unposed stance, natural skin, realistic fabric drape. 85mm fashion photography, shallow depth of field.

Save as: `public/products/glacier-cashmere-hoodie/worn--oatmeal.jpg`

**Image 6 — Lifestyle (Alpine)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Editorial lifestyle photograph of a model wearing the MONTREVE The Glacier Cashmere Hoodie in Oatmeal, walking through a quiet snow-covered pine forest, in Zermatt, Switzerland. Natural winter sunlight, soft shadows, cinematic 35mm environmental fashion photography, shallow depth of field, quiet, exclusive alpine atmosphere with no crowds.

Save as: `public/products/glacier-cashmere-hoodie/lifestyle--oatmeal.jpg`

Note: generate this same six-shot set once per additional colourway shown on the PDP (Stone, Espresso), reusing the identical prompt with the colour name substituted. Save each set at `public/products/glacier-cashmere-hoodie/<shot>--<colour-slug>.jpg` so garment cut, styling and background stay identical across every colour of this product.

### The Méribel Overshirt
- Slug: `meribel-overshirt`
- Category: Outerwear
- Colourways: Oatmeal (#CEC4B4), Stone (#AAA195), Espresso (#332A25)
- Materials: Brushed wool-cotton blend
- Location: Méribel, France

**Image 1 — Front**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio front-view product shot of the MONTREVE The Méribel Overshirt in Oatmeal, shown on an invisible mannequin or gently draped, centred on a warm ivory/stone seamless background. Crisp focus on cut, silhouette and construction. 85mm lens, even soft shadow, colour-accurate Brushed wool-cotton blend.

Save as: `public/products/meribel-overshirt/front--oatmeal.jpg`

**Image 2 — Back**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio back-view product shot of the MONTREVE The Méribel Overshirt in Oatmeal, same styling, lighting, background and proportions as the matching front-view shot for exact visual consistency. Show back seaming, yoke and hem construction clearly. 85mm lens, warm ivory/stone seamless background.

Save as: `public/products/meribel-overshirt/back--oatmeal.jpg`

**Image 3 — Material Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Extreme macro close-up of the Brushed wool-cotton blend fabric of the MONTREVE The Méribel Overshirt in Oatmeal. Visible fibre structure and natural texture, shallow depth of field, soft directional daylight, styled as a luxury fabric-swatch detail shot for an e-commerce product gallery.

Save as: `public/products/meribel-overshirt/material--oatmeal.jpg`

**Image 4 — Hardware / Stitching Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Macro detail shot of the corozo button front and chest patch pocket stitching on the MONTREVE The Méribel Overshirt in Oatmeal, including visible stitching. Shallow depth of field, warm directional light, subtle embossed or engraved "MONTREVE" mark on the hardware where realistic. Neutral ivory background.

Save as: `public/products/meribel-overshirt/hardware--oatmeal.jpg`

**Image 5 — Worn (Studio)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. An elegant male model in his thirties, natural European casting, high-fashion casting, wearing the MONTREVE The Méribel Overshirt in Oatmeal against a soft neutral studio backdrop. Relaxed, confident, unposed stance, natural skin, realistic fabric drape. 85mm fashion photography, shallow depth of field.

Save as: `public/products/meribel-overshirt/worn--oatmeal.jpg`

**Image 6 — Lifestyle (Alpine)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Editorial lifestyle photograph of a model wearing the MONTREVE The Méribel Overshirt in Oatmeal, standing at a wooden chalet doorway with snow falling softly, in Méribel, France. Natural winter sunlight, soft shadows, cinematic 35mm environmental fashion photography, shallow depth of field, quiet, exclusive alpine atmosphere with no crowds.

Save as: `public/products/meribel-overshirt/lifestyle--oatmeal.jpg`

Note: generate this same six-shot set once per additional colourway shown on the PDP (Stone, Espresso), reusing the identical prompt with the colour name substituted. Save each set at `public/products/meribel-overshirt/<shot>--<colour-slug>.jpg` so garment cut, styling and background stay identical across every colour of this product.

## ACCESSORIES (8 products)

### The Alpine Cashmere Scarf
- Slug: `alpine-cashmere-scarf`
- Category: Scarves
- Colourways: Ivory (#EEEAE1), Oatmeal (#CEC4B4), Taupe (#87796B), Espresso (#332A25)
- Materials: 100% cashmere
- Location: Megève, France

**Image 1 — Front**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio front-view product shot of the MONTREVE The Alpine Cashmere Scarf in Ivory, shown on an invisible mannequin or gently draped, centred on a warm ivory/stone seamless background. Crisp focus on cut, silhouette and construction. 85mm lens, even soft shadow, colour-accurate 100% cashmere.

Save as: `public/products/alpine-cashmere-scarf/front--ivory.jpg`

**Image 2 — Back**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio back-view product shot of the MONTREVE The Alpine Cashmere Scarf in Ivory, same styling, lighting, background and proportions as the matching front-view shot for exact visual consistency. Show back seaming, yoke and hem construction clearly. 85mm lens, warm ivory/stone seamless background.

Save as: `public/products/alpine-cashmere-scarf/back--ivory.jpg`

**Image 3 — Material Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Extreme macro close-up of the 100% cashmere fabric of the MONTREVE The Alpine Cashmere Scarf in Ivory. Visible fibre structure and natural texture, shallow depth of field, soft directional daylight, styled as a luxury fabric-swatch detail shot for an e-commerce product gallery.

Save as: `public/products/alpine-cashmere-scarf/material--ivory.jpg`

**Image 4 — Hardware / Stitching Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Macro detail shot of the hand-finished fringed edge and woven MONTREVE tab on the MONTREVE The Alpine Cashmere Scarf in Ivory, including visible stitching. Shallow depth of field, warm directional light, subtle embossed or engraved "MONTREVE" mark on the hardware where realistic. Neutral ivory background.

Save as: `public/products/alpine-cashmere-scarf/hardware--ivory.jpg`

**Image 5 — Worn (Studio)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. An elegant female model in her twenties, natural European casting, high-fashion casting, wearing the MONTREVE The Alpine Cashmere Scarf in Ivory against a soft neutral studio backdrop. Relaxed, confident, unposed stance, natural skin, realistic fabric drape. 85mm fashion photography, shallow depth of field.

Save as: `public/products/alpine-cashmere-scarf/worn--ivory.jpg`

**Image 6 — Lifestyle (Alpine)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Editorial lifestyle photograph of a model wearing the MONTREVE The Alpine Cashmere Scarf in Ivory, seated on a sunlit chalet terrace with a coffee, mountains behind her, in Megève, France. Natural winter sunlight, soft shadows, cinematic 35mm environmental fashion photography, shallow depth of field, quiet, exclusive alpine atmosphere with no crowds.

Save as: `public/products/alpine-cashmere-scarf/lifestyle--ivory.jpg`

Note: generate this same six-shot set once per additional colourway shown on the PDP (Oatmeal, Taupe, Espresso), reusing the identical prompt with the colour name substituted. Save each set at `public/products/alpine-cashmere-scarf/<shot>--<colour-slug>.jpg` so garment cut, styling and background stay identical across every colour of this product.

### The St. Moritz Cashmere Beanie
- Slug: `st-moritz-cashmere-beanie`
- Category: Beanies
- Colourways: Ivory (#EEEAE1), Oatmeal (#CEC4B4), Espresso (#332A25), Black (#111111)
- Materials: 100% cashmere
- Location: St. Moritz, Switzerland

**Image 1 — Front**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio front-view product shot of the MONTREVE The St. Moritz Cashmere Beanie in Ivory, shown on an invisible mannequin or gently draped, centred on a warm ivory/stone seamless background. Crisp focus on cut, silhouette and construction. 85mm lens, even soft shadow, colour-accurate 100% cashmere.

Save as: `public/products/st-moritz-cashmere-beanie/front--ivory.jpg`

**Image 2 — Back**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio back-view product shot of the MONTREVE The St. Moritz Cashmere Beanie in Ivory, same styling, lighting, background and proportions as the matching front-view shot for exact visual consistency. Show back seaming, yoke and hem construction clearly. 85mm lens, warm ivory/stone seamless background.

Save as: `public/products/st-moritz-cashmere-beanie/back--ivory.jpg`

**Image 3 — Material Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Extreme macro close-up of the 100% cashmere fabric of the MONTREVE The St. Moritz Cashmere Beanie in Ivory. Visible fibre structure and natural texture, shallow depth of field, soft directional daylight, styled as a luxury fabric-swatch detail shot for an e-commerce product gallery.

Save as: `public/products/st-moritz-cashmere-beanie/material--ivory.jpg`

**Image 4 — Hardware / Stitching Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Macro detail shot of the leather MONTREVE patch and folded rib cuff on the MONTREVE The St. Moritz Cashmere Beanie in Ivory, including visible stitching. Shallow depth of field, warm directional light, subtle embossed or engraved "MONTREVE" mark on the hardware where realistic. Neutral ivory background.

Save as: `public/products/st-moritz-cashmere-beanie/hardware--ivory.jpg`

**Image 5 — Worn (Studio)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. An elegant female model in her twenties, natural European casting, high-fashion casting, wearing the MONTREVE The St. Moritz Cashmere Beanie in Ivory against a soft neutral studio backdrop. Relaxed, confident, unposed stance, natural skin, realistic fabric drape. 85mm fashion photography, shallow depth of field.

Save as: `public/products/st-moritz-cashmere-beanie/worn--ivory.jpg`

**Image 6 — Lifestyle (Alpine)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Editorial lifestyle photograph of a model wearing the MONTREVE The St. Moritz Cashmere Beanie in Ivory, walking along a frozen lakeside path in soft winter light, in St. Moritz, Switzerland. Natural winter sunlight, soft shadows, cinematic 35mm environmental fashion photography, shallow depth of field, quiet, exclusive alpine atmosphere with no crowds.

Save as: `public/products/st-moritz-cashmere-beanie/lifestyle--ivory.jpg`

Note: generate this same six-shot set once per additional colourway shown on the PDP (Oatmeal, Espresso, Black), reusing the identical prompt with the colour name substituted. Save each set at `public/products/st-moritz-cashmere-beanie/<shot>--<colour-slug>.jpg` so garment cut, styling and background stay identical across every colour of this product.

### The Courchevel Leather Glove
- Slug: `courchevel-leather-glove`
- Category: Gloves
- Colourways: Taupe (#87796B), Espresso (#332A25), Black (#111111)
- Materials: Nappa leather, Cashmere lining
- Location: Courchevel 1850, France

**Image 1 — Front**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio front-view product shot of the MONTREVE The Courchevel Leather Glove in Taupe, shown on an invisible mannequin or gently draped, centred on a warm ivory/stone seamless background. Crisp focus on cut, silhouette and construction. 85mm lens, even soft shadow, colour-accurate Nappa leather.

Save as: `public/products/courchevel-leather-glove/front--taupe.jpg`

**Image 2 — Back**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio back-view product shot of the MONTREVE The Courchevel Leather Glove in Taupe, same styling, lighting, background and proportions as the matching front-view shot for exact visual consistency. Show back seaming, yoke and hem construction clearly. 85mm lens, warm ivory/stone seamless background.

Save as: `public/products/courchevel-leather-glove/back--taupe.jpg`

**Image 3 — Material Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Extreme macro close-up of the Nappa leather fabric of the MONTREVE The Courchevel Leather Glove in Taupe. Visible fibre structure and natural texture, shallow depth of field, soft directional daylight, styled as a luxury fabric-swatch detail shot for an e-commerce product gallery.

Save as: `public/products/courchevel-leather-glove/material--taupe.jpg`

**Image 4 — Hardware / Stitching Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Macro detail shot of the fine top-stitching along each finger seam on the MONTREVE The Courchevel Leather Glove in Taupe, including visible stitching. Shallow depth of field, warm directional light, subtle embossed or engraved "MONTREVE" mark on the hardware where realistic. Neutral ivory background.

Save as: `public/products/courchevel-leather-glove/hardware--taupe.jpg`

**Image 5 — Worn (Studio)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. An elegant male model in his thirties, natural European casting, high-fashion casting, wearing the MONTREVE The Courchevel Leather Glove in Taupe against a soft neutral studio backdrop. Relaxed, confident, unposed stance, natural skin, realistic fabric drape. 85mm fashion photography, shallow depth of field.

Save as: `public/products/courchevel-leather-glove/worn--taupe.jpg`

**Image 6 — Lifestyle (Alpine)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Editorial lifestyle photograph of a model wearing the MONTREVE The Courchevel Leather Glove in Taupe, standing at the entrance of a mountain restaurant terrace, in Courchevel 1850, France. Natural winter sunlight, soft shadows, cinematic 35mm environmental fashion photography, shallow depth of field, quiet, exclusive alpine atmosphere with no crowds.

Save as: `public/products/courchevel-leather-glove/lifestyle--taupe.jpg`

Note: generate this same six-shot set once per additional colourway shown on the PDP (Espresso, Black), reusing the identical prompt with the colour name substituted. Save each set at `public/products/courchevel-leather-glove/<shot>--<colour-slug>.jpg` so garment cut, styling and background stay identical across every colour of this product.

### The Gstaad Suede Glove
- Slug: `gstaad-suede-glove`
- Category: Gloves
- Colourways: Oatmeal (#CEC4B4), Taupe (#87796B), Espresso (#332A25)
- Materials: Suede, Shearling lining
- Location: Gstaad, Switzerland

**Image 1 — Front**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio front-view product shot of the MONTREVE The Gstaad Suede Glove in Oatmeal, shown on an invisible mannequin or gently draped, centred on a warm ivory/stone seamless background. Crisp focus on cut, silhouette and construction. 85mm lens, even soft shadow, colour-accurate Suede.

Save as: `public/products/gstaad-suede-glove/front--oatmeal.jpg`

**Image 2 — Back**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio back-view product shot of the MONTREVE The Gstaad Suede Glove in Oatmeal, same styling, lighting, background and proportions as the matching front-view shot for exact visual consistency. Show back seaming, yoke and hem construction clearly. 85mm lens, warm ivory/stone seamless background.

Save as: `public/products/gstaad-suede-glove/back--oatmeal.jpg`

**Image 3 — Material Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Extreme macro close-up of the Suede fabric of the MONTREVE The Gstaad Suede Glove in Oatmeal. Visible fibre structure and natural texture, shallow depth of field, soft directional daylight, styled as a luxury fabric-swatch detail shot for an e-commerce product gallery.

Save as: `public/products/gstaad-suede-glove/material--oatmeal.jpg`

**Image 4 — Hardware / Stitching Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Macro detail shot of the snap wrist closure with matte metal popper on the MONTREVE The Gstaad Suede Glove in Oatmeal, including visible stitching. Shallow depth of field, warm directional light, subtle embossed or engraved "MONTREVE" mark on the hardware where realistic. Neutral ivory background.

Save as: `public/products/gstaad-suede-glove/hardware--oatmeal.jpg`

**Image 5 — Worn (Studio)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. An elegant female model in her twenties, natural European casting, high-fashion casting, wearing the MONTREVE The Gstaad Suede Glove in Oatmeal against a soft neutral studio backdrop. Relaxed, confident, unposed stance, natural skin, realistic fabric drape. 85mm fashion photography, shallow depth of field.

Save as: `public/products/gstaad-suede-glove/worn--oatmeal.jpg`

**Image 6 — Lifestyle (Alpine)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Editorial lifestyle photograph of a model wearing the MONTREVE The Gstaad Suede Glove in Oatmeal, standing at the top of a quiet ski slope, skis in hand, in Gstaad, Switzerland. Natural winter sunlight, soft shadows, cinematic 35mm environmental fashion photography, shallow depth of field, quiet, exclusive alpine atmosphere with no crowds.

Save as: `public/products/gstaad-suede-glove/lifestyle--oatmeal.jpg`

Note: generate this same six-shot set once per additional colourway shown on the PDP (Taupe, Espresso), reusing the identical prompt with the colour name substituted. Save each set at `public/products/gstaad-suede-glove/<shot>--<colour-slug>.jpg` so garment cut, styling and background stay identical across every colour of this product.

### The Megève Winter Boot
- Slug: `megeve-winter-boot`
- Category: Boots
- Colourways: Oatmeal (#CEC4B4), Taupe (#87796B), Black (#111111)
- Materials: Suede upper, Shearling lining, Rubber sole
- Location: Megève, France

**Image 1 — Front**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio front-view product shot of the MONTREVE The Megève Winter Boot in Oatmeal, shown on an invisible mannequin or gently draped, centred on a warm ivory/stone seamless background. Crisp focus on cut, silhouette and construction. 85mm lens, even soft shadow, colour-accurate Suede upper.

Save as: `public/products/megeve-winter-boot/front--oatmeal.jpg`

**Image 2 — Back**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio back-view product shot of the MONTREVE The Megève Winter Boot in Oatmeal, same styling, lighting, background and proportions as the matching front-view shot for exact visual consistency. Show back seaming, yoke and hem construction clearly. 85mm lens, warm ivory/stone seamless background.

Save as: `public/products/megeve-winter-boot/back--oatmeal.jpg`

**Image 3 — Material Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Extreme macro close-up of the Suede upper fabric of the MONTREVE The Megève Winter Boot in Oatmeal. Visible fibre structure and natural texture, shallow depth of field, soft directional daylight, styled as a luxury fabric-swatch detail shot for an e-commerce product gallery.

Save as: `public/products/megeve-winter-boot/material--oatmeal.jpg`

**Image 4 — Hardware / Stitching Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Macro detail shot of the woven lace closure and stitched rubber outsole on the MONTREVE The Megève Winter Boot in Oatmeal, including visible stitching. Shallow depth of field, warm directional light, subtle embossed or engraved "MONTREVE" mark on the hardware where realistic. Neutral ivory background.

Save as: `public/products/megeve-winter-boot/hardware--oatmeal.jpg`

**Image 5 — Worn (Studio)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. An elegant female model in her twenties, natural European casting, high-fashion casting, wearing the MONTREVE The Megève Winter Boot in Oatmeal against a soft neutral studio backdrop. Relaxed, confident, unposed stance, natural skin, realistic fabric drape. 85mm fashion photography, shallow depth of field.

Save as: `public/products/megeve-winter-boot/worn--oatmeal.jpg`

**Image 6 — Lifestyle (Alpine)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Editorial lifestyle photograph of a model wearing the MONTREVE The Megève Winter Boot in Oatmeal, walking through fresh snow outside a wooden chalet, in Megève, France. Natural winter sunlight, soft shadows, cinematic 35mm environmental fashion photography, shallow depth of field, quiet, exclusive alpine atmosphere with no crowds.

Save as: `public/products/megeve-winter-boot/lifestyle--oatmeal.jpg`

Note: generate this same six-shot set once per additional colourway shown on the PDP (Taupe, Black), reusing the identical prompt with the colour name substituted. Save each set at `public/products/megeve-winter-boot/<shot>--<colour-slug>.jpg` so garment cut, styling and background stay identical across every colour of this product.

### The Verbier Alpine Boot
- Slug: `verbier-alpine-boot`
- Category: Boots
- Colourways: Stone (#AAA195), Espresso (#332A25), Black (#111111)
- Materials: Waterproof suede, Technical sole
- Location: Verbier, Switzerland

**Image 1 — Front**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio front-view product shot of the MONTREVE The Verbier Alpine Boot in Stone, shown on an invisible mannequin or gently draped, centred on a warm ivory/stone seamless background. Crisp focus on cut, silhouette and construction. 85mm lens, even soft shadow, colour-accurate Waterproof suede.

Save as: `public/products/verbier-alpine-boot/front--stone.jpg`

**Image 2 — Back**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio back-view product shot of the MONTREVE The Verbier Alpine Boot in Stone, same styling, lighting, background and proportions as the matching front-view shot for exact visual consistency. Show back seaming, yoke and hem construction clearly. 85mm lens, warm ivory/stone seamless background.

Save as: `public/products/verbier-alpine-boot/back--stone.jpg`

**Image 3 — Material Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Extreme macro close-up of the Waterproof suede fabric of the MONTREVE The Verbier Alpine Boot in Stone. Visible fibre structure and natural texture, shallow depth of field, soft directional daylight, styled as a luxury fabric-swatch detail shot for an e-commerce product gallery.

Save as: `public/products/verbier-alpine-boot/material--stone.jpg`

**Image 4 — Hardware / Stitching Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Macro detail shot of the lugged technical outsole and reinforced toe cap stitching on the MONTREVE The Verbier Alpine Boot in Stone, including visible stitching. Shallow depth of field, warm directional light, subtle embossed or engraved "MONTREVE" mark on the hardware where realistic. Neutral ivory background.

Save as: `public/products/verbier-alpine-boot/hardware--stone.jpg`

**Image 5 — Worn (Studio)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. An elegant male model in his thirties, natural European casting, high-fashion casting, wearing the MONTREVE The Verbier Alpine Boot in Stone against a soft neutral studio backdrop. Relaxed, confident, unposed stance, natural skin, realistic fabric drape. 85mm fashion photography, shallow depth of field.

Save as: `public/products/verbier-alpine-boot/worn--stone.jpg`

**Image 6 — Lifestyle (Alpine)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Editorial lifestyle photograph of a model wearing the MONTREVE The Verbier Alpine Boot in Stone, walking across a sunlit mountain plateau, in Verbier, Switzerland. Natural winter sunlight, soft shadows, cinematic 35mm environmental fashion photography, shallow depth of field, quiet, exclusive alpine atmosphere with no crowds.

Save as: `public/products/verbier-alpine-boot/lifestyle--stone.jpg`

Note: generate this same six-shot set once per additional colourway shown on the PDP (Espresso, Black), reusing the identical prompt with the colour name substituted. Save each set at `public/products/verbier-alpine-boot/<shot>--<colour-slug>.jpg` so garment cut, styling and background stay identical across every colour of this product.

### The Montreux Cashmere Cap
- Slug: `montreux-cashmere-cap`
- Category: Beanies
- Colourways: Oatmeal (#CEC4B4), Espresso (#332A25), Black (#111111)
- Materials: 100% cashmere, Leather brim
- Location: Montreux, Switzerland

**Image 1 — Front**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio front-view product shot of the MONTREVE The Montreux Cashmere Cap in Oatmeal, shown on an invisible mannequin or gently draped, centred on a warm ivory/stone seamless background. Crisp focus on cut, silhouette and construction. 85mm lens, even soft shadow, colour-accurate 100% cashmere.

Save as: `public/products/montreux-cashmere-cap/front--oatmeal.jpg`

**Image 2 — Back**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio back-view product shot of the MONTREVE The Montreux Cashmere Cap in Oatmeal, same styling, lighting, background and proportions as the matching front-view shot for exact visual consistency. Show back seaming, yoke and hem construction clearly. 85mm lens, warm ivory/stone seamless background.

Save as: `public/products/montreux-cashmere-cap/back--oatmeal.jpg`

**Image 3 — Material Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Extreme macro close-up of the 100% cashmere fabric of the MONTREVE The Montreux Cashmere Cap in Oatmeal. Visible fibre structure and natural texture, shallow depth of field, soft directional daylight, styled as a luxury fabric-swatch detail shot for an e-commerce product gallery.

Save as: `public/products/montreux-cashmere-cap/material--oatmeal.jpg`

**Image 4 — Hardware / Stitching Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Macro detail shot of the leather brim edge and adjustable interior band on the MONTREVE The Montreux Cashmere Cap in Oatmeal, including visible stitching. Shallow depth of field, warm directional light, subtle embossed or engraved "MONTREVE" mark on the hardware where realistic. Neutral ivory background.

Save as: `public/products/montreux-cashmere-cap/hardware--oatmeal.jpg`

**Image 5 — Worn (Studio)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. An elegant male model in his twenties, natural European casting, high-fashion casting, wearing the MONTREVE The Montreux Cashmere Cap in Oatmeal against a soft neutral studio backdrop. Relaxed, confident, unposed stance, natural skin, realistic fabric drape. 85mm fashion photography, shallow depth of field.

Save as: `public/products/montreux-cashmere-cap/worn--oatmeal.jpg`

**Image 6 — Lifestyle (Alpine)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Editorial lifestyle photograph of a model wearing the MONTREVE The Montreux Cashmere Cap in Oatmeal, walking along a mountain ridge path in soft morning light, in Montreux, Switzerland. Natural winter sunlight, soft shadows, cinematic 35mm environmental fashion photography, shallow depth of field, quiet, exclusive alpine atmosphere with no crowds.

Save as: `public/products/montreux-cashmere-cap/lifestyle--oatmeal.jpg`

Note: generate this same six-shot set once per additional colourway shown on the PDP (Espresso, Black), reusing the identical prompt with the colour name substituted. Save each set at `public/products/montreux-cashmere-cap/<shot>--<colour-slug>.jpg` so garment cut, styling and background stay identical across every colour of this product.

### The Engadin Weekender
- Slug: `engadin-weekender`
- Category: Bags
- Colourways: Oatmeal (#CEC4B4), Taupe (#87796B), Espresso (#332A25)
- Materials: Full-grain leather, Waxed canvas
- Location: St. Moritz, Switzerland

**Image 1 — Front**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio front-view product shot of the MONTREVE The Engadin Weekender in Oatmeal, shown on an invisible mannequin or gently draped, centred on a warm ivory/stone seamless background. Crisp focus on cut, silhouette and construction. 85mm lens, even soft shadow, colour-accurate Full-grain leather.

Save as: `public/products/engadin-weekender/front--oatmeal.jpg`

**Image 2 — Back**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Clean studio back-view product shot of the MONTREVE The Engadin Weekender in Oatmeal, same styling, lighting, background and proportions as the matching front-view shot for exact visual consistency. Show back seaming, yoke and hem construction clearly. 85mm lens, warm ivory/stone seamless background.

Save as: `public/products/engadin-weekender/back--oatmeal.jpg`

**Image 3 — Material Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Extreme macro close-up of the Full-grain leather fabric of the MONTREVE The Engadin Weekender in Oatmeal. Visible fibre structure and natural texture, shallow depth of field, soft directional daylight, styled as a luxury fabric-swatch detail shot for an e-commerce product gallery.

Save as: `public/products/engadin-weekender/material--oatmeal.jpg`

**Image 4 — Hardware / Stitching Close-up**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Macro detail shot of the brass buckles and riveted leather handle attachment on the MONTREVE The Engadin Weekender in Oatmeal, including visible stitching. Shallow depth of field, warm directional light, subtle embossed or engraved "MONTREVE" mark on the hardware where realistic. Neutral ivory background.

Save as: `public/products/engadin-weekender/hardware--oatmeal.jpg`

**Image 5 — Worn (Studio)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. An elegant male model in his thirties, natural European casting, high-fashion casting, wearing the MONTREVE The Engadin Weekender in Oatmeal against a soft neutral studio backdrop. Relaxed, confident, unposed stance, natural skin, realistic fabric drape. 85mm fashion photography, shallow depth of field.

Save as: `public/products/engadin-weekender/worn--oatmeal.jpg`

**Image 6 — Lifestyle (Alpine)**

> Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light. Editorial lifestyle photograph of a model wearing the MONTREVE The Engadin Weekender in Oatmeal, standing on a train platform in the Engadin valley, weekender in hand, in St. Moritz, Switzerland. Natural winter sunlight, soft shadows, cinematic 35mm environmental fashion photography, shallow depth of field, quiet, exclusive alpine atmosphere with no crowds.

Save as: `public/products/engadin-weekender/lifestyle--oatmeal.jpg`

Note: generate this same six-shot set once per additional colourway shown on the PDP (Taupe, Espresso), reusing the identical prompt with the colour name substituted. Save each set at `public/products/engadin-weekender/<shot>--<colour-slug>.jpg` so garment cut, styling and background stay identical across every colour of this product.
