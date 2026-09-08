"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PRIMARY_NAV } from "@/lib/collections";
import { useCart } from "@/lib/cart-context";
import { useUI } from "@/lib/ui-context";
import MegaMenuPanel from "./MegaMenuPanel";
import MobileNav from "./MobileNav";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const { count } = useCart();
  const { setCartOpen, setSearchOpen, mobileNavOpen, setMobileNavOpen } = useUI();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !isHome || scrolled || activeMenu !== null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        solid
          ? "bg-snow/97 backdrop-blur border-b border-stone/25 text-espresso"
          : "bg-transparent text-snow"
      }`}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 lg:px-10">
        <div className="flex items-center gap-8 lg:w-1/3">
          <button
            aria-label="Open menu"
            className="flex flex-col gap-[5px] lg:hidden"
            onClick={() => setMobileNavOpen(true)}
          >
            <span className="block h-px w-6 bg-current" />
            <span className="block h-px w-6 bg-current" />
          </button>
          <nav className="hidden items-center gap-7 text-[12px] tracking-luxury lg:flex">
            {PRIMARY_NAV.map((item) => (
              <div
                key={item.label}
                onMouseEnter={() => setActiveMenu(item.mega ? item.label : null)}
              >
                <Link
                  href={item.href}
                  className="relative pb-1 uppercase transition-opacity hover:opacity-60"
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>
        </div>

        <Link
          href="/"
          className="font-serif text-[22px] tracking-luxury-lg lg:w-1/3 lg:text-center"
        >
          MONTREVE
        </Link>

        <div className="flex items-center justify-end gap-6 text-[11px] tracking-luxury lg:w-1/3">
          <button
            className="hidden uppercase transition-opacity hover:opacity-60 sm:inline"
            onClick={() => setSearchOpen(true)}
          >
            Search
          </button>
          <button
            aria-label="Search"
            className="sm:hidden"
            onClick={() => setSearchOpen(true)}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="8" cy="8" r="6" stroke="currentColor" />
              <line x1="12.4" y1="12.4" x2="17" y2="17" stroke="currentColor" />
            </svg>
          </button>
          <Link href="/account" className="hidden uppercase transition-opacity hover:opacity-60 sm:inline">
            Account
          </Link>
          <button
            className="uppercase transition-opacity hover:opacity-60"
            onClick={() => setCartOpen(true)}
          >
            Bag ({count})
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
          activeMenu ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {PRIMARY_NAV.filter((item) => item.mega).map((item) =>
          activeMenu === item.label && item.mega ? (
            <MegaMenuPanel key={item.label} data={item.mega} onClose={() => setActiveMenu(null)} />
          ) : null
        )}
      </div>

      <MobileNav open={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </header>
  );
}
