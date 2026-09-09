"use client";

import { useEffect, useRef, useState } from "react";
import SceneArt from "./SceneArt";
import { EditorialKey, editorialImagePath } from "@/lib/editorial-images";

interface EditorialArtProps {
  editorialKey: EditorialKey;
  seed: string;
  dark?: boolean;
  figures?: 0 | 1 | 2;
  kicker?: string;
  caption?: string;
  className?: string;
}

export default function EditorialArt({
  editorialKey,
  seed,
  dark = false,
  figures = 2,
  kicker,
  caption,
  className = "",
}: EditorialArtProps) {
  const [photoFailed, setPhotoFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const photoSrc = editorialImagePath(editorialKey);

  useEffect(() => {
    // See components/ProductArt.tsx: a fast local 404 can resolve before
    // React hydrates and attaches onError, so re-sync with the DOM
    // element's actual load state on mount and whenever the key changes.
    const el = imgRef.current;
    const alreadyFailed = Boolean(el && el.complete && el.naturalWidth === 0);
    setPhotoFailed(alreadyFailed);
  }, [photoSrc]);

  if (!photoFailed) {
    return (
      // Convention-based optional asset that may not exist yet — onError
      // falls back to the generated SceneArt placeholder below.
      // eslint-disable-next-line @next/next/no-img-element
      <img
        ref={imgRef}
        src={photoSrc}
        alt={caption || "MONTREVE alpine scene"}
        onError={() => setPhotoFailed(true)}
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }

  return (
    <SceneArt
      seed={seed}
      dark={dark}
      figures={figures}
      kicker={kicker}
      caption={caption}
      className={className}
    />
  );
}
