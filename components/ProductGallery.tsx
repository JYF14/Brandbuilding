"use client";

import { useEffect, useRef, useState } from "react";
import { Product } from "@/lib/types";
import ArtPlate from "./ArtPlate";
import ProductArt from "./ProductArt";
import { productImagePath } from "@/lib/image-path";

export default function ProductGallery({
  product,
  colorHex,
  colorName,
}: {
  product: Product;
  colorHex: string;
  colorName: string;
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
            <ProductArt product={product} image={img} colorHex={colorHex} colorName={colorName} />
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
            <MainImage
              key={`${current.shot}-${colorName}`}
              product={product}
              image={current}
              colorHex={colorHex}
              colorName={colorName}
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
              <ProductArt product={product} image={img} colorHex={colorHex} colorName={colorName} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function MainImage({
  product,
  image,
  colorHex,
  colorName,
}: {
  product: Product;
  image: Product["images"][number];
  colorHex: string;
  colorName: string;
}) {
  const [photoFailed, setPhotoFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const photoSrc = productImagePath(product.slug, image.shot, colorName);

  useEffect(() => {
    // See ProductArt.tsx: a fast local 404 can resolve before React
    // hydrates and attaches onError, so check the already-failed case too.
    const el = imgRef.current;
    if (el && el.complete && el.naturalWidth === 0) {
      setPhotoFailed(true);
    }
  }, [photoSrc]);

  if (!photoFailed) {
    return (
      // Convention-based optional asset that may not exist yet — onError
      // falls back to the placeholder below.
      // eslint-disable-next-line @next/next/no-img-element
      <img
        ref={imgRef}
        src={photoSrc}
        alt={image.alt}
        onError={() => setPhotoFailed(true)}
        className="h-full w-full object-cover"
      />
    );
  }

  return (
    <ArtPlate
      seed={`${product.slug}-${image.shot}-${colorHex}`}
      colorHex={colorHex}
      silhouette={product.silhouette}
      shot={image.shot}
      productName={product.name}
      shotLabel={image.alt}
      location={product.location}
      className="h-full w-full"
    />
  );
}
