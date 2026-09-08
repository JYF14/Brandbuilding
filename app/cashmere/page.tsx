import { Metadata } from "next";
import { getProductsByCollection } from "@/lib/products";
import { COLLECTION_META } from "@/lib/collections";
import { Gender } from "@/lib/types";
import PLPTemplate from "@/components/PLPTemplate";

export const metadata: Metadata = {
  title: "Cashmere — MONTREVE",
  description: "Exceptional fibres selected for warmth, softness and longevity.",
};

export default async function CashmerePage({
  searchParams,
}: {
  searchParams: Promise<{ gender?: string }>;
}) {
  const { gender } = await searchParams;
  let products = getProductsByCollection("cashmere");
  if (gender) products = products.filter((p) => p.gender === (gender as Gender));

  return <PLPTemplate meta={COLLECTION_META.cashmere} products={products} />;
}
