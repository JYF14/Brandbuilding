"use client";

import Link from "next/link";
import { useMemo } from "react";
import { CartLine, useCart } from "@/lib/cart-context";
import { useUI } from "@/lib/ui-context";
import { getProductBySlug } from "@/lib/products";
import { formatPrice } from "@/lib/format";
import { Product } from "@/lib/types";
import ProductArt from "./ProductArt";

interface JoinedLine {
  line: CartLine;
  product: Product;
}

export default function CartDrawer() {
  const { cartOpen, setCartOpen, justAdded } = useUI();
  const { lines, updateQuantity, removeLine } = useCart();

  const joined = useMemo<JoinedLine[]>(
    () =>
      lines
        .map((line) => {
          const product = getProductBySlug(line.productSlug);
          return product ? { line, product } : null;
        })
        .filter((v): v is JoinedLine => Boolean(v)),
    [lines]
  );

  const subtotal = joined.reduce(
    (sum, { line, product }) => sum + product.price * line.quantity,
    0
  );

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-espresso/40 transition-opacity duration-300 ${
          cartOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setCartOpen(false)}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-snow text-espresso shadow-2xl transition-transform duration-500 ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!cartOpen}
      >
        <div className="flex items-center justify-between border-b border-stone/25 px-6 py-5">
          <h2 className="text-[12px] uppercase tracking-luxury">
            Your Bag {joined.length > 0 && `(${joined.reduce((s, j) => s + j.line.quantity, 0)})`}
          </h2>
          <button aria-label="Close bag" className="text-xl leading-none" onClick={() => setCartOpen(false)}>
            &times;
          </button>
        </div>

        {justAdded && (
          <div className="border-b border-stone/25 bg-ivory px-6 py-3 text-[12px] uppercase tracking-luxury text-espresso/80">
            {justAdded} added to your bag
          </div>
        )}

        {joined.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center">
            <p className="text-[13px] uppercase tracking-luxury text-espresso/70">
              Your bag is empty
            </p>
            <p className="text-sm text-espresso/60">Discover:</p>
            <div className="flex gap-4 text-[12px] uppercase tracking-luxury">
              <Link href="/women" onClick={() => setCartOpen(false)} className="underline underline-offset-4">
                Women
              </Link>
              <Link href="/men" onClick={() => setCartOpen(false)} className="underline underline-offset-4">
                Men
              </Link>
              <Link href="/new-arrivals" onClick={() => setCartOpen(false)} className="underline underline-offset-4">
                New Arrivals
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6">
              {joined.map(({ line, product }) => {
                const colorHex =
                  product.colors.find((c) => c.name === line.colorName)?.hex ??
                  product.colors[0].hex;
                return (
                  <div
                    key={`${line.productSlug}-${line.colorName}-${line.size}`}
                    className="flex gap-4 border-b border-stone/20 py-6"
                  >
                    <Link
                      href={`/products/${product.slug}`}
                      onClick={() => setCartOpen(false)}
                      className="w-24 shrink-0"
                    >
                      <ProductArt product={product} image={product.images[0]} colorHex={colorHex} />
                    </Link>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <Link
                          href={`/products/${product.slug}`}
                          onClick={() => setCartOpen(false)}
                          className="text-[13px] leading-snug hover:opacity-60"
                        >
                          {product.name}
                        </Link>
                        <p className="mt-1 text-[12px] text-espresso/55">
                          {line.colorName} · {line.size}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-stone/40">
                          <button
                            className="px-2 py-1 text-sm"
                            onClick={() =>
                              updateQuantity(line.productSlug, line.colorName, line.size, line.quantity - 1)
                            }
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>
                          <span className="min-w-[1.5rem] text-center text-[12px]">{line.quantity}</span>
                          <button
                            className="px-2 py-1 text-sm"
                            onClick={() =>
                              updateQuantity(line.productSlug, line.colorName, line.size, line.quantity + 1)
                            }
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                        <span className="text-[13px]">{formatPrice(product.price * line.quantity)}</span>
                      </div>
                      <button
                        className="mt-2 self-start text-[11px] uppercase tracking-luxury text-espresso/50 underline underline-offset-4"
                        onClick={() => removeLine(line.productSlug, line.colorName, line.size)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="border-t border-stone/25 px-6 py-6">
              <div className="flex items-center justify-between text-[13px]">
                <span className="uppercase tracking-luxury">Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-2 text-[11px] uppercase tracking-luxury text-espresso/50">
                Complimentary shipping
              </p>
              <Link
                href="/checkout"
                onClick={() => setCartOpen(false)}
                className="mt-5 block w-full bg-espresso py-4 text-center text-[12px] uppercase tracking-luxury text-snow transition-opacity hover:opacity-85"
              >
                Checkout
              </Link>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
