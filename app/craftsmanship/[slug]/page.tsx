
import Link from "next/link";
import { notFound } from "next/navigation";
import { crafts } from "../../data";

const processFilms = [
  { title: "Merlion", src: "/videos/merlion.mp4" },
  { title: "Clarinet", src: "/videos/clarinet.mp4" },
  {
    title: "Nine-Coloured Deer",
    src: "/videos/ninecolordeer.mp4",
  },
  { title: "Lighter", src: "/videos/Lighter.mp4" },
  { title: "Ring", src: "/videos/ring.mp4" },
];

export function generateStaticParams() {
  return crafts.map((c) => ({ slug: c.slug }));
}

export default async function CraftDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = crafts.find((x) => x.slug === slug);

  if (!c) notFound();

  if (slug === "tools-preparation") {
    return (
      <main className="interior tools-page">
        <div className="tools-page-top">
          <Link className="breadcrumb" href="/craftsmanship">
            ← Craftsmanship
          </Link>
          <span className="index">CRAFTSMANSHIP / 01</span>
        </div>

        <header className="tools-page-heading">
          <h1>Tools &amp; Preparation</h1>
        </header>

        <section className="tools-page-content">
          <figure className="tools-page-photo">
            <img
              src="/images/tools.jpg"
              alt="Preparation of traditional hand engraving tools"
            />
          </figure>

          <div className="tools-page-copy">
            <span className="index">01 / THE CRAFT</span>
            <div className="tools-page-rule" />
            <p>
              Each hand engraving tool is individually shaped,
              ground and sharpened to meet specific technical
              requirements. High-speed steel gravers are prepared
              with precise cutting geometries and adapted to
              different engraving techniques, ensuring optimal
              control, accuracy and consistency throughout the
              hand-push engraving process.
            </p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="interior process-page">
      <div className="process-page-top">
        <Link className="breadcrumb" href="/craftsmanship">
          ← Craftsmanship
        </Link>
        <span className="index">CRAFTSMANSHIP / 02</span>
      </div>

      <header className="process-page-heading">
        <h1>The Making Process</h1>
        <p>
          Selected films documenting the making of
          individual works.
        </p>
      </header>

      <section className="process-films">
        <article className="process-featured">
          <video
            src={processFilms[0].src}
            controls
            playsInline
            preload="metadata"
            aria-label="Merlion making process"
          />
          <div className="process-film-caption">
            <h2>{processFilms[0].title}</h2>
            <span>01 / FILM</span>
          </div>
        </article>

        <div className="process-film-grid">
          {processFilms.slice(1).map((film, i) => (
            <article className="process-film" key={film.src}>
              <video
                src={film.src}
                controls
                playsInline
                preload="metadata"
                aria-label={`${film.title} making process`}
              />
              <div className="process-film-caption">
                <h2>{film.title}</h2>
                <span>
                  {String(i + 2).padStart(2, "0")} / FILM
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
