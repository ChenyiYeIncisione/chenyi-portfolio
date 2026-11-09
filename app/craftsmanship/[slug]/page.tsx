
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
      <main className="interior detail">
        <Link className="breadcrumb" href="/craftsmanship">
          ← Craftsmanship
        </Link>

        <div className="interior-head">
          <span className="index">
            CRAFTSMANSHIP / PROCESS
          </span>
          <h1>{c.title}</h1>
        </div>

        <section className="tools-preparation-layout">
          <div className="tools-preparation-image">
            <img
              src="/images/tools.jpg"
              alt="Preparation and sharpening of hand engraving tools"
            />
          </div>

          <div className="tools-preparation-text">
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
      <Link className="breadcrumb" href="/craftsmanship">
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
