"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { JewelleryArtwork } from "./jewellery-archive";

type Category = "Wedding Bands" | "Rings" | "Pendants & Necklaces" | "Others";

const categories: Category[] = [
  "Wedding Bands",
  "Rings",
  "Pendants & Necklaces",
  "Others",
];

const storageKey = "jewellery-return-position";

function isCategory(value: string | null): value is Category {
  return categories.some((category) => category === value);
}

export default function JewelleryFilter({ artworks }: { artworks: JewelleryArtwork[] }) {
  const [active, setActive] = useState<Category>("Wedding Bands");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const category = query.get("category");
    if (isCategory(category)) setActive(category);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const query = new URLSearchParams(window.location.search);
    const focus = query.get("focus");
    const category = query.get("category");
    if (!focus || category !== active) return;

    const frame = window.requestAnimationFrame(() => {
      let saved: { slug?: string; category?: string; y?: number } | null = null;
      try {
        const raw = window.sessionStorage.getItem(storageKey);
        saved = raw ? JSON.parse(raw) : null;
      } catch {
        // Browsers may disable session storage; the card anchor still works.
      }
      if (saved?.slug === focus && saved.category === active && typeof saved.y === "number") {
        window.scrollTo({ top: saved.y, behavior: "instant" });
      } else {
        document.getElementById(`jewellery-${focus}`)?.scrollIntoView({ block: "center" });
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [active, ready]);

  const visible = [...artworks]
    .filter((artwork) =>
      active === "Others"
        ? artwork.category === "Others" || artwork.category === "Earrings"
        : artwork.category === active
    )
    .sort((a, b) => a.order - b.order);

  return (
    <>
      <nav aria-label="Jewellery categories" style={{ display: "flex", flexWrap: "wrap", gap: "10px 22px", margin: "28px 0 38px" }}>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => {
              setActive(category);
              window.history.replaceState(null, "", `/works/jewellery?category=${encodeURIComponent(category)}`);
            }}
            aria-pressed={active === category}
            style={{
              border: "none",
              borderBottom: active === category ? "1px solid currentColor" : "1px solid transparent",
              background: "transparent",
              padding: "0 0 7px",
              color: "inherit",
              opacity: active === category ? 1 : 0.58,
              cursor: "pointer",
              font: "inherit",
              fontSize: "0.82rem",
              letterSpacing: "0.02em",
            }}
          >
            {category}
          </button>
        ))}
      </nav>

      {visible.length > 0 ? (
        <div className="artwork-index plate-three-column">
          {visible.map((artwork) => (
            <Link
              key={artwork.slug}
              id={`jewellery-${artwork.slug}`}
              className="artwork-index-card"
              href={`/works/jewellery/${artwork.slug}?category=${encodeURIComponent(active)}`}
              onClick={() => {
                try {
                  window.sessionStorage.setItem(storageKey, JSON.stringify({
                    slug: artwork.slug,
                    category: active,
                    y: window.scrollY,
                  }));
                } catch {
                  // Navigation still works without storage.
                }
              }}
            >
              <div className="image-wrap">
                {artwork.cover || artwork.images[0] ? (
                  <img src={artwork.cover || artwork.images[0]} alt={`${artwork.title} — ${artwork.material}`} />
                ) : artwork.videos[0] ? (
                  <video
                    src={artwork.videos[0]}
                    muted
                    playsInline
                    autoPlay
                    loop
                    preload="metadata"
                    aria-label={`${artwork.title} — jewellery video`}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                ) : null}
              </div>
              <span className="index">{artwork.number.toUpperCase()} · {artwork.year}</span>
              <h2>{artwork.title} <span>↗</span></h2>
              <p>{artwork.material} · {artwork.category}</p>
            </Link>
          ))}
        </div>
      ) : (
        <p style={{ margin: "32px 0", opacity: 0.65 }}>Archive in progress — works will be added soon.</p>
      )}
    </>
  );
}
