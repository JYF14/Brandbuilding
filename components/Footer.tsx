import Link from "next/link";

const COLUMNS = [
  {
    heading: "Customer Care",
    links: [
      { label: "Contact", href: "/journal" },
      { label: "Delivery & Returns", href: "/journal" },
      { label: "Size Guide", href: "/journal" },
      { label: "Care Guide", href: "/journal" },
      { label: "FAQ", href: "/journal" },
    ],
  },
  {
    heading: "Montreve",
    links: [
      { label: "Our Story", href: "/journal" },
      { label: "Materials", href: "/cashmere" },
      { label: "Journal", href: "/journal" },
      { label: "Careers", href: "/journal" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "/journal" },
      { label: "Terms", href: "/journal" },
      { label: "Cookies", href: "/journal" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-stone/25 bg-snow px-6 pb-10 pt-16 lg:px-10">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-2 gap-10 pb-16 sm:grid-cols-3 lg:grid-cols-5">
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <p className="mb-5 text-[11px] uppercase tracking-luxury text-taupe">
                {col.heading}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-espresso/85 transition-opacity hover:opacity-55"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-2 sm:col-span-1">
            <p className="mb-5 text-[11px] uppercase tracking-luxury text-taupe">Follow</p>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[13px] text-espresso/85 hover:opacity-55">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-[13px] text-espresso/85 hover:opacity-55">
                  Pinterest
                </a>
              </li>
            </ul>
            <div className="mt-8 text-[13px] text-espresso/85">
              <p>Netherlands</p>
              <p className="text-espresso/55">EUR €</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 border-t border-stone/25 pt-8 sm:flex-row sm:justify-between">
          <span className="font-serif text-lg tracking-luxury-lg">MONTREVE</span>
          <p className="text-center text-[11px] uppercase tracking-luxury text-espresso/50">
            Made for higher places.
          </p>
          <p className="text-[11px] text-espresso/50">© {new Date().getFullYear()} MONTREVE</p>
        </div>
      </div>
    </footer>
  );
}
