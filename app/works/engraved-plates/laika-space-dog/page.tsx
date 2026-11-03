import Link from 'next/link';
export default function LaikaPage(){return <main className="interior artwork-page">
  <Link className="breadcrumb" href="/works/engraved-plates">← Engraved Plates</Link>
  <div className="artwork-head"><div><span className="index">WORK NO. 136 / ENGRAVED PLATES</span><h1>Laika, <em>the Space Dog</em></h1><p>Traditional Florentine Hand Engraving</p></div><span className="artwork-year">2026</span></div>
  <figure className="artwork-hero"><img src="/images/laika-01.jpg" alt="Laika, the Space Dog — hand-engraved copper plate displayed on a dark surface"/><figcaption>01 / Overall view</figcaption></figure>
  <div className="artwork-info"><div><span className="index">THE WORK</span><p>In 1957, Laika became the first animal to orbit the Earth aboard Sputnik 2. Her journey marked a historic moment in space exploration, yet it was a journey from which she would never return.</p><p>This hand-engraved copper plate is a tribute to Laika, a small and courageous pioneer whose story deserves to be remembered. Through delicate burin-cut lines, the work captures her quiet presence in an astronaut's suit, honouring both her bravery and her sacrifice.</p>
<p style={{
  fontStyle: "italic",
  marginTop: "24px",
  color: "#76695D"
}}>
  For the little hero who travelled among the stars
  and never came home.
</p>
</div><dl><div><dt>Year</dt><dd>2026</dd></div><div><dt>Material</dt><dd>Copper</dd></div><div><dt>Technique</dt><dd>Traditional hand-push engraving with burin</dd></div><div><dt>Artist</dt><dd>Chenyi Ye</dd></div></dl></div>
  <div className="artwork-gallery"><figure><img src="/images/laika-02.jpg" alt="Angled detail of hand engraved Laika astronaut on copper"/><figcaption>02 / Engraved detail</figcaption></figure><figure><img src="/images/laika-03.jpg" alt="Full copper plate against a warm neutral background"/><figcaption>03 / Details</figcaption></figure></div>
  <Link className="breadcrumb" href="/works/engraved-plates">← Back to Engraved Plates</Link>
</main>}
