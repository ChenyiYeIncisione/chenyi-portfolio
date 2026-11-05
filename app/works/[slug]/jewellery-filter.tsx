"use client";

import { useState } from "react";
import Link from "next/link";
import type { JewelleryArtwork } from "./jewellery-archive";

type Category = "Rings" | "Wedding Bands" | "Pendants & Necklaces" | "Earrings" | "Others";

const categories: Category[] = [
  "Rings",
  "Wedding Bands",
  "Pendants & Necklaces",
  "Earrings",
  "Others",
];

export default function JewelleryFilter({ artworks }: { artworks: JewelleryArtwork[] }) {
  const [active, setActive] = useState<Category>("Rings");
  const visible = [...artworks]
    .filter((artwork) => artwork.category === active)
    .sort((a, b) => a.order - b.order);

  return (
    <>
      <nav aria-label="Jewellery categories" style={{ display: "flex", flexWrap: "wrap", gap: "10px 22px", margin: "28px 0 38px" }}>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
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
            <Link key={artwork.slug} className="artwork-index-card" href={`/works/jewellery/${artwork.slug}`}>
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
