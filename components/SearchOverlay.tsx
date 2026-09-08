"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useUI } from "@/lib/ui-context";
import { PRODUCTS } from "@/lib/products";
import { formatPrice } from "@/lib/format";
import ProductArt from "./ProductArt";

const SUGGESTIONS = ["Cashmere", "Winter Coats", "Ski", "New Arrivals", "Scarves"];

export default function SearchOverlay() {
  const { searchOpen, setSearchOpen } = useUI();
  const [query, setQuery] = useState("");

  function closeSearch() {
    setSearchOpen(false);
    setQuery("");
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeSearch();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return PRODUCTS.filter((p) => {
      if (q === "new arrivals") return p.isNew;
      return (
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.materials.some((m) => m.toLowerCase().includes(q)) ||
        p.collections.some((c) => c.includes(q.replace(/\s+/g, "-")))
      );
    }).slice(0, 8);
  }, [query]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col bg-snow text-espresso transition-opacity duration-300 ${
        searchOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!searchOpen}
    >
      <div className="mx-auto w-full max-w-3xl flex-1 overflow-y-auto px-6 pt-28 pb-16">
        <div className="flex items-center justify-between">
          <p className="text-[11px] uppercase tracking-luxury text-taupe">Search Montreve</p>
          <button aria-label="Close search" className="text-2xl leading-none" onClick={() => closeSearch()}>
            &times;
          </button>
        </div>
        <input
          autoFocus={searchOpen}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for products, materials, collections…"
          className="mt-6 w-full border-b border-espresso/30 bg-transparent pb-4 font-serif text-3xl italic placeholder:text-espresso/30 focus:outline-none sm:text-4xl"
        />

        {query.trim() === "" ? (
          <div className="mt-10">
            <p className="mb-4 text-[11px] uppercase tracking-luxury text-taupe">Suggestions</p>
            <div className="flex flex-wrap gap-3">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => setQuery(s)}
                  className="border border-stone/40 px-4 py-2 text-[12px] uppercase tracking-luxury hover:border-espresso"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-10">
            <p className="mb-6 text-[11px] uppercase tracking-luxury text-taupe">
              {results.length} {results.length === 1 ? "Result" : "Results"}
            </p>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              {results.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  onClick={() => closeSearch()}
                  className="group"
                >
                  <ProductArt
                    product={product}
                    image={product.images[0]}
                    colorHex={product.colors[0].hex}
                    colorName={product.colors[0].name}
                    hoverScale
                  />
                  <p className="mt-3 text-[13px] leading-snug">{product.name}</p>
                  <p className="text-[12px] text-espresso/55">{formatPrice(product.price)}</p>
                </Link>
              ))}
              {results.length === 0 && (
                <p className="col-span-full text-sm text-espresso/60">
                  No results. Try “Cashmere” or “Ski”.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
