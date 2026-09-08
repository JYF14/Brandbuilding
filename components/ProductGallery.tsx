"use client";

import { useState } from "react";
import { Product } from "@/lib/types";
import ArtPlate from "./ArtPlate";

export default function ProductGallery({
  product,
  colorHex,
}: {
  product: Product;
  colorHex: string;
}) {
  const [active, setActive] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const images = product.images;
  const current = images[active];

  return (
    <div className="lg:flex lg:gap-4">
      <div className="hidden shrink-0 flex-col gap-3 lg:flex">
        {images.map((img, i) => (
          <button
            key={img.shot}
            onClick={() => {
              setActive(i);
              setZoomed(false);
            }}
            className={`w-20 overflow-hidden border transition-colors ${
              active === i ? "border-espresso" : "border-transparent hover:border-stone/50"
            }`}
          >
            <div className="relative aspect-[4/5] bg-ivory">
              <ArtPlate
                seed={`${product.slug}-${img.shot}-${colorHex}`}
                colorHex={colorHex}
                silhouette={product.silhouette}
                shot={img.shot}
                productName={product.name}
                shotLabel={img.alt}
                location={product.location}
                className="h-full w-full"
              />
            </div>
          </button>
        ))}
      </div>

      <div className="flex-1">
        <button
          type="button"
          onClick={() => setZoomed(!zoomed)}
          className={`relative block aspect-[4/5] w-full overflow-hidden bg-ivory ${
            zoomed ? "cursor-zoom-out" : "cursor-zoom-in"
          }`}
          aria-label={zoomed ? "Zoom out" : "Zoom in"}
        >
          <div
            className={`h-full w-full transition-transform duration-500 ${
              zoomed ? "scale-[1.7]" : "scale-100"
            }`}
          >
            <ArtPlate
              seed={`${product.slug}-${current.shot}-${colorHex}`}
              colorHex={colorHex}
              silhouette={product.silhouette}
              shot={current.shot}
              productName={product.name}
              shotLabel={current.alt}
              location={product.location}
              className="h-full w-full"
            />
          </div>
        </button>

        <div className="mt-3 flex gap-2 overflow-x-auto lg:hidden">
          {images.map((img, i) => (
            <button
              key={img.shot}
              onClick={() => setActive(i)}
              className={`h-16 w-16 shrink-0 overflow-hidden border bg-ivory ${
                active === i ? "border-espresso" : "border-transparent"
              }`}
            >
              <ArtPlate
                seed={`${product.slug}-${img.shot}-${colorHex}`}
                colorHex={colorHex}
                silhouette={product.silhouette}
                shot={img.shot}
                productName={product.name}
                shotLabel={img.alt}
                location={product.location}
                className="h-full w-full"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
