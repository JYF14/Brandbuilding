import { PRODUCTS } from "../lib/products";
import { productImagePath } from "../lib/image-path";
import { writeFileSync } from "fs";
import path from "path";

const SHOT_TITLES: Record<string, string> = {
  front: "Image 1 — Front",
  back: "Image 2 — Back",
  material: "Image 3 — Material Close-up",
  hardware: "Image 4 — Hardware / Stitching Close-up",
  worn: "Image 5 — Worn (Studio)",
  lifestyle: "Image 6 — Lifestyle (Alpine)",
};

let out = `# MONTREVE — Product Photography Generation Manifest

This document is the complete image architecture for the MONTREVE web store, generated
directly from the live product data in \`lib/products.ts\`. Every product currently ships
with a branded, deterministic SVG placeholder (see \`components/ArtPlate.tsx\`) so the site
is fully navigable and visually coherent today. Each placeholder should be replaced with a
real photograph generated (or shot) from the prompt below it — the prompt already encodes
the product name, colourway, material and location so the six shots per product stay
consistent with each other and with the rest of the catalogue.

**Total products:** ${PRODUCTS.length}
**Total images required:** ${PRODUCTS.length * 6} (6 shots × ${PRODUCTS.length} products)

Recommended image spec: 2400 × 3000px (4:5), sRGB, exported as JPEG or WebP. Background:
warm ivory / stone seamless for studio shots (Images 1, 2, 5); neutral macro backdrop for
Images 3–4; natural alpine environment for Image 6.

## How a real photo replaces a placeholder — no code changes needed

Every product image on the site is resolved by \`components/ProductArt.tsx\` /
\`components/ProductGallery.tsx\`. Both first try to load a real file at a fixed path
under \`/public/products/\`; if that file doesn't exist (404), they silently fall back to
the generated SVG placeholder. So to go live with a real photo, just save it — nothing
else needs to change.

**Path convention:** \`public/products/<slug>/<shot>--<colour-slug>.jpg\`

Each entry below already prints the exact path to save that file at. \`<colour-slug>\` is
the colour name lower-cased with spaces replaced by hyphens (e.g. "Warm Cream" →
\`warm-cream\`). You can fill the catalogue in gradually, one file at a time — any shot
without a matching file just keeps showing its placeholder.

---

`;

for (const gender of ["women", "men", "accessories"] as const) {
  const products = PRODUCTS.filter((p) => p.gender === gender);
  out += `\n## ${gender.toUpperCase()} (${products.length} products)\n`;

  for (const product of products) {
    out += `\n### ${product.name}\n`;
    out += `- Slug: \`${product.slug}\`\n`;
    out += `- Category: ${product.category}\n`;
    out += `- Colourways: ${product.colors.map((c) => `${c.name} (${c.hex})`).join(", ")}\n`;
    out += `- Materials: ${product.materials.join(", ")}\n`;
    out += `- Location: ${product.location}\n\n`;

    for (const image of product.images) {
      out += `**${SHOT_TITLES[image.shot]}**\n\n`;
      out += `> ${image.prompt}\n\n`;
      out += `Save as: \`public${productImagePath(product.slug, image.shot, product.colors[0].name)}\`\n\n`;
    }
    out += `Note: generate this same six-shot set once per additional colourway shown on the PDP (${product.colors
      .slice(1)
      .map((c) => c.name)
      .join(", ") || "—"}), reusing the identical prompt with the colour name substituted. Save each set at \`public/products/${product.slug}/<shot>--<colour-slug>.jpg\` so garment cut, styling and background stay identical across every colour of this product.\n`;
  }
}

writeFileSync(path.join(__dirname, "..", "IMAGE_MANIFEST.md"), out);
console.log("Wrote IMAGE_MANIFEST.md");
