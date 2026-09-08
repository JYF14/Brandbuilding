import Link from "next/link";
import { MegaMenuData } from "@/lib/collections";
import SceneArt from "./SceneArt";

export default function MegaMenuPanel({
  data,
  onClose,
}: {
  data: MegaMenuData;
  onClose: () => void;
}) {
  return (
    <div className="border-t border-stone/20 bg-snow">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 px-10 py-10 lg:grid-cols-[1fr_1fr_1fr_1.1fr]">
        <div>
          <Link
            href={data.featured.href}
            onClick={onClose}
            className="text-[11px] font-medium uppercase tracking-luxury text-espresso/90 hover:opacity-60"
          >
            {data.featured.label}
          </Link>
          <p className="mt-3 max-w-[220px] font-serif text-lg italic text-espresso/70">
            Winter 01, for {data.label.toLowerCase()}.
          </p>
        </div>
        {data.columns.map((col) => (
          <div key={col.heading}>
            <p className="mb-4 text-[11px] uppercase tracking-luxury text-taupe">
              {col.heading}
            </p>
            <ul className="space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="text-[13px] text-espresso/85 transition-opacity hover:opacity-55"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <Link
          href={data.href}
          onClick={onClose}
          className="group relative hidden aspect-[4/3] overflow-hidden lg:block"
        >
          <SceneArt
            seed={`mega-${data.label}`}
            kicker={data.label}
            caption="Discover the collection"
            figures={1}
            className="h-full w-full image-hover-scale"
          />
        </Link>
      </div>
    </div>
  );
}
