import { Metadata } from "next";
import Link from "next/link";
import EditorialArt from "@/components/EditorialArt";
import { ALPINE_STORIES } from "@/lib/collections";
import { placeToEditorialKey } from "@/lib/editorial-images";

export const metadata: Metadata = {
  title: "Journal — MONTREVE",
  description: "Stories from the MONTREVE world — St. Moritz, Megève, Gstaad and Courchevel.",
};

const ARTICLES = [
  {
    ...ALPINE_STORIES[0],
    excerpt:
      "At 1,822 metres, the light changes everything. A study of St. Moritz in winter, and the wardrobe it demands.",
  },
  {
    ...ALPINE_STORIES[1],
    excerpt:
      "Before the village wakes, Megève belongs to the few. Coffee on the terrace, frost on the pines.",
  },
  {
    ...ALPINE_STORIES[2],
    excerpt:
      "Gstaad has never needed to prove itself. A conversation on restraint, altitude and the pieces that last.",
  },
  {
    ...ALPINE_STORIES[3],
    excerpt:
      "1850 metres above sea level, Courchevel's architecture of wood and stone shaped this season's outerwear.",
  },
];

export default function JournalPage() {
  return (
    <div className="pb-24 pt-32">
      <div className="px-6 pb-14 text-center lg:px-10">
        <p className="text-[11px] uppercase tracking-luxury-lg text-taupe">The Journal</p>
        <h1 className="mt-4 font-serif text-4xl sm:text-5xl">Stories from Higher Places</h1>
        <p className="mx-auto mt-4 max-w-md text-sm text-espresso/65">
          Notes on craft, material and the alpine world MONTREVE calls home.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-14 px-6 sm:grid-cols-2 lg:px-10">
        {ARTICLES.map((article) => (
          <Link key={article.place} href="/journal" className="group block">
            <div className="relative aspect-[4/3] overflow-hidden bg-espresso">
              <EditorialArt
                editorialKey={placeToEditorialKey(article.place as "St. Moritz" | "Megève" | "Gstaad" | "Courchevel")}
                seed={`journal-${article.place}`}
                dark
                figures={1}
                className="h-full w-full image-hover-scale"
              />
            </div>
            <p className="mt-5 text-[11px] uppercase tracking-luxury text-taupe">{article.place}</p>
            <p className="mt-1 font-serif text-2xl italic">{article.title}</p>
            <p className="mt-3 text-[13px] leading-relaxed text-espresso/65">{article.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
