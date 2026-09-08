import { Metadata } from "next";
import { getProductsByGender } from "@/lib/products";
import { COLLECTION_META } from "@/lib/collections";
import PLPTemplate from "@/components/PLPTemplate";

export const metadata: Metadata = {
  title: "Men — MONTREVE",
  description: "Considered outerwear and knitwear built for higher places.",
};

export default async function MenPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  let products = getProductsByGender("men");
  if (category) products = products.filter((p) => p.category === category);

  return <PLPTemplate meta={COLLECTION_META.men} products={products} />;
}
