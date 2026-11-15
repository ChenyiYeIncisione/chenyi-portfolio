"use client";

import Link from "next/link";
import { useRef } from "react";
import { plateArchive } from "./works/[slug]/plate-archive";
import { jewelleryArchive } from "./works/[slug]/jewellery-archive";
import { decorativeArchive } from "./works/[slug]/decorative-archive";
import { otherWorksArchive } from "./works/[slug]/other-works-archive";

type Item = { slug: string; title: string; number: string; year: string; image: string };
type Group = { label: string; path: string; items: Item[] };

// Homepage curation: edit only these selections to change the featured works.
// The optional imageIndex is zero-based: 1 = second image, 4 = fifth image.
const selectedPlates = [
  { number: "No. 99", imageIndex: 1 },
  { number: "No. 159" },
  { number: "No. 122" },
  { number: "No. 82" },
  { number: "No. 47", imageIndex: 4 },
  { number: "No. 110" },
];

const selectedJewellery = [
  "JW-W-026",
  "JW-W-049",
  "JW-W-001",
  "JW-W-013",
  "JW-W-010",
  "JW-W-024",
];

const curatedPlates: Item[] = selectedPlates.flatMap(({ number, imageIndex }) => {
  const artwork = plateArchive.find((item) => item.number === number);
  if (!artwork) return [];
  return [{
    slug: artwork.slug,
    title: artwork.title,
    number: artwork.number,
    year: artwork.year,
    image: artwork.images[imageIndex ?? 0] || artwork.images[0] || "",
  }];
});

const curatedJewellery: Item[] = selectedJewellery.flatMap((number) => {
  const artwork = jewelleryArchive.find((item) => item.number === number);
  if (!artwork) return [];
  return [{
    slug: artwork.slug,
    title: artwork.title,
    number: artwork.number,
    year: artwork.year,
    image: artwork.cover || artwork.images[0] || "",
  }];
});

const groups: Group[] = [
  { label: "Engraved Plates", path: "engraved-plates", items: curatedPlates },
  { label: "Fine Jewellery", path: "jewellery", items: curatedJewellery },
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
          <span className="archive-row-count">{group.items.length} selected</span>
        </div>
        <div className="archive-row-actions">
          <Link href={`/works/${group.path}`} className="archive-view-all">View all ↗</Link>
          <button type="button" onClick={() => move(-1)} aria-label={`Scroll ${group.label} left`}>←</button>
          <button type="button" onClick={() => move(1)} aria-label={`Scroll ${group.label} right`}>→</button>
        </div>
      </div>
      <div className="archive-track" ref={track} tabIndex={0} aria-label={`Scroll through ${group.label}`}>
        {group.items.filter((item) => item.image).slice(0, 6).map((item) => (
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
      <style>{`
/* Homepage gallery refinements: smaller headings, larger artworks, six per category */
.archive-home{padding-top:64px}
.archive-home-heading{margin-bottom:44px}
.archive-home-heading h2{font-size:clamp(46px,5vw,70px);line-height:1.05;margin:12px 0 12px}
.archive-home-heading p{font-size:clamp(17px,1.8vw,22px)}
.archive-row-name h3{font-size:clamp(27px,2.8vw,37px)}
.archive-row{margin-bottom:54px}
.archive-track{gap:20px}
.archive-slide{flex:0 0 clamp(260px,29vw,460px)}
.archive-slide-image{height:clamp(290px,32vw,480px)}
@media(max-width:700px){
  .archive-home{padding-top:48px}
  .archive-home-heading{margin-bottom:32px}
  .archive-home-heading h2{font-size:clamp(40px,10vw,54px)}
  .archive-home-heading p{font-size:17px}
  .archive-row-name h3{font-size:26px}
  .archive-track{gap:14px}
  .archive-slide{flex-basis:78vw}
  .archive-slide-image{height:86vw;max-height:430px}
}
`}</style>
    </section>
  );
}
