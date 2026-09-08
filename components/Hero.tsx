import Link from "next/link";
import SceneArt from "./SceneArt";

export default function Hero() {
  return (
    <section className="relative flex h-[92vh] min-h-[640px] w-full items-end overflow-hidden bg-espresso">
      <SceneArt
        seed="hero-st-moritz"
        dark
        figures={2}
        className="absolute inset-0 h-full w-full image-hover-scale"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/10 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-espresso/45 to-transparent" />
      <div className="relative z-10 w-full px-6 pb-16 text-snow sm:px-10 lg:pb-20">
        <p className="animate-fade-in text-[12px] uppercase tracking-luxury-lg text-snow/80">
          Winter 01
        </p>
        <h1 className="animate-fade-in mt-4 max-w-2xl font-serif text-5xl leading-[1.05] sm:text-7xl">
          A Higher
          <br />
          State of Living
        </h1>
        <p className="animate-fade-in mt-6 max-w-sm text-[15px] leading-relaxed text-snow/85">
          Luxury essentials for a colder, more meaningful season.
        </p>
        <Link
          href="/new-arrivals"
          className="animate-fade-in mt-8 inline-block border border-snow/70 px-8 py-4 text-[11px] uppercase tracking-luxury transition-colors hover:bg-snow hover:text-espresso"
        >
          Discover the Collection
        </Link>
        <p className="mt-14 text-[11px] uppercase tracking-luxury text-snow/60">
          St. Moritz, Switzerland
        </p>
      </div>
    </section>
  );
}
