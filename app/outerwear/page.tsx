import { Metadata } from "next";
import { getProductsByCollection } from "@/lib/products";
import { COLLECTION_META } from "@/lib/collections";
import { Gender } from "@/lib/types";
import PLPTemplate from "@/components/PLPTemplate";

export const metadata: Metadata = {
  title: "Outerwear — MONTREVE",
  description: "Coats, jackets and shearling built for the mountain and the city.",
};

export default async function OuterwearPage({
  searchParams,
}: {
  searchParams: Promise<{ gender?: string }>;
}) {
  const { gender } = await searchParams;
  let products = getProductsByCollection("outerwear");
  if (gender) products = products.filter((p) => p.gender === (gender as Gender));

  return <PLPTemplate meta={COLLECTION_META.outerwear} products={products} />;
}
