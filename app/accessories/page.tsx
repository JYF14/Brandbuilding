import { Metadata } from "next";
import { getProductsByGender } from "@/lib/products";
import { COLLECTION_META } from "@/lib/collections";
import PLPTemplate from "@/components/PLPTemplate";

export const metadata: Metadata = {
  title: "Accessories — MONTREVE",
  description: "Scarves, knitwear accessories, gloves and boots for higher places.",
};

export default async function AccessoriesPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  let products = getProductsByGender("accessories");
  if (category) products = products.filter((p) => p.category === category);

  return <PLPTemplate meta={COLLECTION_META.accessories} products={products} />;
}
