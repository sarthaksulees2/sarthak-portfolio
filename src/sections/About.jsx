
const highlights = [
  { number: "MCA", label: "Master's Degree" },
  { number: "Java", label: "Programming" },
  { number: "Web", label: "Development" },
];

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="section-heading">
        <p className="eyebrow">01 / ABOUT ME</p>
        <h2>
          Building my path in{" "}
          <span className="gradient-text">technology.</span>
        </h2>
      </div>

      <div className="about-grid">
        <div className="about-copy">
          <p className="about-lead">
            Hello! I'm Sarthak, an MCA graduate with a
            foundation in programming, web technologies,
            and database management.
          </p>

          <p>
            My technical background includes Java, Python,
            SQL, HTML, CSS, JavaScript, and Bootstrap.
            I also have knowledge of object-oriented
            programming and core computer science concepts.
          </p>

          <p>
            I'm looking for an entry-level opportunity in
            software development where I can apply my skills,
            learn new technologies, solve problems, and
            contribute to meaningful software projects.
          </p>

          <a className="about-link" href="#projects">
            Explore my projects <span>↗</span>
          </a>
        </div>

        <aside className="about-card">
          <div className="profile-orbit">
            <div className="profile-monogram">SS</div>
          </div>

          <p className="profile-label">A LITTLE ABOUT ME</p>
          <h3>Sarthak Sule</h3>
          <p className="profile-role">Software Developer</p>

          <div className="about-highlights">
            {highlights.map((item) => (
              <div className="highlight" key={item.label}>
                <span>{item.number}</span>
                <small>{item.label}</small>
              </div>
            ))}
          </div>

          <div className="profile-location">
            <span className="status-dot" />
            Jalna, Maharashtra, India
          </div>
        </aside>
      </div>
    </section>
  );
}
