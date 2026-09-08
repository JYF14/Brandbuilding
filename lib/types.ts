export type Gender = "women" | "men" | "accessories";

export type ShotType =
  | "front"
  | "back"
  | "material"
  | "hardware"
  | "worn"
  | "lifestyle";

export type Silhouette =
  | "coat"
  | "shearling-coat"
  | "gilet"
  | "jacket"
  | "ski-jacket"
  | "down-jacket"
  | "knit"
  | "rollneck"
  | "cardigan"
  | "hoodie"
  | "blazer"
  | "overshirt"
  | "trouser"
  | "scarf"
  | "beanie"
  | "cap"
  | "glove"
  | "boot"
  | "bag";

export interface ProductColor {
  name: string;
  hex: string;
}

export interface ProductImage {
  shot: ShotType;
  alt: string;
  prompt: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  gender: Gender;
  category: string;
  collections: string[];
  silhouette: Silhouette;
  price: number;
  compareAtPrice?: number;
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
  images: ProductImage[];
  relatedSlugs: string[];
  completeTheLookSlugs: string[];
}
