import { ProductColor } from "@/lib/types";

export default function ColorSelector({
  colors,
  selected,
  onSelect,
}: {
  colors: ProductColor[];
  selected: ProductColor;
  onSelect: (color: ProductColor) => void;
}) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-luxury text-espresso/60">
        Colour: <span className="text-espresso">{selected.name}</span>
      </p>
      <div className="mt-3 flex flex-wrap gap-2.5">
        {colors.map((color) => (
          <button
            key={color.name}
            type="button"
            title={color.name}
            aria-label={color.name}
            aria-pressed={selected.name === color.name}
            onClick={() => onSelect(color)}
            className={`h-8 w-8 rounded-full border transition-shadow ${
              selected.name === color.name
                ? "ring-1 ring-espresso ring-offset-2 ring-offset-snow"
                : "border-stone/50"
            }`}
            style={{ backgroundColor: color.hex }}
          />
        ))}
      </div>
    </div>
  );
}
