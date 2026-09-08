"use client";

import Link from "next/link";
import { useState } from "react";
import { Product } from "@/lib/types";
import { formatPrice } from "@/lib/format";
import ProductArt from "./ProductArt";

export default function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false);
  const [activeColor, setActiveColor] = useState(product.colors[0]);
  const front = product.images.find((i) => i.shot === "front") ?? product.images[0];
  const worn = product.images.find((i) => i.shot === "worn") ?? product.images[1] ?? front;

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden">
        <ProductArt
          product={product}
          image={front}
          colorHex={activeColor.hex}
          colorName={activeColor.name}
          hoverScale
        />
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <ProductArt product={product} image={worn} colorHex={activeColor.hex} colorName={activeColor.name} />
        </div>
        {product.isNew && (
          <span className="absolute left-3 top-3 bg-snow/90 px-2 py-1 text-[10px] uppercase tracking-luxury text-espresso">
            New
          </span>
        )}
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-[13px] leading-snug text-espresso">{product.name}</h3>
          <p className="mt-1 text-[13px] text-espresso/60">{formatPrice(product.price)}</p>
        </div>
      </div>
      <div className="mt-2 flex gap-1.5">
        {product.colors.map((color) => (
          <button
            key={color.name}
            type="button"
            aria-label={color.name}
            onMouseEnter={(e) => {
              e.preventDefault();
              setActiveColor(color);
            }}
            onClick={(e) => {
              e.preventDefault();
              setActiveColor(color);
            }}
            className={`h-3.5 w-3.5 rounded-full border transition-[outline] ${
              activeColor.name === color.name ? "ring-1 ring-espresso ring-offset-1" : "border-stone/50"
            }`}
            style={{ backgroundColor: color.hex }}
          />
        ))}
      </div>
    </Link>
  );
}
