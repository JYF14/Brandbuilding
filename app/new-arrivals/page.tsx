import { Metadata } from "next";
import { PRODUCTS } from "@/lib/products";
import { COLLECTION_META } from "@/lib/collections";
import { Gender } from "@/lib/types";
import PLPTemplate from "@/components/PLPTemplate";

export const metadata: Metadata = {
  title: "New Arrivals — MONTREVE",
  description: "The latest from the MONTREVE atelier.",
};

export default async function NewArrivalsPage({
  searchParams,
}: {
  searchParams: Promise<{ gender?: string }>;
}) {
  const { gender } = await searchParams;
  let products = PRODUCTS.filter((p) => p.isNew);
  if (gender) products = products.filter((p) => p.gender === (gender as Gender));

  return <PLPTemplate meta={COLLECTION_META["new-arrivals"]} products={products} />;
}
