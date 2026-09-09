"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Product } from "@/lib/types";
import { formatPrice } from "@/lib/format";
import { useCart } from "@/lib/cart-context";
import { useUI } from "@/lib/ui-context";
import ProductGallery from "./ProductGallery";
import ColorSelector from "./ColorSelector";
import SizeSelector from "./SizeSelector";
import SizeGuideModal from "./SizeGuideModal";
import Accordion from "./Accordion";
import ProductGrid from "./ProductGrid";
import ProductArt from "./ProductArt";
import { getProductsBySlugs } from "@/lib/products";
import { getStock, isLowStock } from "@/lib/stock";

const FIT_NOTES: Record<string, string> = {
  "Coats & Jackets": "Cut with a considered, tailored line. True to size — size down for a closer fit.",
  Cashmere: "A relaxed, easy fit. True to size.",
  Knitwear: "A regular fit. True to size.",
  Trousers: "A tailored fit through the hip and thigh. True to size.",
  "Ski & Alpine": "Cut for movement over a base layer. True to size.",
  Outerwear: "A relaxed fit designed to layer over knitwear. True to size.",
  Scarves: "One size, generously proportioned to wrap twice.",
  Beanies: "One size, with a folded cuff for adjustable depth.",
  Gloves: "Cut close to the hand. If between sizes, we recommend sizing up.",
  Boots: "True to size. A thin sock is recommended for the most precise fit.",
  Bags: "One size.",
};

export default function ProductDetail({ product }: { product: Product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);
  const [sizeError, setSizeError] = useState(false);

  const { addToCart } = useCart();
  const { announceAdded } = useUI();

  const selectedStock = selectedSize ? getStock(product.slug, selectedSize) : null;
  const selectedLowStock = selectedStock !== null && isLowStock(selectedStock);

  const related = useMemo(() => getProductsBySlugs(product.relatedSlugs), [product]);
  const completeLook = useMemo(
    () => getProductsBySlugs(product.completeTheLookSlugs),
    [product]
  );

  function handleAddToBag() {
    if (!selectedSize || getStock(product.slug, selectedSize) === 0) {
      setSizeError(true);
      return;
    }
    addToCart({
      productSlug: product.slug,
      colorName: selectedColor.name,
      size: selectedSize,
      quantity,
    });
    announceAdded(product.name);
  }

  return (
    <div className="pb-24 pt-24 lg:pt-28">
      <div className="px-5 pb-4 text-[11px] uppercase tracking-luxury text-espresso/50 lg:px-10">
        <Link href="/" className="hover:opacity-60">
          Home
        </Link>
        <span className="px-1.5">/</span>
        <Link
          href={product.gender === "accessories" ? "/accessories" : `/${product.gender}`}
          className="hover:opacity-60 capitalize"
        >
          {product.gender}
        </Link>
        <span className="px-1.5">/</span>
        <span className="text-espresso">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 gap-10 px-5 lg:grid-cols-[1fr_420px] lg:gap-14 lg:px-10">
        <ProductGallery product={product} colorHex={selectedColor.hex} colorName={selectedColor.name} />

        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-[11px] uppercase tracking-luxury text-taupe">{product.category}</p>
          <h1 className="mt-2 font-serif text-3xl leading-tight sm:text-[34px]">{product.name}</h1>
          <p className="mt-3 text-lg">{formatPrice(product.price)}</p>
          <div className="mt-2 flex items-center gap-2 text-[12px] text-espresso/60">
            <span aria-hidden>{"★".repeat(Math.round(product.rating))}{"☆".repeat(5 - Math.round(product.rating))}</span>
            <span>
              {product.rating.toFixed(1)} ({product.reviewCount} reviews)
            </span>
          </div>

          <p className="mt-6 text-[13px] leading-relaxed text-espresso/75">{product.description}</p>

          <div className="mt-7 space-y-6">
            <ColorSelector
              colors={product.colors}
              selected={selectedColor}
              onSelect={(c) => setSelectedColor(c)}
            />
            <div>
              <SizeSelector
                productSlug={product.slug}
                sizes={product.sizes}
                selected={selectedSize}
                onSelect={(s) => {
                  setSelectedSize(s);
                  setSizeError(false);
                }}
                onOpenGuide={() => setSizeGuideOpen(true)}
              />
              {sizeError && (
                <p className="mt-2 text-[11px] uppercase tracking-luxury text-espresso/70">
                  Please select a size
                </p>
              )}
              {selectedLowStock && !sizeError && (
                <p className="mt-2 text-[11px] uppercase tracking-luxury text-taupe">
                  Only {selectedStock} left in size {selectedSize}
                </p>
              )}
            </div>
          </div>

          <div className="mt-7 flex items-stretch gap-3">
            <div className="flex items-center border border-stone/40">
              <button
                className="px-3 py-3.5 text-sm"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="min-w-[2rem] text-center text-[13px]">{quantity}</span>
              <button
                className="px-3 py-3.5 text-sm"
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToBag}
              className="flex-1 bg-espresso text-[12px] uppercase tracking-luxury text-snow transition-opacity hover:opacity-85"
            >
              Add to Bag
            </button>
            <button
              onClick={() => setWishlisted(!wishlisted)}
              aria-label="Add to wishlist"
              aria-pressed={wishlisted}
              className="flex w-12 items-center justify-center border border-stone/40"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill={wishlisted ? "#332A25" : "none"} stroke="#332A25" strokeWidth={1.5}>
                <path d="M12 21s-7.5-4.6-10-9.2C.4 8 2 4 6 4c2.2 0 3.7 1.2 4.5 2.4C11.3 5.2 12.8 4 15 4c4 0 5.6 4 4 7.8C19.5 16.4 12 21 12 21z" />
              </svg>
            </button>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3 border-y border-stone/25 py-5 text-center text-[10.5px] uppercase tracking-wide text-espresso/60">
            <span>Complimentary shipping</span>
            <span>30 days returns</span>
            <span>Secure payment</span>
          </div>

          <div className="mt-2">
            <Accordion title="Details">
              <ul className="list-disc space-y-1.5 pl-4">
                {product.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </Accordion>
            <Accordion title="Materials & Care">
              <p className="mb-2">{product.materials.join(", ")}</p>
              <ul className="list-disc space-y-1.5 pl-4">
                {product.care.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </Accordion>
            <Accordion title="Size & Fit">
              <p>{FIT_NOTES[product.category] ?? "True to size."}</p>
            </Accordion>
            <Accordion title="Delivery & Returns">
              <p className="mb-2">
                <strong className="font-medium text-espresso">Complimentary delivery.</strong>{" "}
                Complimentary European delivery on all orders, arriving within 2–4 business days.
              </p>
              <p>
                <strong className="font-medium text-espresso">Returns.</strong> Returns accepted
                within 30 days of delivery, in original condition.
              </p>
            </Accordion>
          </div>
        </div>
      </div>

      <section className="mt-20 grid grid-cols-1 gap-1 px-5 sm:grid-cols-2 lg:px-10">
        {[product.images.find((i) => i.shot === "material"), product.images.find((i) => i.shot === "hardware")]
          .filter((img): img is NonNullable<typeof img> => Boolean(img))
          .map((img) => (
            <div key={img.shot} className="relative aspect-[5/4] overflow-hidden bg-ivory">
              <ProductArt
                product={product}
                image={img}
                colorHex={selectedColor.hex}
                colorName={selectedColor.name}
                className="h-full w-full"
              />
            </div>
          ))}
      </section>
      <div className="px-5 pb-4 pt-6 text-center lg:px-10">
        <p className="font-serif text-2xl italic sm:text-3xl">Exceptional by nature.</p>
        <p className="mx-auto mt-2 max-w-md text-sm text-espresso/60">
          {product.materials[0]}, selected for warmth, softness and longevity.
        </p>
      </div>

      {related.length > 0 && (
        <section className="mt-20 px-5 lg:px-10">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="font-serif text-2xl sm:text-3xl">You May Also Like</h2>
          </div>
          <ProductGrid products={related} columns={4} />
        </section>
      )}

      {completeLook.length > 0 && (
        <section className="mt-20 border-t border-stone/25 px-5 pt-16 lg:px-10">
          <h2 className="mb-8 font-serif text-2xl sm:text-3xl">Complete the Look</h2>
          <ProductGrid products={completeLook} columns={4} />
        </section>
      )}

      <SizeGuideModal open={sizeGuideOpen} onClose={() => setSizeGuideOpen(false)} sizes={product.sizes} />

      <div className="fixed inset-x-0 bottom-0 z-30 flex items-center gap-3 border-t border-stone/25 bg-snow/97 p-4 backdrop-blur lg:hidden">
        <div className="flex-1">
          <p className="text-[12px] leading-tight">{product.name}</p>
          <p className="text-[12px] text-espresso/60">{formatPrice(product.price)}</p>
        </div>
        <button
          onClick={handleAddToBag}
          className="bg-espresso px-6 py-3.5 text-[11px] uppercase tracking-luxury text-snow"
        >
          Add to Bag
        </button>
      </div>
    </div>
  );
}
