"use client";

import { useState } from "react";

export default function Accordion({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-stone/25">
      <button
        className="flex w-full items-center justify-between py-4 text-left text-[11px] uppercase tracking-luxury"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {title}
        <span className="text-base font-light">{open ? "−" : "+"}</span>
      </button>
      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ${
          open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden text-[13px] leading-relaxed text-espresso/75">
          {children}
        </div>
      </div>
    </div>
  );
}
