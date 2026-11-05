import Link from "next/link";
import { notFound } from "next/navigation";
import { decorativeArchive } from "../../[slug]/decorative-archive";

type Props = { params: Promise<{ artwork: string }> };

export function generateStaticParams() {
  return decorativeArchive.map((work) => ({ artwork: work.slug }));
}

export default async function DecorativeDetailPage({ params }: Props) {
  const { artwork } = await params;
  const work = decorativeArchive.find((item) => item.slug === artwork);
  if (!work) notFound();

  const [mainImage, ...detailImages] = work.images;
  const videos = work.videos || [];

  return (
    <main className="interior artwork-page">
      <Link className="breadcrumb" href="/works/decorative-objects">← Decorative Objects</Link>

      <div className="artwork-head">
        <div>
          <span className="index">{work.number.toUpperCase()} / {work.category.toUpperCase()}</span>
          <h1>{work.title}</h1>
          <p>Decorative Objects &amp; Traditional Hand Engraving</p>
        </div>
        <span className="artwork-year">{work.year}</span>
      </div>

      {mainImage && (
        <figure className="artwork-hero">
          <img src={mainImage} alt={`${work.title} — ${work.material}`} />
          <figcaption>01 / Overall view</figcaption>
        </figure>
      )}

      <div className="artwork-info">
        <div>
          <span className="index">THE WORK</span>
          {work.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <dl>
          <div><dt>Year</dt><dd>{work.year}</dd></div>
          <div><dt>Material</dt><dd>{work.material}</dd></div>
          <div><dt>Technique</dt><dd>{work.technique}</dd></div>
          <div><dt>Artist</dt><dd>{work.artist}</dd></div>
        </dl>
      </div>

      {videos.map((src, index) => (
        <figure className="artwork-hero" key={src}>
          <video
            controls
            playsInline
            preload="metadata"
            style={{ display: "block", width: "100%", height: "auto" }}
          >
            <source src={src} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
          <figcaption>
            {String((mainImage ? 2 : 1) + index).padStart(2, "0")} / Film
          </figcaption>
        </figure>
      ))}

      {detailImages.length > 0 && (
        <div className="artwork-gallery">
          {detailImages.map((src, index) => (
            <figure key={src}>
              <img src={src} alt={`${work.title} — detail ${index + 1}`} />
              <figcaption>
                {String(index + videos.length + 2).padStart(2, "0")} / Details
              </figcaption>
            </figure>
          ))}
        </div>
      )}

      <Link className="breadcrumb" href="/works/decorative-objects">← Back to Decorative Objects</Link>
    </main>
  );
}
