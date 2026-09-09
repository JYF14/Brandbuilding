import { getStock, isLowStock } from "@/lib/stock";

export default function SizeSelector({
  productSlug,
  sizes,
  selected,
  onSelect,
  onOpenGuide,
}: {
  productSlug: string;
  sizes: string[];
  selected: string | null;
  onSelect: (size: string) => void;
  onOpenGuide: () => void;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-[11px] uppercase tracking-luxury text-espresso/60">Select Size</p>
        {sizes.length > 1 && (
          <button
            onClick={onOpenGuide}
            className="text-[11px] uppercase tracking-luxury text-espresso/60 underline underline-offset-4"
          >
            Size Guide
          </button>
        )}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {sizes.map((size) => {
          const stock = getStock(productSlug, size);
          const soldOut = stock === 0;
          const low = isLowStock(stock);
          return (
            <button
              key={size}
              type="button"
              disabled={soldOut}
              aria-pressed={selected === size}
              title={soldOut ? "Sold out" : low ? `Only ${stock} left` : undefined}
              onClick={() => onSelect(size)}
              className={`relative min-w-[3rem] border px-3 py-2.5 text-[12px] tracking-wide transition-colors ${
                soldOut
                  ? "cursor-not-allowed border-stone/25 text-espresso/30 line-through"
                  : selected === size
                    ? "border-espresso bg-espresso text-snow"
                    : "border-stone/50 text-espresso hover:border-espresso"
              }`}
            >
              {size}
              {low && !soldOut && (
                <span className="absolute -right-1 -top-1 h-1.5 w-1.5 rounded-full bg-taupe" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
