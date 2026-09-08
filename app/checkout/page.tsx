"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useCart } from "@/lib/cart-context";
import { getProductBySlug } from "@/lib/products";
import { formatPrice } from "@/lib/format";
import ProductArt from "@/components/ProductArt";

export default function CheckoutPage() {
  const { lines } = useCart();

  const joined = useMemo(
    () =>
      lines
        .map((line) => {
          const product = getProductBySlug(line.productSlug);
          return product ? { line, product } : null;
        })
        .filter((v): v is { line: (typeof lines)[number]; product: NonNullable<ReturnType<typeof getProductBySlug>> } =>
          Boolean(v)
        ),
    [lines]
  );

  const subtotal = joined.reduce((sum, { line, product }) => sum + product.price * line.quantity, 0);

  return (
    <div className="mx-auto max-w-3xl px-6 pb-24 pt-32 lg:px-0">
      <p className="text-[11px] uppercase tracking-luxury-lg text-taupe">Checkout</p>
      <h1 className="mt-3 font-serif text-4xl">Order Summary</h1>

      {joined.length === 0 ? (
        <div className="mt-14 text-center">
          <p className="text-sm text-espresso/65">Your bag is empty.</p>
          <Link
            href="/new-arrivals"
            className="mt-6 inline-block border border-espresso px-7 py-3.5 text-[11px] uppercase tracking-luxury hover:bg-espresso hover:text-snow"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="mt-10 divide-y divide-stone/20 border-y border-stone/25">
            {joined.map(({ line, product }) => {
              const colorHex =
                product.colors.find((c) => c.name === line.colorName)?.hex ?? product.colors[0].hex;
              return (
                <div key={`${line.productSlug}-${line.colorName}-${line.size}`} className="flex gap-5 py-6">
                  <div className="w-20 shrink-0">
                    <ProductArt product={product} image={product.images[0]} colorHex={colorHex} />
                  </div>
                  <div className="flex flex-1 items-center justify-between">
                    <div>
                      <p className="text-[13px]">{product.name}</p>
                      <p className="mt-1 text-[12px] text-espresso/55">
                        {line.colorName} · {line.size} · Qty {line.quantity}
                      </p>
                    </div>
                    <span className="text-[13px]">{formatPrice(product.price * line.quantity)}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex items-center justify-between text-[14px]">
            <span className="uppercase tracking-luxury">Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <p className="mt-2 text-[11px] uppercase tracking-luxury text-espresso/50">
            Complimentary shipping · Taxes calculated at payment
          </p>

          <div className="mt-10 border border-stone/30 bg-ivory p-6 text-[13px] leading-relaxed text-espresso/70">
            This is a demonstration storefront. Payment is not processed — MONTREVE does not
            collect any card or personal details here.
          </div>

          <button
            disabled
            className="mt-8 w-full cursor-not-allowed bg-espresso/50 py-4 text-center text-[12px] uppercase tracking-luxury text-snow"
          >
            Payment unavailable in this preview
          </button>
        </>
      )}
    </div>
  );
}
