
export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="hero-content">
        <div className="availability">
          <span className="status-dot" />
          MCA Graduate · Open to Opportunities
        </div>

        <p className="eyebrow">HELLO, WORLD! I'M</p>

        <h1>
          Sarthak <span className="gradient-text">Sule.</span>
        </h1>

        <h2>
          Software Developer
          <span className="typing-cursor">|</span>
        </h2>

        <p className="hero-description">
          I have a foundation in programming, web technologies,
          databases, and software development. I'm looking to
          apply my skills, learn new technologies, and contribute
          to meaningful software projects.
        </p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            Explore My Work <span>↗</span>
          </a>
          <a className="btn btn-secondary" href="#contact">
            Contact Me
          </a>
        </div>

        <div className="hero-skills">
          <span>JAVA</span>
          <span>PYTHON</span>
          <span>JAVASCRIPT</span>
          <span>SQL</span>
        </div>
      </div>

      <a className="scroll-indicator" href="#about">
        <span className="scroll-line" />
        SCROLL TO EXPLORE
      </a>

      <div className="hero-index">
        <span>01</span> / PORTFOLIO
      </div>
    </section>
  );
}
