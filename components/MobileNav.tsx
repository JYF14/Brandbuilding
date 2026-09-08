"use client";

import Link from "next/link";
import { useState } from "react";
import { PRIMARY_NAV } from "@/lib/collections";

export default function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div
      className={`fixed inset-0 z-50 bg-snow text-espresso transition-transform duration-500 lg:hidden ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between px-5 py-5">
        <span className="font-serif text-xl tracking-luxury-lg">MONTREVE</span>
        <button aria-label="Close menu" onClick={onClose} className="text-2xl leading-none">
          &times;
        </button>
      </div>
      <nav className="flex flex-col px-5 py-4 text-[15px]">
        {PRIMARY_NAV.map((item) => (
          <div key={item.label} className="border-b border-stone/25">
            <button
              className="flex w-full items-center justify-between py-4 uppercase tracking-luxury"
              onClick={() =>
                item.mega
                  ? setExpanded(expanded === item.label ? null : item.label)
                  : onClose()
              }
            >
              <Link href={item.href} onClick={onClose}>
                {item.label}
              </Link>
              {item.mega && <span>{expanded === item.label ? "−" : "+"}</span>}
            </button>
            {item.mega && expanded === item.label && (
              <div className="grid grid-cols-2 gap-6 pb-6">
                {item.mega.columns.map((col) => (
                  <div key={col.heading}>
                    <p className="mb-2 text-[10px] uppercase tracking-luxury text-taupe">
                      {col.heading}
                    </p>
                    <ul className="space-y-2">
                      {col.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            onClick={onClose}
                            className="text-[13px] text-espresso/85"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
      <div className="px-5 py-6 text-[11px] uppercase tracking-luxury text-taupe">
        <Link href="/account" onClick={onClose} className="block py-2">
          Account
        </Link>
        <p className="pt-4 text-espresso/50 normal-case tracking-normal font-serif italic text-base">
          Made for higher places.
        </p>
      </div>
    </div>
  );
}
