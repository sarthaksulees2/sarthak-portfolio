
const skillGroups = [
  {
    number: "01",
    title: "Programming Languages",
    icon: "⌘",
    skills: ["Java", "Python", "SQL"],
  },
  {
    number: "02",
    title: "Web Technologies",
    icon: "⌘",
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
  },
  {
    number: "03",
    title: "Databases",
    icon: "◈",
    skills: ["MySQL", "MongoDB (Basic)"],
  },
  {
    number: "04",
    title: "Tools & Core Concepts",
    icon: "⌘",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Android Studio",
      ".NET",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Data Structures & Algorithms",
    ],
  },
];

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-heading">
        <p className="eyebrow">02 / MY EXPERTISE</p>
        <h2>
          My technical <span className="gradient-text">toolkit.</span>
        </h2>
        <p className="skills-intro">
          Technologies and concepts I've studied and worked
          with through my software development learning journey.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.number}>
            <div className="skill-card-top">
              <span className="skill-icon">{group.icon}</span>
              <span className="skill-number">{group.number}</span>
            </div>

            <h3>{group.title}</h3>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
