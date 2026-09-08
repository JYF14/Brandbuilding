"use client";

import { useMemo, useState } from "react";
import { Product } from "@/lib/types";
import { CollectionMeta } from "@/lib/collections";
import ProductGrid from "./ProductGrid";

type SortKey = "featured" | "newest" | "price-asc" | "price-desc";

const PRICE_BUCKETS = [
  { label: "Under €500", test: (p: number) => p < 500 },
  { label: "€500 – €1,000", test: (p: number) => p >= 500 && p < 1000 },
  { label: "€1,000 – €2,000", test: (p: number) => p >= 1000 && p < 2000 },
  { label: "€2,000+", test: (p: number) => p >= 2000 },
];

function FilterDropdown({
  label,
  open,
  onToggle,
  count,
  children,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  count: number;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className={`flex items-center gap-1.5 border-b pb-1 text-[11px] uppercase tracking-luxury transition-colors ${
          open || count > 0 ? "border-espresso text-espresso" : "border-transparent text-espresso/70"
        }`}
      >
        {label}
        {count > 0 && <span className="text-taupe">({count})</span>}
      </button>
      {open && (
        <div className="absolute left-0 top-full z-20 mt-3 min-w-[220px] border border-stone/30 bg-snow p-5 shadow-lg">
          {children}
        </div>
      )}
    </div>
  );
}

function CheckRow({
  label,
  checked,
  onChange,
  swatch,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
  swatch?: string;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 py-1.5 text-[13px] text-espresso/85">
      <input type="checkbox" checked={checked} onChange={onChange} className="accent-espresso" />
      {swatch && (
        <span
          className="h-3 w-3 rounded-full border border-stone/40"
          style={{ backgroundColor: swatch }}
        />
      )}
      {label}
    </label>
  );
}

export default function PLPTemplate({
  meta,
  products,
}: {
  meta: CollectionMeta;
  products: Product[];
}) {
  const [openFilter, setOpenFilter] = useState<string | null>(null);
  const [sort, setSort] = useState<SortKey>("featured");
  const [columns, setColumns] = useState<2 | 3 | 4>(3);
  const [categories, setCategories] = useState<Set<string>>(new Set());
  const [sizes, setSizes] = useState<Set<string>>(new Set());
  const [colors, setColors] = useState<Set<string>>(new Set());
  const [materials, setMaterials] = useState<Set<string>>(new Set());
  const [priceBucket, setPriceBucket] = useState<string | null>(null);

  const availableCategories = useMemo(
    () => Array.from(new Set(products.map((p) => p.category))).sort(),
    [products]
  );
  const availableSizes = useMemo(
    () => Array.from(new Set(products.flatMap((p) => p.sizes))),
    [products]
  );
  const availableColors = useMemo(() => {
    const map = new Map<string, string>();
    products.forEach((p) => p.colors.forEach((c) => map.set(c.name, c.hex)));
    return Array.from(map.entries());
  }, [products]);
  const availableMaterials = useMemo(
    () => Array.from(new Set(products.flatMap((p) => p.materials))).sort(),
    [products]
  );

  function toggle(set: Set<string>, value: string, setter: (s: Set<string>) => void) {
    const next = new Set(set);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    setter(next);
  }

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      if (categories.size > 0 && !categories.has(p.category)) return false;
      if (sizes.size > 0 && !p.sizes.some((s) => sizes.has(s))) return false;
      if (colors.size > 0 && !p.colors.some((c) => colors.has(c.name))) return false;
      if (materials.size > 0 && !p.materials.some((m) => materials.has(m))) return false;
      if (priceBucket) {
        const bucket = PRICE_BUCKETS.find((b) => b.label === priceBucket);
        if (bucket && !bucket.test(p.price)) return false;
      }
      return true;
    });

    list = [...list];
    if (sort === "newest") list.sort((a, b) => Number(b.isNew) - Number(a.isNew));
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);

    return list;
  }, [products, categories, sizes, colors, materials, priceBucket, sort]);

  const activeFilterCount =
    categories.size + sizes.size + colors.size + materials.size + (priceBucket ? 1 : 0);

  return (
    <div onMouseLeave={() => setOpenFilter(null)}>
      <div className="border-b border-stone/25 px-6 pb-14 pt-36 text-center lg:px-10">
        <p className="text-[11px] uppercase tracking-luxury-lg text-taupe">{meta.kicker}</p>
        <h1 className="mt-4 font-serif text-4xl sm:text-5xl">{meta.title}</h1>
        <p className="mx-auto mt-4 max-w-md text-sm text-espresso/65">{meta.intro}</p>
      </div>

      <div className="sticky top-[73px] z-10 flex flex-wrap items-center justify-between gap-4 border-b border-stone/25 bg-snow/97 px-6 py-4 backdrop-blur lg:px-10">
        <div className="flex flex-wrap items-center gap-6">
          <span className="text-[11px] uppercase tracking-luxury text-espresso/50">
            {filtered.length} {filtered.length === 1 ? "Piece" : "Pieces"}
          </span>
          {availableCategories.length > 1 && (
            <FilterDropdown
              label="Category"
              open={openFilter === "category"}
              onToggle={() => setOpenFilter(openFilter === "category" ? null : "category")}
              count={categories.size}
            >
              {availableCategories.map((c) => (
                <CheckRow
                  key={c}
                  label={c}
                  checked={categories.has(c)}
                  onChange={() => toggle(categories, c, setCategories)}
                />
              ))}
            </FilterDropdown>
          )}
          <FilterDropdown
            label="Size"
            open={openFilter === "size"}
            onToggle={() => setOpenFilter(openFilter === "size" ? null : "size")}
            count={sizes.size}
          >
            <div className="grid grid-cols-3 gap-x-3">
              {availableSizes.map((s) => (
                <CheckRow key={s} label={s} checked={sizes.has(s)} onChange={() => toggle(sizes, s, setSizes)} />
              ))}
            </div>
          </FilterDropdown>
          <FilterDropdown
            label="Color"
            open={openFilter === "color"}
            onToggle={() => setOpenFilter(openFilter === "color" ? null : "color")}
            count={colors.size}
          >
            {availableColors.map(([name, hex]) => (
              <CheckRow
                key={name}
                label={name}
                swatch={hex}
                checked={colors.has(name)}
                onChange={() => toggle(colors, name, setColors)}
              />
            ))}
          </FilterDropdown>
          <FilterDropdown
            label="Material"
            open={openFilter === "material"}
            onToggle={() => setOpenFilter(openFilter === "material" ? null : "material")}
            count={materials.size}
          >
            {availableMaterials.map((m) => (
              <CheckRow
                key={m}
                label={m}
                checked={materials.has(m)}
                onChange={() => toggle(materials, m, setMaterials)}
              />
            ))}
          </FilterDropdown>
          <FilterDropdown
            label="Price"
            open={openFilter === "price"}
            onToggle={() => setOpenFilter(openFilter === "price" ? null : "price")}
            count={priceBucket ? 1 : 0}
          >
            {PRICE_BUCKETS.map((b) => (
              <label
                key={b.label}
                className="flex cursor-pointer items-center gap-2.5 py-1.5 text-[13px] text-espresso/85"
              >
                <input
                  type="radio"
                  name="price"
                  checked={priceBucket === b.label}
                  onChange={() => setPriceBucket(priceBucket === b.label ? null : b.label)}
                  className="accent-espresso"
                />
                {b.label}
              </label>
            ))}
          </FilterDropdown>
          {activeFilterCount > 0 && (
            <button
              className="text-[11px] uppercase tracking-luxury text-espresso/50 underline underline-offset-4"
              onClick={() => {
                setCategories(new Set());
                setSizes(new Set());
                setColors(new Set());
                setMaterials(new Set());
                setPriceBucket(null);
              }}
            >
              Clear all
            </button>
          )}
        </div>

        <div className="flex items-center gap-5">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="border-none bg-transparent text-[11px] uppercase tracking-luxury text-espresso/70 focus:outline-none"
          >
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="price-asc">Price, low to high</option>
            <option value="price-desc">Price, high to low</option>
          </select>
          <div className="hidden items-center gap-2 sm:flex">
            {[2, 3, 4].map((n) => (
              <button
                key={n}
                aria-label={`${n} columns`}
                onClick={() => setColumns(n as 2 | 3 | 4)}
                className={`text-[11px] ${columns === n ? "text-espresso" : "text-espresso/35"}`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 py-12 lg:px-10">
        <ProductGrid products={filtered} columns={columns} />
      </div>
    </div>
  );
}
