import { Metadata } from "next";
import { getProductsByCollection } from "@/lib/products";
import { COLLECTION_META } from "@/lib/collections";
import { Gender } from "@/lib/types";
import PLPTemplate from "@/components/PLPTemplate";

export const metadata: Metadata = {
  title: "Alpine & Ski — MONTREVE",
  description: "Technical elegance for the slope and the terrace after.",
};

export default async function SkiPage({
  searchParams,
}: {
  searchParams: Promise<{ gender?: string }>;
}) {
  const { gender } = await searchParams;
  let products = getProductsByCollection("ski");
  if (gender) products = products.filter((p) => p.gender === (gender as Gender));

  return <PLPTemplate meta={COLLECTION_META.ski} products={products} />;
}
