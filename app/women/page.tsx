import { Metadata } from "next";
import { getProductsByGender } from "@/lib/products";
import { COLLECTION_META } from "@/lib/collections";
import PLPTemplate from "@/components/PLPTemplate";

export const metadata: Metadata = {
  title: "Women — MONTREVE",
  description: "Refined layers designed for life at altitude.",
};

export default async function WomenPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  let products = getProductsByGender("women");
  if (category) products = products.filter((p) => p.category === category);

  return <PLPTemplate meta={COLLECTION_META.women} products={products} />;
}
