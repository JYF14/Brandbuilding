import Link from "next/link";
import Hero from "@/components/Hero";
import EditorialBanner from "@/components/EditorialBanner";
import Newsletter from "@/components/Newsletter";
import ProductCard from "@/components/ProductCard";
import ProductArt from "@/components/ProductArt";
import SceneArt from "@/components/SceneArt";
import { PRODUCTS, getProductBySlug } from "@/lib/products";
import { MATERIALS, ALPINE_STORIES } from "@/lib/collections";

const NEW_ARRIVALS = PRODUCTS.filter((p) => p.isNew).slice(0, 10);

const MATERIAL_SOURCE: Record<string, string> = {
  Cashmere: "megeve-cashmere-turtleneck",
  "Merino Wool": "arlberg-rollneck",
  Shearling: "courchevel-shearling-coat",
  "Brushed Wool": "st-moritz-wool-coat",
  Suede: "gstaad-suede-glove",
};

export default function HomePage() {
  return (
    <div>
      <Hero />

      {/* WOMEN / MEN */}
      <section className="grid grid-cols-1 sm:grid-cols-2">
        <Link href="/women" className="group relative block aspect-[3/4] overflow-hidden bg-espresso sm:aspect-auto sm:h-[75vh]">
          <SceneArt seed="home-women" dark={false} figures={1} className="absolute inset-0 h-full w-full image-hover-scale" />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/55 to-transparent" />
          <div className="absolute bottom-10 left-8 text-snow">
            <p className="font-serif text-3xl">Women</p>
            <p className="mt-1 text-[12px] uppercase tracking-luxury text-snow/80">Modern Elegance</p>
            <span className="mt-4 inline-block text-[11px] uppercase tracking-luxury underline underline-offset-4">
              Discover
            </span>
          </div>
        </Link>
        <Link href="/men" className="group relative block aspect-[3/4] overflow-hidden bg-espresso sm:aspect-auto sm:h-[75vh]">
          <SceneArt seed="home-men" dark={false} figures={1} className="absolute inset-0 h-full w-full image-hover-scale" />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/55 to-transparent" />
          <div className="absolute bottom-10 left-8 text-snow">
            <p className="font-serif text-3xl">Men</p>
            <p className="mt-1 text-[12px] uppercase tracking-luxury text-snow/80">Timeless Performance</p>
            <span className="mt-4 inline-block text-[11px] uppercase tracking-luxury underline underline-offset-4">
              Discover
            </span>
          </div>
        </Link>
      </section>

      {/* NEW ARRIVALS */}
      <section className="px-5 py-24 sm:px-8 lg:px-10">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-luxury-lg text-taupe">Winter 01</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">New Arrivals</h2>
          </div>
          <Link
            href="/new-arrivals"
            className="hidden text-[11px] uppercase tracking-luxury underline underline-offset-4 sm:block"
          >
            View all
          </Link>
        </div>
        <div className="rail -mx-5 flex snap-x gap-6 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10">
          {NEW_ARRIVALS.map((product) => (
            <div key={product.id} className="w-[62vw] shrink-0 snap-start sm:w-[30vw] lg:w-[22vw]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <Link
          href="/new-arrivals"
          className="mt-8 block text-center text-[11px] uppercase tracking-luxury underline underline-offset-4 sm:hidden"
        >
          View all
        </Link>
      </section>

      <EditorialBanner
        seed="home-courchevel"
        title="Made for Higher Places."
        location="Courchevel 1850, France"
        href="/new-arrivals"
      />

      {/* MATERIALS */}
      <section className="px-5 py-24 text-center sm:px-8 lg:px-10">
        <p className="text-[11px] uppercase tracking-luxury-lg text-taupe">The Finest Materials</p>
        <h2 className="mx-auto mt-4 max-w-xl font-serif text-3xl sm:text-4xl">
          Exceptional fibres selected for warmth, softness and longevity.
        </h2>
        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-5">
          {MATERIALS.map((m) => {
            const product = getProductBySlug(MATERIAL_SOURCE[m.name]);
            const image = product?.images.find((i) => i.shot === "material");
            return (
              <div key={m.name} className="text-left">
                {product && image && (
                  <ProductArt
                    product={product}
                    image={image}
                    colorHex={product.colors[0].hex}
                    colorName={product.colors[0].name}
                    hoverScale
                  />
                )}
                <p className="mt-3 text-[12px] uppercase tracking-luxury">{m.name}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ALPINE STORIES */}
      <section className="px-5 pb-24 sm:px-8 lg:px-10">
        <h2 className="mb-10 font-serif text-3xl sm:text-4xl">Alpine Stories</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ALPINE_STORIES.map((story) => (
            <Link key={story.place} href={story.href} className="group block">
              <div className="relative aspect-[3/4] overflow-hidden bg-espresso">
                <SceneArt
                  seed={`story-${story.place}`}
                  dark
                  figures={0}
                  className="h-full w-full image-hover-scale"
                />
              </div>
              <p className="mt-3 text-[11px] uppercase tracking-luxury text-taupe">{story.place}</p>
              <p className="font-serif text-lg italic">{story.title}</p>
            </Link>
          ))}
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
