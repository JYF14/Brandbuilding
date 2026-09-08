"use client";

const CLOTHING_ROWS = [
  { size: "XS", chest: "82–86", waist: "62–66" },
  { size: "S", chest: "87–91", waist: "67–71" },
  { size: "M", chest: "92–97", waist: "72–77" },
  { size: "L", chest: "98–104", waist: "78–84" },
  { size: "XL", chest: "105–111", waist: "85–91" },
  { size: "XXL", chest: "112–118", waist: "92–98" },
];

const GLOVE_ROWS = [
  { size: "S", hand: "17–19" },
  { size: "M", hand: "19–21" },
  { size: "L", hand: "21–23" },
];

const BOOT_ROWS = [
  { eu: "36", uk: "3", us: "5.5" },
  { eu: "37", uk: "4", us: "6.5" },
  { eu: "38", uk: "5", us: "7.5" },
  { eu: "39", uk: "6", us: "8.5" },
  { eu: "40", uk: "6.5", us: "9" },
  { eu: "41", uk: "7", us: "9.5" },
  { eu: "42", uk: "8", us: "10.5" },
  { eu: "43", uk: "9", us: "11.5" },
  { eu: "44", uk: "9.5", us: "12" },
  { eu: "45", uk: "10.5", us: "13" },
];

function kindFor(sizes: string[]): "clothing" | "boots" | "gloves" | "one-size" {
  if (sizes.length === 1 && sizes[0] === "One Size") return "one-size";
  if (sizes.every((s) => /^\d+$/.test(s))) return "boots";
  if (sizes.length <= 3 && sizes.every((s) => ["S", "M", "L"].includes(s))) return "gloves";
  return "clothing";
}

export default function SizeGuideModal({
  open,
  onClose,
  sizes,
}: {
  open: boolean;
  onClose: () => void;
  sizes: string[];
}) {
  if (!open) return null;
  const kind = kindFor(sizes);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-espresso/50 px-4" onClick={onClose}>
      <div
        className="max-h-[85vh] w-full max-w-lg overflow-y-auto bg-snow p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex items-center justify-between">
          <h3 className="font-serif text-2xl">Size Guide</h3>
          <button aria-label="Close" onClick={onClose} className="text-xl leading-none">
            &times;
          </button>
        </div>

        {kind === "clothing" && (
          <table className="w-full text-left text-[13px]">
            <thead>
              <tr className="border-b border-stone/30 text-[11px] uppercase tracking-luxury text-taupe">
                <th className="py-2">Size</th>
                <th className="py-2">Chest (cm)</th>
                <th className="py-2">Waist (cm)</th>
              </tr>
            </thead>
            <tbody>
              {CLOTHING_ROWS.filter((r) => sizes.includes(r.size)).map((r) => (
                <tr key={r.size} className="border-b border-stone/15">
                  <td className="py-2.5">{r.size}</td>
                  <td className="py-2.5">{r.chest}</td>
                  <td className="py-2.5">{r.waist}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {kind === "boots" && (
          <table className="w-full text-left text-[13px]">
            <thead>
              <tr className="border-b border-stone/30 text-[11px] uppercase tracking-luxury text-taupe">
                <th className="py-2">EU</th>
                <th className="py-2">UK</th>
                <th className="py-2">US</th>
              </tr>
            </thead>
            <tbody>
              {BOOT_ROWS.filter((r) => sizes.includes(r.eu)).map((r) => (
                <tr key={r.eu} className="border-b border-stone/15">
                  <td className="py-2.5">{r.eu}</td>
                  <td className="py-2.5">{r.uk}</td>
                  <td className="py-2.5">{r.us}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {kind === "gloves" && (
          <table className="w-full text-left text-[13px]">
            <thead>
              <tr className="border-b border-stone/30 text-[11px] uppercase tracking-luxury text-taupe">
                <th className="py-2">Size</th>
                <th className="py-2">Hand circumference (cm)</th>
              </tr>
            </thead>
            <tbody>
              {GLOVE_ROWS.map((r) => (
                <tr key={r.size} className="border-b border-stone/15">
                  <td className="py-2.5">{r.size}</td>
                  <td className="py-2.5">{r.hand}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {kind === "one-size" && (
          <p className="text-[13px] text-espresso/70">
            This piece is designed to fit most. See the product description for exact
            dimensions.
          </p>
        )}

        <p className="mt-6 text-[12px] text-espresso/50">
          Measurements are approximate. For an in-between size, we recommend sizing up for a
          relaxed fit.
        </p>
      </div>
    </div>
  );
}
