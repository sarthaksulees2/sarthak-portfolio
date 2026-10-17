
const education = [
  {
    number: "01",
    degree: "Master of Computer Applications (MCA)",
    institution: "KJEI’s Trinity Academy of Engineering, Pune",
    period: "2024 – 2026",
    result: "CGPA: 7.60/10",
  },
  {
    number: "02",
    degree: "Bachelor of Computer Science (BSc.CS)",
    institution: "Ahilyabai Holkar College, Jalna",
    period: "2021 – 2024",
    result: "Score: 64.27%",
  },
  {
    number: "03",
    degree: "HSC – Science",
    institution: "Matsyodari Shikshan Sanstha, Jalna",
    period: "2019 – 2021",
    result: "Score: 76.50%",
  },
];

export default function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="section-heading">
        <p className="eyebrow">04 / EDUCATION</p>
        <h2>
          My learning <span className="gradient-text">journey.</span>
        </h2>
        <p className="education-intro">
          My academic background and educational milestones.
        </p>
      </div>

      <div className="education-timeline">
        {education.map((item) => (
          <article className="education-item" key={item.number}>
            <div className="education-marker">
              <span />
            </div>

            <div className="education-card">
              <div className="education-card-top">
                <span className="education-number">
                  {item.number} / 03
                </span>
                <span className="education-period">
                  {item.period}
                </span>
              </div>

              <h3>{item.degree}</h3>
              <p className="education-institution">
                {item.institution}
              </p>
              <span className="education-result">
                {item.result}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
