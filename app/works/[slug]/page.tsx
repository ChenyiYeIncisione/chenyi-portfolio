import Link from "next/link";
import { notFound } from "next/navigation";
import { works } from "../../data";
import { plateArchive } from "./plate-archive";
import { jewelleryArchive } from "./jewellery-archive";
import JewelleryFilter from "./jewellery-filter";

export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export default async function WorkCategory({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const w = works.find((x) => x.slug === slug);

  if (!w) notFound();

  return (
    <main className="interior detail">
      <Link className="breadcrumb" href="/works">
        ← All Works
      </Link>

      <div className="interior-head">
        <span className="index">WORKS / COLLECTION</span>
        <h1>{w.title}</h1>
        <p>{w.description}</p>
      </div>

      {slug === "engraved-plates" ? (
        <div className="artwork-index plate-three-column">
          {/* Existing artwork: Laika */}
          <Link
            className="artwork-index-card"
            href="/works/engraved-plates/laika-space-dog"
          >
            <div className="image-wrap">
              <img
                src="/images/laika-01.jpg"
                alt="Laika, the Space Dog — hand engraved copper plate"
              />
            </div>
            <span className="index">WORK NO. 155 · 2026</span>
            <h2>Laika, the Space Dog <span>↗</span></h2>
            <p>Copper · Hand-push engraving, burin</p>
          </Link>

          {plateArchive.map((artwork) => (
            <Link
              key={artwork.slug}
              className="artwork-index-card"
              href={`/works/engraved-plates/${artwork.slug}`}
            >
              <div className="image-wrap">
                {artwork.images.length > 0 ? (
                  <img
                    src={artwork.images[0]}
                    alt={`${artwork.title} — hand engraved ${artwork.material.toLowerCase()} plate`}
                  />
                ) : artwork.video ? (
                  <video
                    src={artwork.video}
                    muted
                    playsInline
                    autoPlay
                    loop
                    preload="metadata"
                    aria-label={`${artwork.title} — hand engraving video`}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                ) : null}
              </div>
              <span className="index">
                WORK {artwork.number.toUpperCase()} · {artwork.year}
              </span>
              <h2>{artwork.title} <span>↗</span></h2>
              <p>{artwork.material} · Hand-push engraving, burin</p>
            </Link>
          ))}
        </div>
      ) : slug === "jewellery" ? (
        <JewelleryFilter artworks={jewelleryArchive} />
      ) : (
        <>
          <div className="detail-image">
            <img src={w.image} alt={w.title + " — illustrative placeholder"} />
          </div>
          <div className="detail-info">
            <span>COLLECTION OVERVIEW</span>
            <div>
              <h2>Archive in progress</h2>
              <p>
                This category is ready for your own work photographs,
                artwork titles, materials, dates, process notes and
                detail views. The current photograph is an illustrative
                placeholder, not a documented work.
              </p>
              <Link className="quiet-link" href="/works">
                View all collections ↗
              </Link>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
