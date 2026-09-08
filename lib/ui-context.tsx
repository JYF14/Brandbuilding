"use client";

import { createContext, useContext, useMemo, useState } from "react";

interface UIContextValue {
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  mobileNavOpen: boolean;
  setMobileNavOpen: (open: boolean) => void;
  justAdded: string | null;
  announceAdded: (name: string) => void;
}

const UIContext = createContext<UIContextValue | null>(null);

export function UIProvider({ children }: { children: React.ReactNode }) {
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [justAdded, setJustAdded] = useState<string | null>(null);

  const announceAdded = (name: string) => {
    setJustAdded(name);
    setCartOpen(true);
    window.setTimeout(() => setJustAdded(null), 3000);
  };

  const value = useMemo(
    () => ({
      cartOpen,
      setCartOpen,
      searchOpen,
      setSearchOpen,
      mobileNavOpen,
      setMobileNavOpen,
      justAdded,
      announceAdded,
    }),
    [cartOpen, searchOpen, mobileNavOpen, justAdded]
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUI() {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error("useUI must be used within UIProvider");
  return ctx;
}
