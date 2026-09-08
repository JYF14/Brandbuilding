import Link from "next/link";
import SceneArt from "./SceneArt";

export default function EditorialBanner({
  seed,
  title,
  location,
  href = "/new-arrivals",
  cta = "Discover the Collection",
}: {
  seed: string;
  title: string;
  location: string;
  href?: string;
  cta?: string;
}) {
  return (
    <section className="relative flex h-[80vh] min-h-[520px] w-full items-end overflow-hidden bg-espresso">
      <SceneArt seed={seed} dark figures={1} className="absolute inset-0 h-full w-full image-hover-scale" />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/65 via-espresso/5 to-transparent" />
      <div className="relative z-10 w-full px-6 pb-16 text-snow sm:px-10">
        <h2 className="max-w-xl font-serif text-4xl leading-[1.1] sm:text-6xl">{title}</h2>
        <p className="mt-5 text-[11px] uppercase tracking-luxury text-snow/70">{location}</p>
        <Link
          href={href}
          className="mt-8 inline-block border border-snow/70 px-7 py-3.5 text-[11px] uppercase tracking-luxury transition-colors hover:bg-snow hover:text-espresso"
        >
          {cta}
        </Link>
      </div>
    </section>
  );
}
