import { ShotType } from "./types";

export function slugifyColor(colorName: string): string {
  return colorName
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Convention-based path for a real product photo. Drop a file at this exact
 * path under /public and it is picked up automatically — no code changes
 * needed. Until the file exists, components fall back to the ArtPlate SVG
 * placeholder. See IMAGE_MANIFEST.md for the full list of expected paths.
 */
export function productImagePath(
  slug: string,
  shot: ShotType,
  colorName: string
): string {
  return `/products/${slug}/${shot}--${slugifyColor(colorName)}.jpg`;
}
