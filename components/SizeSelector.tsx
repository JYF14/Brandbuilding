export default function SizeSelector({
  sizes,
  selected,
  onSelect,
  onOpenGuide,
}: {
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
        {sizes.map((size) => (
          <button
            key={size}
            type="button"
            aria-pressed={selected === size}
            onClick={() => onSelect(size)}
            className={`min-w-[3rem] border px-3 py-2.5 text-[12px] tracking-wide transition-colors ${
              selected === size
                ? "border-espresso bg-espresso text-snow"
                : "border-stone/50 text-espresso hover:border-espresso"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
