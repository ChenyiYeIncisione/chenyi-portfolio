
import Image from "next/image";
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

  return (
    <main
      style={{
        maxWidth: "1080px",
        margin: "0 auto",
        padding: "72px 24px 120px",
      }}
    >
      <Link
        href="/works/engraved-plates"
        style={{
          display: "inline-block",
          marginBottom: "64px",
          fontSize: "12px",
          letterSpacing: "0.12em",
          textDecoration: "none",
          color: "inherit",
          opacity: 0.7,
        }}
      >
        ← ENGRAVED PLATES
      </Link>

      <header style={{ textAlign: "center", marginBottom: "48px" }}>
        <p
          style={{
            fontSize: "12px",
            letterSpacing: "0.18em",
            opacity: 0.6,
            marginBottom: "16px",
          }}
        >
          {work.number} · {work.year}
        </p>

        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 400,
            lineHeight: 1.2,
          }}
        >
          {work.title}
        </h1>
      </header>

      <section style={{ maxWidth: "480px", margin: "0 auto 72px" }}>
        <Image
          src={mainImage}
          alt={`${work.title} — main view`}
          width={1200}
          height={1400}
          sizes="(max-width: 520px) 100vw, 480px"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            objectFit: "contain",
          }}
          priority
        />
      </section>

      {detailImages.length > 0 && (
        <section style={{ marginBottom: "88px" }}>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "24px",
              fontWeight: 400,
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            Details
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
              gap: "20px",
              alignItems: "start",
            }}
          >
            {detailImages.map((src, index) => (
              <Image
                key={src}
                src={src}
                alt={`${work.title} — detail ${index + 1}`}
                width={1000}
                height={1000}
                sizes="(max-width: 640px) 100vw, 50vw"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            ))}
          </div>
        </section>
      )}

      <section
        style={{
          maxWidth: "480px",
          margin: "0 auto",
          borderTop: "1px solid rgba(100, 90, 75, 0.25)",
          paddingTop: "32px",
        }}
      >
        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "24px",
            fontWeight: 400,
            marginBottom: "28px",
          }}
        >
          Artwork Information
        </h2>

        {[
          ["Artist", work.artist],
          ["Year", work.year],
          ["Material", work.material],
          ["Technique", work.technique],
        ].map(([label, value]) => (
          <div
            key={label}
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "24px",
              padding: "13px 0",
              borderBottom: "1px solid rgba(100, 90, 75, 0.12)",
              fontSize: "13px",
            }}
          >
            <span style={{ opacity: 0.6 }}>{label}</span>
            <span style={{ textAlign: "right" }}>{value}</span>
          </div>
        ))}
      </section>
    </main>
  );
}

