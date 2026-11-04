
import Link from "next/link";
import { notFound } from "next/navigation";
import { plateArchive } from "../../[slug]/plate-archive";

type Props = {
  params: Promise<{ artwork: string }>;
};

export function generateStaticParams() {
  return plateArchive.map((work) => ({
    artwork: work.slug,
  }));
}

export default async function PlateDetailPage({ params }: Props) {
  const { artwork } = await params;
  const work = plateArchive.find((item) => item.slug === artwork);

  if (!work) notFound();

  const [mainImage, ...detailImages] = work.images;
  const isNumberOnly = work.title === work.number;

  return (
    <main className="interior artwork-page">
      <Link
        className="breadcrumb"
        href="/works/engraved-plates"
      >
        ← Engraved Plates
      </Link>

      <div className="artwork-head">
        <div>
          <span className="index">
            WORK {work.number.toUpperCase()} / ENGRAVED PLATES
          </span>

          <h1>{work.title}</h1>

          <p>Traditional Florentine Hand Engraving</p>
        </div>

        <span className="artwork-year">{work.year}</span>
      </div>

      <figure className="artwork-hero">
        <img
          src={mainImage}
          alt={`${work.title} — hand-engraved ${work.material}`}
        />
        <figcaption>01 / Overall view</figcaption>
      </figure>

      <div className="artwork-info">
        <div>
          <span className="index">THE WORK</span>

          {work.description?.length ? (
            work.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))
          ) : (
            <>
              <p>
                {isNumberOnly
                  ? `A traditional Florentine hand-engraved work in ${work.material}, created in ${work.year}.`
                  : `${work.title} is a hand-engraved work in ${work.material}, created in ${work.year}, using traditional Florentine engraving techniques.`}
              </p>
              <p>
                The composition is executed by hand using a
                traditional burin, with each line carefully
                cut into the metal surface.
              </p>
            </>
          )}
        </div>

        <dl>
          <div>
            <dt>Year</dt>
            <dd>{work.year}</dd>
          </div>

          <div>
            <dt>Material</dt>
            <dd>{work.material}</dd>
          </div>

          <div>
            <dt>Technique</dt>
            <dd>{work.technique}</dd>
          </div>

          <div>
            <dt>Artist</dt>
            <dd>{work.artist}</dd>
          </div>
        </dl>
      </div>

      {work.video && (
        <figure className="artwork-hero">
          <video
            controls
            preload="metadata"
            playsInline
            style={{
              display: "block",
              width: "100%",
              height: "auto",
            }}
          >
            <source src={work.video} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
          <figcaption>02 / Process &amp; Details — Film</figcaption>
        </figure>
      )}

      {detailImages.length > 0 && (
        <div className="artwork-gallery">
          {detailImages.map((src, index) => (
            <figure key={src}>
              <img
                src={src}
                alt={`${work.title} — engraved detail ${index + 1}`}
              />
              <figcaption>
                {String(index + 2).padStart(2, "0")} / Details
              </figcaption>
            </figure>
          ))}
        </div>
      )}

      <Link
        className="breadcrumb"
        href="/works/engraved-plates"
      >
        ← Back to Engraved Plates
      </Link>
    </main>
  );
}
