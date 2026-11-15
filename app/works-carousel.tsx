"use client";

import Link from "next/link";
import { useRef } from "react";
import { plateArchive } from "./works/[slug]/plate-archive";
import { jewelleryArchive } from "./works/[slug]/jewellery-archive";
import { decorativeArchive } from "./works/[slug]/decorative-archive";
import { otherWorksArchive } from "./works/[slug]/other-works-archive";

type Item = { slug: string; title: string; number: string; year: string; image: string };
type Group = { label: string; path: string; items: Item[] };

const groups: Group[] = [
  {
    label: "Engraved Plates",
    path: "engraved-plates",
    items: [
      { slug: "laika-space-dog", title: "Laika, the Space Dog", number: "No. 155", year: "2026", image: "/images/laika-01.jpg" },
      ...plateArchive.map((a) => ({ slug: a.slug, title: a.title, number: a.number, year: a.year, image: a.images[0] || "" })),
    ],
  },
  {
    label: "Fine Jewellery",
    path: "jewellery",
    items: [...jewelleryArchive].sort((a, b) => a.order - b.order).map((a) => ({ slug: a.slug, title: a.title, number: a.number, year: a.year, image: a.cover || a.images[0] || "" })),
  },
  {
    label: "Decorative Objects",
    path: "decorative-objects",
    items: [...decorativeArchive].sort((a, b) => a.order - b.order).map((a) => ({ slug: a.slug, title: a.title, number: a.number, year: a.year, image: a.cover || a.images[0] || "" })),
  },
  {
    label: "Other Works",
    path: "other-works",
    items: [...otherWorksArchive].sort((a, b) => a.order - b.order).map((a) => ({ slug: a.slug, title: a.title, number: a.number, year: a.year, image: a.cover || a.images[0] || "" })),
  },
];

function GalleryRow({ group, index }: { group: Group; index: number }) {
  const track = useRef<HTMLDivElement>(null);
  function move(direction: number) {
    const element = track.current;
    if (!element) return;
    const card = element.querySelector<HTMLElement>(".archive-slide");
    const distance = card ? card.getBoundingClientRect().width + 18 : 300;
    element.scrollBy({ left: direction * distance * 2, behavior: "smooth" });
  }
  return (
    <section className="archive-row" aria-label={group.label}>
      <div className="archive-row-heading">
        <div className="archive-row-name">
          <span className="archive-row-number">{String(index + 1).padStart(2, "0")}</span>
          <h3>{group.label}</h3>
          <span className="archive-row-count">{group.items.length} works</span>
        </div>
        <div className="archive-row-actions">
          <Link href={`/works/${group.path}`} className="archive-view-all">View all ↗</Link>
          <button type="button" onClick={() => move(-1)} aria-label={`Scroll ${group.label} left`}>←</button>
          <button type="button" onClick={() => move(1)} aria-label={`Scroll ${group.label} right`}>→</button>
        </div>
      </div>
      <div className="archive-track" ref={track} tabIndex={0} aria-label={`Scroll through ${group.label}`}>
        {group.items.filter((item) => item.image).map((item) => (
          <Link className="archive-slide" key={item.slug} href={`/works/${group.path}/${item.slug}`}>
            <div className="archive-slide-image">
              <img src={item.image} alt={item.title} loading="lazy" />
            </div>
            <div className="archive-slide-info">
              <span>{item.number} · {item.year}</span>
              <h4>{item.title}</h4>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function WorksCarousel() {
  return (
    <section className="archive-home" id="explore-works">
      <div className="archive-home-heading">
        <span className="archive-home-index">01 / SELECTED WORKS & STUDIES</span>
        <h2>Explore the Works</h2>
        <p>Selected works in hand engraving, jewellery, decorative objects and enamelling.</p>
      </div>
      {groups.map((group, index) => <GalleryRow key={group.path} group={group} index={index} />)}
    </section>
  );
}
