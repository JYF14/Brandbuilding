"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Product } from "./types";

export interface CartLine {
  productSlug: string;
  colorName: string;
  size: string;
  quantity: number;
}

export interface CartLineWithProduct extends CartLine {
  product: Product;
}

interface CartContextValue {
  lines: CartLine[];
  addToCart: (line: CartLine) => void;
  removeLine: (productSlug: string, colorName: string, size: string) => void;
  updateQuantity: (
    productSlug: string,
    colorName: string,
    size: string,
    quantity: number
  ) => void;
  clearCart: () => void;
  count: number;
}

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "montreve_cart_v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // One-time hydration from localStorage after mount, to keep the
    // server-rendered and first client render identical and avoid a
    // hydration mismatch.
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (raw) setLines(JSON.parse(raw));
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      // ignore
    }
  }, [lines, hydrated]);

  const addToCart = useCallback((line: CartLine) => {
    setLines((prev) => {
      const existing = prev.find(
        (l) =>
          l.productSlug === line.productSlug &&
          l.colorName === line.colorName &&
          l.size === line.size
      );
      if (existing) {
        return prev.map((l) =>
          l === existing ? { ...l, quantity: l.quantity + line.quantity } : l
        );
      }
      return [...prev, line];
    });
  }, []);

  const removeLine = useCallback(
    (productSlug: string, colorName: string, size: string) => {
      setLines((prev) =>
        prev.filter(
          (l) =>
            !(
              l.productSlug === productSlug &&
              l.colorName === colorName &&
              l.size === size
            )
        )
      );
    },
    []
  );

  const updateQuantity = useCallback(
    (productSlug: string, colorName: string, size: string, quantity: number) => {
      setLines((prev) =>
        prev
          .map((l) =>
            l.productSlug === productSlug &&
            l.colorName === colorName &&
            l.size === size
              ? { ...l, quantity }
              : l
          )
          .filter((l) => l.quantity > 0)
      );
    },
    []
  );

  const clearCart = useCallback(() => setLines([]), []);

  const count = useMemo(
    () => lines.reduce((sum, l) => sum + l.quantity, 0),
    [lines]
  );

  const value = useMemo(
    () => ({ lines, addToCart, removeLine, updateQuantity, clearCart, count }),
    [lines, addToCart, removeLine, updateQuantity, clearCart, count]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
