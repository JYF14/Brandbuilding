export interface MegaMenuColumn {
  heading: string;
  links: { label: string; href: string }[];
}

export interface MegaMenuData {
  label: string;
  href: string;
  featured: { label: string; href: string };
  columns: MegaMenuColumn[];
}

export const WOMEN_MENU: MegaMenuData = {
  label: "Women",
  href: "/women",
  featured: { label: "New Arrivals", href: "/new-arrivals?gender=women" },
  columns: [
    {
      heading: "Clothing",
      links: [
        { label: "Coats & Jackets", href: "/outerwear?gender=women" },
        { label: "Cashmere", href: "/cashmere?gender=women" },
        { label: "Knitwear", href: "/women?category=Knitwear" },
        { label: "Trousers", href: "/women?category=Trousers" },
        { label: "Ski & Alpine", href: "/ski?gender=women" },
        { label: "Outerwear", href: "/outerwear?gender=women" },
      ],
    },
    {
      heading: "Accessories",
      links: [
        { label: "Scarves", href: "/accessories?category=Scarves" },
        { label: "Beanies", href: "/accessories?category=Beanies" },
        { label: "Gloves", href: "/accessories?category=Gloves" },
        { label: "Boots", href: "/accessories?category=Boots" },
        { label: "Bags", href: "/accessories?category=Bags" },
      ],
    },
  ],
};

export const MEN_MENU: MegaMenuData = {
  label: "Men",
  href: "/men",
  featured: { label: "New Arrivals", href: "/new-arrivals?gender=men" },
  columns: [
    {
      heading: "Clothing",
      links: [
        { label: "Coats & Jackets", href: "/outerwear?gender=men" },
        { label: "Cashmere", href: "/cashmere?gender=men" },
        { label: "Knitwear", href: "/men?category=Knitwear" },
        { label: "Trousers", href: "/men?category=Trousers" },
        { label: "Ski & Alpine", href: "/ski?gender=men" },
        { label: "Outerwear", href: "/outerwear?gender=men" },
      ],
    },
    {
      heading: "Accessories",
      links: [
        { label: "Scarves", href: "/accessories?category=Scarves" },
        { label: "Beanies", href: "/accessories?category=Beanies" },
        { label: "Gloves", href: "/accessories?category=Gloves" },
        { label: "Boots", href: "/accessories?category=Boots" },
        { label: "Bags", href: "/accessories?category=Bags" },
      ],
    },
  ],
};

export const PRIMARY_NAV = [
  { label: "Women", href: "/women", mega: WOMEN_MENU },
  { label: "Men", href: "/men", mega: MEN_MENU },
  { label: "Collections", href: "/new-arrivals" },
  { label: "Alpine", href: "/ski" },
  { label: "Journal", href: "/journal" },
];

export const MATERIALS = [
  {
    name: "Cashmere",
    description:
      "Combed from the undercoat of high-altitude goats, spun into yarn of exceptional softness and warmth without weight.",
  },
  {
    name: "Merino Wool",
    description:
      "Fine, resilient fibres from alpine merino flocks, prized for natural insulation and a soft, breathable hand.",
  },
  {
    name: "Shearling",
    description:
      "Full-grain sheepskin tanned with the wool intact, offering dense natural warmth and a lived-in luxury texture.",
  },
  {
    name: "Brushed Wool",
    description:
      "Densely woven wool cloth raised to a soft, matte face — structured enough to hold a silhouette, soft enough to live in.",
  },
  {
    name: "Suede",
    description:
      "Napped lambskin leather, supple and matte, used sparingly for gloves and considered hardware.",
  },
];

export const ALPINE_STORIES = [
  {
    place: "St. Moritz",
    title: "The Art of Winter",
    href: "/journal",
  },
  {
    place: "Megève",
    title: "A Quiet Morning",
    href: "/journal",
  },
  {
    place: "Gstaad",
    title: "Above the Ordinary",
    href: "/journal",
  },
  {
    place: "Courchevel",
    title: "Winter at 1850",
    href: "/journal",
  },
];

export interface CollectionMeta {
  slug: string;
  title: string;
  kicker: string;
  intro: string;
}

export const COLLECTION_META: Record<string, CollectionMeta> = {
  women: {
    slug: "women",
    title: "Women",
    kicker: "Winter 01",
    intro: "Refined layers designed for life at altitude.",
  },
  men: {
    slug: "men",
    title: "Men",
    kicker: "Winter 01",
    intro: "Considered outerwear and knitwear built for higher places.",
  },
  "new-arrivals": {
    slug: "new-arrivals",
    title: "New Arrivals",
    kicker: "Winter 01",
    intro: "The latest from the MONTREVE atelier.",
  },
  cashmere: {
    slug: "cashmere",
    title: "Cashmere",
    kicker: "The Finest Materials",
    intro: "Exceptional fibres selected for warmth, softness and longevity.",
  },
  outerwear: {
    slug: "outerwear",
    title: "Outerwear",
    kicker: "Winter 01",
    intro: "Coats, jackets and shearling built for the mountain and the city.",
  },
  ski: {
    slug: "ski",
    title: "Alpine & Ski",
    kicker: "Alpine Essentials",
    intro: "Technical elegance for the slope and the terrace after.",
  },
  accessories: {
    slug: "accessories",
    title: "Accessories",
    kicker: "The Finishing Layer",
    intro: "Scarves, knitwear accessories, gloves and boots for higher places.",
  },
};
