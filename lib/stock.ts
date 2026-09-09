import { seededRng } from "./seeded-random";

export const LOW_STOCK_THRESHOLD = 3;

/**
 * Deterministic, per-product-per-size stock level. Seeded (not Math.random
 * or Date-based) so it's stable across server/client renders and reloads —
 * a genuine inventory signal within the fiction of the store, not a
 * fabricated "X people are viewing this" style dark pattern.
 */
export function getStock(productSlug: string, size: string): number {
  const rng = seededRng(`${productSlug}-${size}-stock-v1`);
  const roll = rng();
  if (roll < 0.08) return 0; // sold out
  if (roll < 0.24) return Math.floor(rng() * LOW_STOCK_THRESHOLD) + 1; // 1–3, low stock
  return Math.floor(rng() * 17) + 4; // 4–20, healthy — never surfaced in the UI
}

export function isLowStock(stock: number): boolean {
  return stock > 0 && stock <= LOW_STOCK_THRESHOLD;
}
