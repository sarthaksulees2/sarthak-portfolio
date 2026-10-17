
const certifications = [
  {
    number: "01",
    name: "Full Stack Java Development",
    provider: "NareshIT, Hyderabad",
    icon: "☕",
  },
  {
    number: "02",
    name: ".NET Fundamentals",
    provider: "LinkedIn Learning",
    icon: "⌘",
  },
  {
    number: "03",
    name: "Data Analytics",
    provider: "LinkedIn Learning",
    icon: "▥",
  },
  {
    number: "04",
    name: "AI Aware and Appreciate Badge with Certificate",
    provider: "Intel",
    icon: "✳",
  },
];

export default function Certifications() {
  return (
    <section
      className="section certifications-section"
      id="certifications"
    >
      <div className="section-heading">
        <p className="eyebrow">05 / CERTIFICATIONS</p>
        <h2>
          Learning beyond <span className="gradient-text">classrooms.</span>
        </h2>
        <p className="certifications-intro">
          Courses and certifications supporting my technical learning.
        </p>
      </div>

      <div className="certifications-grid">
        {certifications.map((item) => (
          <article
            className="certification-card"
            key={item.number}
          >
            <div className="certification-top">
              <span className="certification-icon">
                {item.icon}
              </span>
              <span className="certification-number">
                {item.number} / 04
              </span>
            </div>

            <h3>{item.name}</h3>
            <p>{item.provider}</p>
          </article>
        ))}
      </div>

      <div className="certificate-collection">
        <div>
          <p className="eyebrow">CERTIFICATE COLLECTION</p>
          <h3>View all my certificates.</h3>
          <p>
            Browse my certificates in one place.
          </p>
        </div>

        <a
          href="https://drive.google.com/drive/folders/1Pq7IHbkHmvoeTfn9V1297T5NDwrkBwgP?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-link"
        >
          View All Certificates ↗
        </a>
      </div>
    </section>
  );
}
