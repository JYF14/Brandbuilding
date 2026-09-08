import { ProductImage } from "./types";

interface ShotSpec {
  productName: string;
  colorName: string;
  material: string;
  hardware: string;
  location: string;
  modelWorn: string;
  scene: string;
}

const BASE =
  "Photorealistic, high-end luxury fashion e-commerce photography for the brand MONTREVE. No visible third-party logos or branding of any kind — only a small, subtle woven MONTREVE label where appropriate. Natural, refined European quiet-luxury art direction, premium colour grading, soft natural light.";

export function buildImages(spec: ShotSpec): ProductImage[] {
  const { productName, colorName, material, hardware, location, modelWorn, scene } =
    spec;

  return [
    {
      shot: "front",
      alt: `${productName} in ${colorName}, front view`,
      prompt: `${BASE} Clean studio front-view product shot of the MONTREVE ${productName} in ${colorName}, shown on an invisible mannequin or gently draped, centred on a warm ivory/stone seamless background. Crisp focus on cut, silhouette and construction. 85mm lens, even soft shadow, colour-accurate ${material}.`,
    },
    {
      shot: "back",
      alt: `${productName} in ${colorName}, back view`,
      prompt: `${BASE} Clean studio back-view product shot of the MONTREVE ${productName} in ${colorName}, same styling, lighting, background and proportions as the matching front-view shot for exact visual consistency. Show back seaming, yoke and hem construction clearly. 85mm lens, warm ivory/stone seamless background.`,
    },
    {
      shot: "material",
      alt: `${productName} — macro fabric detail`,
      prompt: `${BASE} Extreme macro close-up of the ${material} fabric of the MONTREVE ${productName} in ${colorName}. Visible fibre structure and natural texture, shallow depth of field, soft directional daylight, styled as a luxury fabric-swatch detail shot for an e-commerce product gallery.`,
    },
    {
      shot: "hardware",
      alt: `${productName} — hardware and stitching detail`,
      prompt: `${BASE} Macro detail shot of the ${hardware} on the MONTREVE ${productName} in ${colorName}, including visible stitching. Shallow depth of field, warm directional light, subtle embossed or engraved "MONTREVE" mark on the hardware where realistic. Neutral ivory background.`,
    },
    {
      shot: "worn",
      alt: `${productName} worn by model, studio`,
      prompt: `${BASE} An elegant ${modelWorn}, high-fashion casting, wearing the MONTREVE ${productName} in ${colorName} against a soft neutral studio backdrop. Relaxed, confident, unposed stance, natural skin, realistic fabric drape. 85mm fashion photography, shallow depth of field.`,
    },
    {
      shot: "lifestyle",
      alt: `${productName} — alpine lifestyle`,
      prompt: `${BASE} Editorial lifestyle photograph of a model wearing the MONTREVE ${productName} in ${colorName}, ${scene}, in ${location}. Natural winter sunlight, soft shadows, cinematic 35mm environmental fashion photography, shallow depth of field, quiet, exclusive alpine atmosphere with no crowds.`,
    },
  ];
}
