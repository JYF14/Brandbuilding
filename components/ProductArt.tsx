import ArtPlate from "./ArtPlate";
import { Product, ProductImage as ProductImageT } from "@/lib/types";

interface ProductArtProps {
  product: Pick<Product, "slug" | "name" | "silhouette" | "location">;
  image: ProductImageT;
  colorHex: string;
  className?: string;
  hoverScale?: boolean;
}

export default function ProductArt({
  product,
  image,
  colorHex,
  className = "",
  hoverScale = false,
}: ProductArtProps) {
  return (
    <div className={`relative aspect-[4/5] overflow-hidden bg-ivory ${className}`}>
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
    </div>
  );
}
