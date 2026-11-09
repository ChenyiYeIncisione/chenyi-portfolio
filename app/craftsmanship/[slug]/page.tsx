
import Link from "next/link";
import { notFound } from "next/navigation";
import { crafts } from "../../data";

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
          <Link
            className="breadcrumb"
            href="/craftsmanship"
          >
            ← Craftsmanship
          </Link>
          <span className="index">
            CRAFTSMANSHIP / 01
          </span>
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
            <span className="index">
              01 / THE CRAFT
            </span>

            <div className="tools-page-rule" />

            <p>
              Each hand engraving tool is individually
              shaped, ground and sharpened to meet
              specific technical requirements. High-speed
              steel gravers are prepared with precise
              cutting geometries and adapted to different
              engraving techniques, ensuring optimal
              control, accuracy and consistency throughout
              the hand-push engraving process.
            </p>
          </div>
        </section>
      </main>
    );
  }

  const steps = [
    "Drawing & Planning",
    "Surface Preparation",
    "Hand-Push Engraving",
    "Enamelling & Finishing",
  ];

  return (
    <main className="interior detail">
      <Link
        className="breadcrumb"
        href="/craftsmanship"
      >
        ← Craftsmanship
      </Link>

      <div className="interior-head">
        <span className="index">
          CRAFTSMANSHIP / PROCESS
        </span>
        <h1>{c.title}</h1>
        <p>{c.description}</p>
      </div>

      <div className="detail-image">
        <img src={c.image} alt={c.title} />
      </div>

      <div className="steps">
        {steps.map((s, i) => (
          <div key={s}>
            <span>0{i + 1}</span>
            <h2>{s}</h2>
            <p>
              Photographs, notes and process videos can
              be added here as the archive grows.
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
