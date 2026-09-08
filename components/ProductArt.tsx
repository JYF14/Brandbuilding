"use client";

import { useEffect, useRef, useState } from "react";
import ArtPlate from "./ArtPlate";
import { Product, ProductImage as ProductImageT } from "@/lib/types";
import { productImagePath } from "@/lib/image-path";

interface ProductArtProps {
  product: Pick<Product, "slug" | "name" | "silhouette" | "location">;
  image: ProductImageT;
  colorHex: string;
  colorName?: string;
  className?: string;
  hoverScale?: boolean;
}

export default function ProductArt({
  product,
  image,
  colorHex,
  colorName,
  className = "",
  hoverScale = false,
}: ProductArtProps) {
  const [photoFailed, setPhotoFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const photoSrc = colorName
    ? productImagePath(product.slug, image.shot, colorName)
    : null;

  useEffect(() => {
    // The <img> tag is present in the server-rendered HTML, so the browser
    // can start (and finish) the request before React hydrates and attaches
    // the onError listener below — a fast local 404 routinely loses that
    // race. Re-sync with the DOM element's actual load state on mount and
    // whenever the source changes (also clears a stale failure from a
    // previously selected colour/shot).
    const el = imgRef.current;
    const alreadyFailed = Boolean(el && el.complete && el.naturalWidth === 0);
    setPhotoFailed(alreadyFailed);
  }, [photoSrc]);

  return (
    <div className={`relative aspect-[4/5] overflow-hidden bg-ivory ${className}`}>
      {photoSrc && !photoFailed ? (
        // Convention-based optional asset that may not exist yet — onError
        // falls back to the generated placeholder, so next/image (which has
        // no onError-driven fallback story) doesn't fit here.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef}
          src={photoSrc}
          alt={image.alt}
          onError={() => setPhotoFailed(true)}
          className={`h-full w-full object-cover ${hoverScale ? "image-hover-scale" : ""}`}
        />
      ) : (
        <ArtPlate
          seed={`${product.slug}-${image.shot}-${colorHex}`}
          colorHex={colorHex}
          silhouette={product.silhouette}
          shot={image.shot}
          productName={product.name}
          shotLabel={image.alt}
          location={product.location}
          className={`h-full w-full ${hoverScale ? "image-hover-scale" : ""}`}
        />
      )}
    </div>
  );
}
