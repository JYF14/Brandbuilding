import { Product } from "@/lib/types";
import ProductCard from "./ProductCard";

const COLS: Record<number, string> = {
  2: "grid-cols-2",
  3: "grid-cols-2 sm:grid-cols-3",
  4: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
};

export default function ProductGrid({
  products,
  columns = 3,
}: {
  products: Product[];
  columns?: 2 | 3 | 4;
}) {
  if (products.length === 0) {
    return (
      <p className="py-24 text-center text-sm text-espresso/60">
        No products match these filters.
      </p>
    );
  }

  return (
    <div className={`grid ${COLS[columns]} gap-x-5 gap-y-12 lg:gap-x-8`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
