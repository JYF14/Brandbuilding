export type EditorialKey =
  | "hero-main"
  | "home-women"
  | "home-men"
  | "editorial-courchevel"
  | "story-st-moritz"
  | "story-megeve"
  | "story-gstaad"
  | "story-courchevel"
  | "mega-women"
  | "mega-men";

/**
 * Convention-based path for a real editorial/lifestyle photo. Drop a file
 * at this exact path under /public and it is picked up automatically — no
 * code changes needed. Falls back to the generated SceneArt placeholder
 * until the file exists. Mirrors lib/image-path.ts for products.
 */
export function editorialImagePath(key: EditorialKey): string {
  return `/editorial/${key}.jpg`;
}

export function placeToEditorialKey(
  place: "St. Moritz" | "Megève" | "Gstaad" | "Courchevel"
): EditorialKey {
  switch (place) {
    case "St. Moritz":
      return "story-st-moritz";
    case "Megève":
      return "story-megeve";
    case "Gstaad":
      return "story-gstaad";
    case "Courchevel":
      return "story-courchevel";
  }
}
