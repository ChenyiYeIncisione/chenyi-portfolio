
const education = [
  {
    year: "2023–2024",
    institution: "Le Arti Orafe, Florence",
    qualification: "Specialist Training in Hand Engraving",
    detail:
      "Over 300 hours of plate engraving under Giuseppe Casale and 160 hours of jewellery engraving under Filippo Vinattieri.",
  },
  {
    year: "2015–2018",
    institution: "Istituto Europeo di Design, Milan",
    qualification: "BA Jewellery Design",
    detail: "",
  },
];

const experience = [
  {
    year: "2021–Present",
    institution: "Celunary Atelier",
    qualification:
      "Founder · Jewellery Designer · Hand Engraver · Enameller",
  },
  {
    year: "2020–2021",
    institution: "Hengxin Diamond & Co. (I Do)",
    qualification: "Fine Jewellery Designer",
  },
  {
    year: "2018–2019",
    institution: "Xingsi Art and Craft",
    qualification: "Metalsmithing Tutor",
  },
];

const exhibitions = [
  {
    year: "2026",
    institution: "Asia Art & Craft Fair, Singapore",
    qualification:
      "Exhibition and live demonstrations of traditional hand engraving",
  },
  {
    year: "2024",
    institution: "ROTOR Contemporary Art Exhibition, Paris",
    qualification:
      "Le Carrousel du Louvre · Beijing Opera Collection",
  },
  {
    year: "2023",
    institution:
      "87th Mostra Internazionale dell’Artigianato (MIDA), Florence",
    qualification:
      "Live demonstration of traditional hand engraving with Giuseppe Casale",
  },
];

export default function About() {
  return (
    <main className="interior about-page artist-page">
      <header className="artist-header">
        <span className="index">THE ARCHIVE / 03</span>

        <h1>About the Artist</h1>

        <p className="artist-subtitle">
          Hand Engraver · Enamel Artist · Jewellery Designer
        </p>
      </header>

      <section className="artist-section">
        <div className="artist-section-label">01 / PROFILE</div>

        <div className="artist-profile">
          <p>
            Chenyi Ye is a hand engraver, enamel artist and
            jewellery designer specialising in traditional
            Florentine engraving. Her practice encompasses
            ornamental and figurative engraving, enamelling
            and contemporary jewellery design.
          </p>

          <p>
            As the founder of Celunary Atelier, she has
            designed and hand-engraved over 300 bespoke
            jewellery pieces, working across precious
            metals and decorative objects.
          </p>
        </div>
      </section>

      <section className="artist-section">
        <div className="artist-section-label">
          02 / EDUCATION & SPECIALIST TRAINING
        </div>

        <div className="artist-timeline">
          {education.map((item) => (
            <div className="artist-timeline-row" key={item.institution}>
              <span className="artist-year">{item.year}</span>

              <div className="artist-timeline-content">
                <h2>{item.institution}</h2>
                <p className="artist-role">{item.qualification}</p>
                {item.detail && (
                  <p className="artist-detail">{item.detail}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="artist-section">
        <div className="artist-section-label">03 / PRACTICE</div>

        <div className="artist-practice-grid">
          <div className="artist-practice-item">
            <h2>Hand Engraving</h2>
            <p>
              Florentine hand-push engraving · Damasco ·
              Seta · Granito · Traforo · Ornamental &
              Figurative Engraving
            </p>
          </div>

          <div className="artist-practice-item">
            <h2>Enamelling</h2>
            <p>
              Cloisonné · Champlevé · Basse-taille ·
              Hand Engraving beneath Transparent Enamel
            </p>
          </div>
        </div>
      </section>

      <section className="artist-section">
        <div className="artist-section-label">
          04 / PROFESSIONAL EXPERIENCE
        </div>

        <div className="artist-timeline">
          {experience.map((item) => (
            <div className="artist-timeline-row" key={item.institution}>
              <span className="artist-year">{item.year}</span>

              <div className="artist-timeline-content">
                <h2>{item.institution}</h2>
                <p className="artist-role">{item.qualification}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="artist-section">
        <div className="artist-section-label">
          05 / SELECTED EXHIBITIONS & DEMONSTRATIONS
        </div>

        <div className="artist-timeline">
          {exhibitions.map((item) => (
            <div className="artist-timeline-row" key={item.institution}>
              <span className="artist-year">{item.year}</span>

              <div className="artist-timeline-content">
                <h2>{item.institution}</h2>
                <p className="artist-role">{item.qualification}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="artist-section artist-contact" id="contact">
        <div className="artist-section-label">06 / CONTACT</div>

        <h2>Get in Touch</h2>

        <p>
          For professional enquiries, collaborations and
          opportunities in hand engraving, enamelling
          and fine jewellery.
        </p>
<a
  className="artist-contact-email"
  href="mailto:y.olga010@gmail.com"
>
  y.olga010@gmail.com ↗
</a>

      </section>
    </main>
  );
}
