
const projects = [
  {
    number: "01",
    category: "WEB PROJECT",
    title: "CARE FOR HER",
    description:
      "A menstrual health management website designed to support cycle tracking, provide health guidance, and help users find nearby sanitary product locations.",
    highlights: [
      "Menstrual Cycle Tracking",
      "Health Guidance",
      "Nearby Product Locations",
    ],
    symbol: "✳",
    className: "project-care",
    githubUrl: "https://github.com/sarthaksulees2/CareForHer",
  },
  {
    number: "02",
    category: "MACHINE LEARNING",
    title: "Price Prediction Model",
    description:
      "A machine learning model built to predict prices using historical data.",
    highlights: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    symbol: "⌁",
    className: "project-ml",
  },
  {
    number: "03",
    category: "PYTHON APPLICATION",
    title: "Keyboard Keystroke Detection System",
    description:
      "A Python application developed to detect and record keyboard keystrokes.",
    highlights: ["Python", "Pynput"],
    symbol: "⌨",
    className: "project-keyboard",
  },
];

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-heading">
        <p className="eyebrow">03 / SELECTED WORK</p>

        <h2>
          Projects I've <span className="gradient-text">built.</span>
        </h2>

        <p className="projects-intro">
          A selection of projects reflecting my interests
          in web development, machine learning, and Python.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article
            className={`project-card ${project.className}`}
            key={project.number}
          >
            <div className="project-top">
              <span className="project-symbol" aria-hidden="true">
                {project.symbol}
              </span>

              <span className="project-number">
                {project.number} / 03
              </span>
            </div>

            <p className="project-category">{project.category}</p>

            <h3>{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-tags">
              {project.highlights.map((item) => (
                <span className="project-tag" key={item}>
                  {item}
                </span>
              ))}
            </div>

            <div className="project-footer">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label={`View ${project.title} repository on GitHub`}
                >
                  View Repository <span>↗</span>
                </a>
              ) : (
                <span>PROJECT OVERVIEW</span>
              )}

              <span className="project-footer-mark">✦</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
