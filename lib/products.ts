import { Product, ProductColor, Gender, Silhouette } from "./types";
import { buildImages } from "./image-prompts";
import {
  SNOW,
  IVORY,
  CREAM,
  OATMEAL,
  STONE,
  TAUPE,
  ESPRESSO,
  CHARCOAL,
  BLACK,
} from "./colors";

type RawProduct = Omit<Product, "relatedSlugs" | "completeTheLookSlugs">;

interface Def {
  slug: string;
  name: string;
  gender: Gender;
  category: string;
  collections: string[];
  silhouette: Silhouette;
  price: number;
  isNew?: boolean;
  rating: number;
  reviewCount: number;
  colors: ProductColor[];
  sizes: string[];
  materials: string[];
  description: string;
  details: string[];
  care: string[];
  location: string;
  hardware: string;
  modelWorn: string;
  scene: string;
}

const CLOTHING_SIZES_W = ["XS", "S", "M", "L", "XL"];
const CLOTHING_SIZES_M = ["S", "M", "L", "XL", "XXL"];
const ONE_SIZE = ["One Size"];
const GLOVE_SIZES = ["S", "M", "L"];
const BOOT_SIZES_W = ["36", "37", "38", "39", "40", "41"];
const BOOT_SIZES_M = ["40", "41", "42", "43", "44", "45"];

const CARE_STANDARD = [
  "Designed to be worn for years, not seasons.",
  "Store folded and use a cashmere comb when necessary.",
  "Dry clean only.",
];

const CARE_WOOL = [
  "Designed to be worn for years, not seasons.",
  "Steam to refresh; avoid prolonged direct sunlight.",
  "Dry clean only.",
];

const CARE_SHEARLING = [
  "Store on a padded hanger away from direct heat.",
  "Treat leather elements with a specialist protector before first wear.",
  "Professional leather and fur clean only.",
];

const CARE_TECHNICAL = [
  "Machine wash cold on a delicate cycle, inside out.",
  "Re-proof with a technical wash-in treatment after every 4–5 washes.",
  "Do not tumble dry; hang to air dry.",
];

const CARE_LEATHER = [
  "Wipe clean with a soft, dry cloth.",
  "Treat with a leather protector before first wear in snow conditions.",
  "Store in the supplied dust bag away from direct heat.",
];

const defs: Def[] = [
  // ---------------- WOMEN ----------------
  {
    slug: "megeve-cashmere-turtleneck",
    name: "The Megève Cashmere Turtleneck",
    gender: "women",
    category: "Cashmere",
    collections: ["cashmere", "new-arrivals"],
    silhouette: "rollneck",
    price: 590,
    isNew: true,
    rating: 4.8,
    reviewCount: 28,
    colors: [IVORY, OATMEAL, TAUPE, BLACK],
    sizes: CLOTHING_SIZES_W,
    materials: ["100% cashmere"],
    description:
      "An exceptionally soft turtleneck crafted from pure cashmere, designed for warmth without weight. Finished with a relaxed collar and refined ribbed detailing.",
    details: [
      "100% pure cashmere",
      "Made in Italy",
      "Relaxed fit",
      "Ribbed collar, cuffs and hem",
      "Mid-weight knit",
    ],
    care: CARE_STANDARD,
    location: "Megève, France",
    hardware: "ribbed collar seam and woven interior MONTREVE label",
    modelWorn: "female model in her late twenties, natural European casting",
    scene: "seated on a sunlit chalet terrace with a coffee, mountains behind her",
  },
  {
    slug: "courchevel-shearling-coat",
    name: "The Courchevel Shearling Coat",
    gender: "women",
    category: "Coats & Jackets",
    collections: ["outerwear", "new-arrivals"],
    silhouette: "shearling-coat",
    price: 2450,
    isNew: true,
    rating: 4.9,
    reviewCount: 19,
    colors: [IVORY, CREAM, OATMEAL],
    sizes: CLOTHING_SIZES_W,
    materials: ["Shearling (sheepskin)", "Horn buttons"],
    description:
      "An oversized shearling coat with a generous notch collar, cut long for maximum warmth. A signature MONTREVE outerwear piece built for the coldest mornings at altitude.",
    details: [
      "Genuine shearling, wool-side in",
      "Oversized, relaxed fit",
      "Notch collar",
      "Dropped shoulder",
      "Horn button closure",
      "Made in Italy",
    ],
    care: CARE_SHEARLING,
    location: "Courchevel 1850, France",
    hardware: "horn button closure and interior leather MONTREVE tag",
    modelWorn: "female model in her thirties, natural European casting",
    scene: "walking along a snow-covered chalet terrace at golden hour",
  },
  {
    slug: "valais-cashmere-knit",
    name: "The Valais Cashmere Knit",
    gender: "women",
    category: "Cashmere",
    collections: ["cashmere"],
    silhouette: "knit",
    price: 450,
    rating: 4.7,
    reviewCount: 41,
    colors: [SNOW, IVORY, STONE, ESPRESSO],
    sizes: CLOTHING_SIZES_W,
    materials: ["100% cashmere"],
    description:
      "A crew-neck cashmere knit with a soft, rounded silhouette. Lightweight enough to layer, substantial enough to wear alone.",
    details: [
      "100% pure cashmere",
      "Made in Italy",
      "Regular fit",
      "Ribbed crew neck, cuffs and hem",
    ],
    care: CARE_STANDARD,
    location: "Val de Bagnes, Switzerland",
    hardware: "ribbed crew neckline and woven interior MONTREVE label",
    modelWorn: "female model in her twenties, natural European casting",
    scene: "walking through a quiet snow-covered pine forest",
  },
  {
    slug: "st-moritz-wool-coat",
    name: "The St. Moritz Wool Coat",
    gender: "women",
    category: "Coats & Jackets",
    collections: ["outerwear", "new-arrivals"],
    silhouette: "coat",
    price: 1890,
    isNew: true,
    rating: 4.8,
    reviewCount: 33,
    colors: [OATMEAL, STONE, ESPRESSO, BLACK],
    sizes: CLOTHING_SIZES_W,
    materials: ["90% wool, 10% cashmere"],
    description:
      "A double-breasted wool coat with a sharp, tailored silhouette softened by a touch of cashmere. Cut for a considered, uncluttered line.",
    details: [
      "90% wool, 10% cashmere",
      "Double-breasted, horn buttons",
      "Tailored fit",
      "Notch lapel",
      "Made in Italy",
    ],
    care: CARE_WOOL,
    location: "St. Moritz, Switzerland",
    hardware: "double-breasted horn buttons and notch lapel stitching",
    modelWorn: "female model in her thirties, natural European casting",
    scene: "standing beside a frozen lake with mountains in the distance",
  },
  {
    slug: "gstaad-alpine-jacket",
    name: "The Gstaad Alpine Jacket",
    gender: "women",
    category: "Ski & Alpine",
    collections: ["ski", "outerwear", "new-arrivals"],
    silhouette: "ski-jacket",
    price: 1650,
    isNew: true,
    rating: 4.7,
    reviewCount: 22,
    colors: [SNOW, STONE, ESPRESSO],
    sizes: CLOTHING_SIZES_W,
    materials: ["Technical wool-blend shell", "Merino wool lining"],
    description:
      "A technical alpine jacket in a brushed wool-blend shell, lined in merino for warmth on the slope and at the mountain restaurant terrace after.",
    details: [
      "Technical wool-blend outer shell",
      "Merino wool lining",
      "Water-resistant finish",
      "Articulated sleeves",
      "Zip and popper front closure",
    ],
    care: CARE_TECHNICAL,
    location: "Gstaad, Switzerland",
    hardware: "matte zip pull with engraved M and popper storm flap",
    modelWorn: "female model in her twenties, natural European casting",
    scene: "standing at the top of a quiet ski slope, skis in hand",
  },
  {
    slug: "verbier-ski-trouser",
    name: "The Verbier Ski Trouser",
    gender: "women",
    category: "Ski & Alpine",
    collections: ["ski"],
    silhouette: "trouser",
    price: 790,
    rating: 4.6,
    reviewCount: 17,
    colors: [SNOW, STONE, BLACK],
    sizes: CLOTHING_SIZES_W,
    materials: ["Technical stretch wool-blend"],
    description:
      "A high-rise, straight-leg ski trouser in a technical stretch wool-blend, built for movement without sacrificing line.",
    details: [
      "Technical stretch wool-blend",
      "High-rise, straight leg",
      "Articulated knee",
      "Reinforced hem",
      "Side zip pockets",
    ],
    care: CARE_TECHNICAL,
    location: "Verbier, Switzerland",
    hardware: "side-seam zip pocket and reinforced hem stitching",
    modelWorn: "female model in her twenties, natural European casting",
    scene: "walking across a sunlit mountain plateau with skis over one shoulder",
  },
  {
    slug: "chamonix-cashmere-cardigan",
    name: "The Chamonix Cashmere Cardigan",
    gender: "women",
    category: "Cashmere",
    collections: ["cashmere"],
    silhouette: "cardigan",
    price: 690,
    rating: 4.8,
    reviewCount: 24,
    colors: [IVORY, OATMEAL, TAUPE],
    sizes: CLOTHING_SIZES_W,
    materials: ["100% cashmere"],
    description:
      "A relaxed longline cardigan in pure cashmere with horn buttons and deep patch pockets — an easy layer for cooler evenings.",
    details: [
      "100% pure cashmere",
      "Longline, relaxed fit",
      "Horn button closure",
      "Patch pockets",
      "Made in Italy",
    ],
    care: CARE_STANDARD,
    location: "Chamonix, France",
    hardware: "horn button placket and patch pocket stitching",
    modelWorn: "female model in her thirties, natural European casting",
    scene: "sitting beside a fireplace in a wood-panelled chalet interior",
  },
  {
    slug: "savoie-wool-trouser",
    name: "The Savoie Wool Trouser",
    gender: "women",
    category: "Trousers",
    collections: [],
    silhouette: "trouser",
    price: 650,
    rating: 4.6,
    reviewCount: 15,
    colors: [OATMEAL, STONE, ESPRESSO],
    sizes: CLOTHING_SIZES_W,
    materials: ["Brushed wool"],
    description:
      "A tailored, wide-leg trouser in brushed wool with a fluid drape and clean waistband — equally at home on the terrace or in the city.",
    details: [
      "Brushed wool",
      "Wide leg, tailored fit",
      "Concealed hook-and-bar waistband",
      "Made in Italy",
    ],
    care: CARE_WOOL,
    location: "Savoie, France",
    hardware: "concealed hook-and-bar waistband closure",
    modelWorn: "female model in her twenties, natural European casting",
    scene: "walking through a quiet alpine village street",
  },
  {
    slug: "mont-blanc-down-jacket",
    name: "The Mont Blanc Down Jacket",
    gender: "women",
    category: "Outerwear",
    collections: ["outerwear", "new-arrivals"],
    silhouette: "down-jacket",
    price: 1450,
    isNew: true,
    rating: 4.7,
    reviewCount: 20,
    colors: [SNOW, OATMEAL, ESPRESSO, BLACK],
    sizes: CLOTHING_SIZES_W,
    materials: ["Responsibly-sourced down fill", "Technical matte shell"],
    description:
      "A refined down jacket in a matte technical shell, channel-quilted for structure and filled with responsibly-sourced down for serious warmth.",
    details: [
      "Responsibly-sourced down fill",
      "Matte technical shell",
      "Channel quilting",
      "Two-way front zip",
      "Zipped side pockets",
    ],
    care: CARE_TECHNICAL,
    location: "Chamonix-Mont-Blanc, France",
    hardware: "two-way front zip with leather pull tab",
    modelWorn: "female model in her twenties, natural European casting",
    scene: "standing on a snow-covered balcony overlooking Mont Blanc",
  },
  {
    slug: "arlberg-rollneck",
    name: "The Arlberg Rollneck",
    gender: "women",
    category: "Knitwear",
    collections: ["new-arrivals"],
    silhouette: "rollneck",
    price: 490,
    isNew: true,
    rating: 4.6,
    reviewCount: 12,
    colors: [CREAM, STONE, ESPRESSO],
    sizes: CLOTHING_SIZES_W,
    materials: ["100% merino wool"],
    description:
      "A fine-gauge merino rollneck with a soft, close hand, cut with a slightly cropped body for high-waisted layering.",
    details: [
      "100% merino wool",
      "Fine gauge knit",
      "Cropped, slim fit",
      "Made in Austria",
    ],
    care: CARE_WOOL,
    location: "Arlberg, Austria",
    hardware: "fine-gauge ribbed rollneck collar",
    modelWorn: "female model in her twenties, natural European casting",
    scene: "walking along a mountain ridge path in soft morning light",
  },
  {
    slug: "engadin-cashmere-pant",
    name: "The Engadin Cashmere Pant",
    gender: "women",
    category: "Trousers",
    collections: ["cashmere"],
    silhouette: "trouser",
    price: 790,
    rating: 4.7,
    reviewCount: 18,
    colors: [OATMEAL, STONE, ESPRESSO],
    sizes: CLOTHING_SIZES_W,
    materials: ["95% cashmere, 5% elastane"],
    description:
      "A slim, tapered trouser knit from a cashmere-elastane blend, offering the ease of a knit with the line of tailoring.",
    details: [
      "95% cashmere, 5% elastane",
      "Slim, tapered fit",
      "Elasticated waistband",
      "Made in Italy",
    ],
    care: CARE_STANDARD,
    location: "Engadin Valley, Switzerland",
    hardware: "elasticated knit waistband and tapered ankle hem",
    modelWorn: "female model in her thirties, natural European casting",
    scene: "seated on a stone wall overlooking the Engadin valley",
  },
  {
    slug: "alpine-shearling-gilet",
    name: "The Alpine Shearling Gilet",
    gender: "women",
    category: "Outerwear",
    collections: ["outerwear"],
    silhouette: "gilet",
    price: 1290,
    rating: 4.7,
    reviewCount: 14,
    colors: [IVORY, OATMEAL, TAUPE],
    sizes: CLOTHING_SIZES_W,
    materials: ["Shearling (sheepskin)"],
    description:
      "A cropped shearling gilet, worn open over knitwear or belted at the waist — dense natural warmth for the coldest terrace mornings.",
    details: [
      "Genuine shearling, wool-side in",
      "Cropped, relaxed fit",
      "Open front, no closure",
      "Made in Italy",
    ],
    care: CARE_SHEARLING,
    location: "Zermatt, Switzerland",
    hardware: "raw shearling edge finish and interior leather MONTREVE tag",
    modelWorn: "female model in her twenties, natural European casting",
    scene: "standing at a wooden chalet doorway with snow falling softly",
  },

  // ---------------- MEN ----------------
  {
    slug: "valais-cashmere-rollneck",
    name: "The Valais Cashmere Rollneck",
    gender: "men",
    category: "Cashmere",
    collections: ["cashmere", "new-arrivals"],
    silhouette: "rollneck",
    price: 550,
    isNew: true,
    rating: 4.8,
    reviewCount: 26,
    colors: [OATMEAL, STONE, ESPRESSO, BLACK],
    sizes: CLOTHING_SIZES_M,
    materials: ["100% cashmere"],
    description:
      "A substantial rollneck in pure cashmere, knitted with a mid-weight hand for warmth that never feels heavy.",
    details: [
      "100% pure cashmere",
      "Made in Italy",
      "Regular fit",
      "Ribbed rollneck, cuffs and hem",
    ],
    care: CARE_STANDARD,
    location: "Val de Bagnes, Switzerland",
    hardware: "ribbed rollneck collar and woven interior MONTREVE label",
    modelWorn: "male model in his thirties, natural European casting",
    scene: "standing on a chalet balcony looking out at the mountains",
  },
  {
    slug: "st-moritz-overcoat",
    name: "The St. Moritz Overcoat",
    gender: "men",
    category: "Coats & Jackets",
    collections: ["outerwear", "new-arrivals"],
    silhouette: "coat",
    price: 1990,
    isNew: true,
    rating: 4.9,
    reviewCount: 31,
    colors: [STONE, TAUPE, ESPRESSO, CHARCOAL],
    sizes: CLOTHING_SIZES_M,
    materials: ["90% wool, 10% cashmere"],
    description:
      "A single-breasted overcoat in a wool-cashmere blend, cut with a clean line and set-in sleeve for a considered silhouette.",
    details: [
      "90% wool, 10% cashmere",
      "Single-breasted, horn buttons",
      "Tailored fit",
      "Notch lapel",
      "Made in Italy",
    ],
    care: CARE_WOOL,
    location: "St. Moritz, Switzerland",
    hardware: "horn button placket and notch lapel stitching",
    modelWorn: "male model in his thirties, natural European casting",
    scene: "walking along a snow-dusted lakeside promenade",
  },
  {
    slug: "courchevel-ski-jacket",
    name: "The Courchevel Ski Jacket",
    gender: "men",
    category: "Ski & Alpine",
    collections: ["ski", "outerwear", "new-arrivals"],
    silhouette: "ski-jacket",
    price: 1750,
    isNew: true,
    rating: 4.7,
    reviewCount: 23,
    colors: [SNOW, STONE, ESPRESSO],
    sizes: CLOTHING_SIZES_M,
    materials: ["Technical wool-blend shell", "Merino wool lining"],
    description:
      "A technical ski jacket in a brushed wool-blend shell with a merino lining, built for the mountain without looking like it.",
    details: [
      "Technical wool-blend outer shell",
      "Merino wool lining",
      "Water-resistant finish",
      "Zip and popper front closure",
      "Interior powder skirt",
    ],
    care: CARE_TECHNICAL,
    location: "Courchevel 1850, France",
    hardware: "matte zip pull with engraved M and popper storm flap",
    modelWorn: "male model in his thirties, natural European casting",
    scene: "standing on a quiet ski slope with goggles resting on his beanie",
  },
  {
    slug: "gstaad-cashmere-crewneck",
    name: "The Gstaad Cashmere Polo",
    gender: "men",
    category: "Cashmere",
    collections: ["cashmere"],
    silhouette: "knit",
    price: 520,
    rating: 4.7,
    reviewCount: 29,
    colors: [IVORY, OATMEAL, STONE, BLACK],
    sizes: CLOTHING_SIZES_M,
    materials: ["100% cashmere"],
    description:
      "A knitted polo in pure cashmere with a soft collar and horn button placket — a considered layer between a t-shirt and a sweater.",
    details: [
      "100% pure cashmere",
      "Made in Italy",
      "Regular fit",
      "Ribbed collar, cuffs and hem",
      "Horn button placket",
    ],
    care: CARE_STANDARD,
    location: "Gstaad, Switzerland",
    hardware: "horn button placket and woven interior MONTREVE label",
    modelWorn: "male model in his twenties, natural European casting",
    scene: "seated at a mountain restaurant terrace table with a coffee",
  },
  {
    slug: "verbier-wool-trouser",
    name: "The Verbier Wool Trouser",
    gender: "men",
    category: "Trousers",
    collections: [],
    silhouette: "trouser",
    price: 650,
    rating: 4.6,
    reviewCount: 16,
    colors: [OATMEAL, STONE, ESPRESSO, CHARCOAL],
    sizes: CLOTHING_SIZES_M,
    materials: ["Brushed wool"],
    description:
      "A tailored straight-leg trouser in brushed wool with a clean waistband — the everyday counterpart to the St. Moritz Overcoat.",
    details: [
      "Brushed wool",
      "Straight leg, tailored fit",
      "Concealed hook-and-bar waistband",
      "Made in Italy",
    ],
    care: CARE_WOOL,
    location: "Verbier, Switzerland",
    hardware: "concealed hook-and-bar waistband closure",
    modelWorn: "male model in his thirties, natural European casting",
    scene: "walking through a quiet alpine village street",
  },
  {
    slug: "engadin-field-jacket",
    name: "The Engadin Field Jacket",
    gender: "men",
    category: "Outerwear",
    collections: ["outerwear"],
    silhouette: "jacket",
    price: 990,
    rating: 4.6,
    reviewCount: 13,
    colors: [OATMEAL, STONE, ESPRESSO],
    sizes: CLOTHING_SIZES_M,
    materials: ["Waxed wool-cotton blend"],
    description:
      "A field jacket in a waxed wool-cotton blend with four patch pockets — a rugged, considered layer for the mountain village.",
    details: [
      "Waxed wool-cotton blend",
      "Regular fit",
      "Four patch pockets",
      "Corduroy under-collar",
      "Made in Italy",
    ],
    care: CARE_WOOL,
    location: "Engadin Valley, Switzerland",
    hardware: "corozo button front and patch pocket stitching",
    modelWorn: "male model in his thirties, natural European casting",
    scene: "walking through a mountain village with wooden chalets behind him",
  },
  {
    slug: "savoie-cashmere-zip",
    name: "The Savoie Cashmere Zip",
    gender: "men",
    category: "Cashmere",
    collections: ["cashmere"],
    silhouette: "cardigan",
    price: 690,
    rating: 4.7,
    reviewCount: 21,
    colors: [OATMEAL, STONE, ESPRESSO],
    sizes: CLOTHING_SIZES_M,
    materials: ["100% cashmere"],
    description:
      "A full-zip cashmere knit with a stand collar, designed to layer cleanly beneath a shell or worn alone on milder days.",
    details: [
      "100% pure cashmere",
      "Regular fit",
      "Full-length zip",
      "Stand collar",
      "Made in Italy",
    ],
    care: CARE_STANDARD,
    location: "Savoie, France",
    hardware: "matte metal zip pull engraved with a small M",
    modelWorn: "male model in his twenties, natural European casting",
    scene: "standing at the entrance of a mountain restaurant terrace",
  },
  {
    slug: "alpine-down-jacket",
    name: "The Alpine Down Jacket",
    gender: "men",
    category: "Outerwear",
    collections: ["outerwear", "ski", "new-arrivals"],
    silhouette: "down-jacket",
    price: 1390,
    isNew: true,
    rating: 4.7,
    reviewCount: 18,
    colors: [SNOW, STONE, ESPRESSO, BLACK],
    sizes: CLOTHING_SIZES_M,
    materials: ["Responsibly-sourced down fill", "Technical matte shell"],
    description:
      "A channel-quilted down jacket in a matte technical shell, built for serious cold without sacrificing a clean silhouette.",
    details: [
      "Responsibly-sourced down fill",
      "Matte technical shell",
      "Channel quilting",
      "Two-way front zip",
      "Zipped side pockets",
    ],
    care: CARE_TECHNICAL,
    location: "Chamonix-Mont-Blanc, France",
    hardware: "two-way front zip with leather pull tab",
    modelWorn: "male model in his thirties, natural European casting",
    scene: "standing on a snow-covered balcony overlooking Mont Blanc",
  },
  {
    slug: "chamonix-wool-blazer",
    name: "The Chamonix Wool Blazer",
    gender: "men",
    category: "Coats & Jackets",
    collections: [],
    silhouette: "blazer",
    price: 1190,
    rating: 4.7,
    reviewCount: 11,
    colors: [STONE, TAUPE, ESPRESSO],
    sizes: CLOTHING_SIZES_M,
    materials: ["100% wool flannel"],
    description:
      "An unstructured wool flannel blazer, soft-shouldered and half-lined for a relaxed drape suited to the chalet dining room.",
    details: [
      "100% wool flannel",
      "Unstructured, soft shoulder",
      "Half-lined",
      "Notch lapel",
      "Made in Italy",
    ],
    care: CARE_WOOL,
    location: "Chamonix, France",
    hardware: "horn buttons and hand-finished lapel stitching",
    modelWorn: "male model in his thirties, natural European casting",
    scene: "standing beside a fireplace in a wood-panelled chalet interior",
  },
  {
    slug: "mont-blanc-ski-trouser",
    name: "The Mont Blanc Ski Trouser",
    gender: "men",
    category: "Ski & Alpine",
    collections: ["ski"],
    silhouette: "trouser",
    price: 890,
    rating: 4.6,
    reviewCount: 14,
    colors: [SNOW, STONE, BLACK],
    sizes: CLOTHING_SIZES_M,
    materials: ["Technical stretch shell"],
    description:
      "A straight-leg technical ski trouser with a reinforced hem and articulated knee, built for a full day on the mountain.",
    details: [
      "Technical stretch shell",
      "Straight leg, regular fit",
      "Articulated knee",
      "Reinforced hem",
      "Side zip pockets",
    ],
    care: CARE_TECHNICAL,
    location: "Chamonix-Mont-Blanc, France",
    hardware: "side-seam zip pocket and reinforced hem stitching",
    modelWorn: "male model in his twenties, natural European casting",
    scene: "walking across a sunlit mountain plateau with skis over one shoulder",
  },
  {
    slug: "glacier-cashmere-hoodie",
    name: "The Glacier Cashmere Hoodie",
    gender: "men",
    category: "Cashmere",
    collections: ["cashmere", "new-arrivals"],
    silhouette: "hoodie",
    price: 750,
    isNew: true,
    rating: 4.8,
    reviewCount: 17,
    colors: [OATMEAL, STONE, ESPRESSO],
    sizes: CLOTHING_SIZES_M,
    materials: ["95% cashmere, 5% wool"],
    description:
      "A cashmere-wool hoodie that reworks off-duty ease in a quiet luxury material — a lined hood and kangaroo pocket in a mid-weight knit.",
    details: [
      "95% cashmere, 5% wool",
      "Regular fit",
      "Lined hood",
      "Kangaroo pocket",
      "Made in Italy",
    ],
    care: CARE_STANDARD,
    location: "Zermatt, Switzerland",
    hardware: "flat drawcord and ribbed kangaroo pocket stitching",
    modelWorn: "male model in his twenties, natural European casting",
    scene: "walking through a quiet snow-covered pine forest",
  },
  {
    slug: "meribel-overshirt",
    name: "The Méribel Overshirt",
    gender: "men",
    category: "Outerwear",
    collections: [],
    silhouette: "overshirt",
    price: 490,
    rating: 4.6,
    reviewCount: 9,
    colors: [OATMEAL, STONE, ESPRESSO],
    sizes: CLOTHING_SIZES_M,
    materials: ["Brushed wool-cotton blend"],
    description:
      "A brushed wool-cotton overshirt cut for layering — a considered mid-layer between knitwear and outerwear.",
    details: [
      "Brushed wool-cotton blend",
      "Regular fit",
      "Chest patch pockets",
      "Corozo button front",
      "Made in Portugal",
    ],
    care: CARE_WOOL,
    location: "Méribel, France",
    hardware: "corozo button front and chest patch pocket stitching",
    modelWorn: "male model in his thirties, natural European casting",
    scene: "standing at a wooden chalet doorway with snow falling softly",
  },

  // ---------------- ACCESSORIES ----------------
  {
    slug: "alpine-cashmere-scarf",
    name: "The Alpine Cashmere Scarf",
    gender: "accessories",
    category: "Scarves",
    collections: ["cashmere", "new-arrivals"],
    silhouette: "scarf",
    price: 220,
    isNew: true,
    rating: 4.9,
    reviewCount: 37,
    colors: [IVORY, OATMEAL, TAUPE, ESPRESSO],
    sizes: ONE_SIZE,
    materials: ["100% cashmere"],
    description:
      "A generously sized cashmere scarf with a fine fringed edge, woven with enough weight to wrap twice against the cold.",
    details: [
      "100% pure cashmere",
      "180 x 45cm",
      "Fringed edge",
      "Made in Italy",
    ],
    care: CARE_STANDARD,
    location: "Megève, France",
    hardware: "hand-finished fringed edge and woven MONTREVE tab",
    modelWorn: "female model in her twenties, natural European casting",
    scene: "seated on a sunlit chalet terrace with a coffee, mountains behind her",
  },
  {
    slug: "st-moritz-cashmere-beanie",
    name: "The St. Moritz Cashmere Beanie",
    gender: "accessories",
    category: "Beanies",
    collections: ["cashmere"],
    silhouette: "beanie",
    price: 180,
    rating: 4.8,
    reviewCount: 44,
    colors: [IVORY, OATMEAL, ESPRESSO, BLACK],
    sizes: ONE_SIZE,
    materials: ["100% cashmere"],
    description:
      "A ribbed cashmere beanie with a folded cuff, finished with a small leather MONTREVE patch — the everyday companion to any coat.",
    details: [
      "100% pure cashmere",
      "Ribbed knit",
      "Folded cuff",
      "Made in Scotland",
    ],
    care: CARE_STANDARD,
    location: "St. Moritz, Switzerland",
    hardware: "leather MONTREVE patch and folded rib cuff",
    modelWorn: "female model in her twenties, natural European casting",
    scene: "walking along a frozen lakeside path in soft winter light",
  },
  {
    slug: "courchevel-leather-glove",
    name: "The Courchevel Leather Glove",
    gender: "accessories",
    category: "Gloves",
    collections: [],
    silhouette: "glove",
    price: 290,
    rating: 4.7,
    reviewCount: 19,
    colors: [TAUPE, ESPRESSO, BLACK],
    sizes: GLOVE_SIZES,
    materials: ["Nappa leather", "Cashmere lining"],
    description:
      "A slim nappa leather glove lined in cashmere, cut close to the hand with a fine top-stitch along each finger.",
    details: [
      "Nappa leather",
      "100% cashmere lining",
      "Fine top-stitching",
      "Made in Italy",
    ],
    care: CARE_LEATHER,
    location: "Courchevel 1850, France",
    hardware: "fine top-stitching along each finger seam",
    modelWorn: "male model in his thirties, natural European casting",
    scene: "standing at the entrance of a mountain restaurant terrace",
  },
  {
    slug: "gstaad-suede-glove",
    name: "The Gstaad Suede Glove",
    gender: "accessories",
    category: "Gloves",
    collections: [],
    silhouette: "glove",
    price: 320,
    rating: 4.6,
    reviewCount: 8,
    colors: [OATMEAL, TAUPE, ESPRESSO],
    sizes: GLOVE_SIZES,
    materials: ["Suede", "Shearling lining"],
    description:
      "A shearling-lined suede glove with a soft, matte hand — cut generously for warmth on the coldest chairlift mornings.",
    details: [
      "Suede",
      "Shearling lining",
      "Snap wrist closure",
      "Made in Italy",
    ],
    care: CARE_LEATHER,
    location: "Gstaad, Switzerland",
    hardware: "snap wrist closure with matte metal popper",
    modelWorn: "female model in her twenties, natural European casting",
    scene: "standing at the top of a quiet ski slope, skis in hand",
  },
  {
    slug: "megeve-winter-boot",
    name: "The Megève Winter Boot",
    gender: "accessories",
    category: "Boots",
    collections: ["new-arrivals"],
    silhouette: "boot",
    price: 590,
    isNew: true,
    rating: 4.8,
    reviewCount: 27,
    colors: [OATMEAL, TAUPE, BLACK],
    sizes: BOOT_SIZES_W,
    materials: ["Suede upper", "Shearling lining", "Rubber sole"],
    description:
      "A shearling-lined suede winter boot on a grippy rubber sole, laced with a woven cord for a soft, considered finish.",
    details: [
      "Suede upper",
      "Shearling lining",
      "Rubber outsole",
      "Woven lace closure",
      "Made in Italy",
    ],
    care: CARE_LEATHER,
    location: "Megève, France",
    hardware: "woven lace closure and stitched rubber outsole",
    modelWorn: "female model in her twenties, natural European casting",
    scene: "walking through fresh snow outside a wooden chalet",
  },
  {
    slug: "verbier-alpine-boot",
    name: "The Verbier Alpine Boot",
    gender: "accessories",
    category: "Boots",
    collections: [],
    silhouette: "boot",
    price: 650,
    rating: 4.7,
    reviewCount: 12,
    colors: [STONE, ESPRESSO, BLACK],
    sizes: BOOT_SIZES_M,
    materials: ["Waterproof suede", "Technical sole"],
    description:
      "A waterproof suede alpine boot on a technical lugged sole, built for the walk from the chalet to the piste and back.",
    details: [
      "Waterproof-treated suede",
      "Technical lugged sole",
      "Lace closure",
      "Made in Italy",
    ],
    care: CARE_LEATHER,
    location: "Verbier, Switzerland",
    hardware: "lugged technical outsole and reinforced toe cap stitching",
    modelWorn: "male model in his thirties, natural European casting",
    scene: "walking across a sunlit mountain plateau",
  },
  {
    slug: "montreux-cashmere-cap",
    name: "The Montreux Cashmere Cap",
    gender: "accessories",
    category: "Beanies",
    collections: [],
    silhouette: "cap",
    price: 190,
    rating: 4.5,
    reviewCount: 7,
    colors: [OATMEAL, ESPRESSO, BLACK],
    sizes: ONE_SIZE,
    materials: ["100% cashmere", "Leather brim"],
    description:
      "A soft cashmere flat cap with a fine leather brim — a quiet alternative to the beanie for milder alpine mornings.",
    details: [
      "100% pure cashmere",
      "Leather brim",
      "Adjustable interior band",
      "Made in Scotland",
    ],
    care: CARE_STANDARD,
    location: "Montreux, Switzerland",
    hardware: "leather brim edge and adjustable interior band",
    modelWorn: "male model in his twenties, natural European casting",
    scene: "walking along a mountain ridge path in soft morning light",
  },
  {
    slug: "engadin-weekender",
    name: "The Engadin Weekender",
    gender: "accessories",
    category: "Bags",
    collections: ["new-arrivals"],
    silhouette: "bag",
    price: 1200,
    isNew: true,
    rating: 4.8,
    reviewCount: 15,
    colors: [OATMEAL, TAUPE, ESPRESSO],
    sizes: ONE_SIZE,
    materials: ["Full-grain leather", "Waxed canvas"],
    description:
      "A structured weekender in waxed canvas and full-grain leather trim, sized for a long weekend at altitude.",
    details: [
      "Waxed canvas body",
      "Full-grain leather trim and handles",
      "Brass hardware",
      "Cotton twill lining",
      "Made in Italy",
    ],
    care: [
      "Wipe clean with a soft, dry cloth.",
      "Treat leather trim with a protector periodically.",
      "Store unstuffed in the supplied dust bag.",
    ],
    location: "St. Moritz, Switzerland",
    hardware: "brass buckles and riveted leather handle attachment",
    modelWorn: "male model in his thirties, natural European casting",
    scene: "standing on a train platform in the Engadin valley, weekender in hand",
  },
];

function toRaw(d: Def, index: number): RawProduct {
  return {
    id: String(index + 1),
    slug: d.slug,
    name: d.name,
    gender: d.gender,
    category: d.category,
    collections: d.collections,
    silhouette: d.silhouette,
    price: d.price,
    isNew: d.isNew,
    rating: d.rating,
    reviewCount: d.reviewCount,
    colors: d.colors,
    sizes: d.sizes,
    materials: d.materials,
    description: d.description,
    details: d.details,
    care: d.care,
    location: d.location,
    images: buildImages({
      productName: d.name,
      colorName: d.colors[0].name,
      material: d.materials[0],
      hardware: d.hardware,
      location: d.location,
      modelWorn: d.modelWorn,
      scene: d.scene,
    }),
  };
}

const rawProducts: RawProduct[] = defs.map(toRaw);

function pickRelated(product: RawProduct, all: RawProduct[]): string[] {
  const pool = all.filter(
    (p) =>
      p.slug !== product.slug &&
      (p.gender === product.gender || p.gender === "accessories" || product.gender === "accessories")
  );
  const differentCategory = pool.filter((p) => p.category !== product.category);
  const chosen: RawProduct[] = [];
  const base = differentCategory.length >= 4 ? differentCategory : pool;
  const startIndex = parseInt(product.id, 10);
  for (let i = 0; i < base.length && chosen.length < 4; i++) {
    const candidate = base[(startIndex + i * 3) % base.length];
    if (!chosen.find((c) => c.slug === candidate.slug)) chosen.push(candidate);
  }
  return chosen.map((c) => c.slug);
}

const TOP_CATEGORIES = ["Cashmere", "Knitwear"];
const BOTTOM_CATEGORIES = ["Trousers"];
const OUTER_CATEGORIES = ["Coats & Jackets", "Outerwear", "Ski & Alpine"];

function pickCompleteTheLook(product: RawProduct, all: RawProduct[]): string[] {
  if (product.gender === "accessories") {
    const clothing = all.filter((p) => p.gender !== "accessories");
    const startIndex = parseInt(product.id, 10);
    const picks: RawProduct[] = [];
    for (let i = 0; i < clothing.length && picks.length < 4; i++) {
      const candidate = clothing[(startIndex + i * 5) % clothing.length];
      if (!picks.find((c) => c.slug === candidate.slug)) picks.push(candidate);
    }
    return picks.map((p) => p.slug);
  }

  const sameGender = all.filter((p) => p.gender === product.gender && p.slug !== product.slug);
  const accessories = all.filter((p) => p.gender === "accessories");
  const isTop = TOP_CATEGORIES.includes(product.category);
  const isBottom = BOTTOM_CATEGORIES.includes(product.category);

  const look: RawProduct[] = [];
  const top = sameGender.find((p) => TOP_CATEGORIES.includes(p.category) && p.slug !== product.slug);
  const bottom = sameGender.find((p) => BOTTOM_CATEGORIES.includes(p.category));
  const outer = sameGender.find((p) => OUTER_CATEGORIES.includes(p.category) && p.category !== product.category);
  const scarf = accessories.find((p) => p.category === "Scarves");
  const boot = accessories.find((p) => p.category === "Boots" || p.category === "Bags");

  if (!isTop && top) look.push(top);
  if (!isBottom && bottom) look.push(bottom);
  if (outer && look.length < 3) look.push(outer);
  if (scarf) look.push(scarf);
  if (boot && look.length < 4) look.push(boot);

  const startIndex = parseInt(product.id, 10);
  let i = 0;
  while (look.length < 4 && i < sameGender.length) {
    const candidate = sameGender[(startIndex + i * 7) % sameGender.length];
    if (!look.find((c) => c.slug === candidate.slug)) look.push(candidate);
    i++;
  }

  return look.slice(0, 4).map((p) => p.slug);
}

export const PRODUCTS: Product[] = rawProducts.map((p) => ({
  ...p,
  relatedSlugs: pickRelated(p, rawProducts),
  completeTheLookSlugs: pickCompleteTheLook(p, rawProducts),
}));

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsBySlugs(slugs: string[]): Product[] {
  return slugs
    .map((slug) => getProductBySlug(slug))
    .filter((p): p is Product => Boolean(p));
}

export function getProductsByGender(gender: Gender): Product[] {
  return PRODUCTS.filter((p) => p.gender === gender);
}

export function getProductsByCollection(collection: string): Product[] {
  return PRODUCTS.filter((p) => p.collections.includes(collection));
}

export const ALL_CATEGORIES = Array.from(new Set(PRODUCTS.map((p) => p.category))).sort();
export const ALL_MATERIALS = Array.from(
  new Set(PRODUCTS.flatMap((p) => p.materials))
).sort();
