
const contacts = [
  {
    label: "EMAIL",
    value: "sarthaksule16@gmail.com",
    href: "mailto:sarthaksule16@gmail.com",
    icon: "✉",
  },
  {
    label: "PHONE",
    value: "+91 78409 04969",
    href: "tel:+917840904969",
    icon: "↗",
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/sarthaksule16",
    href: "https://www.linkedin.com/in/sarthaksule16",
    icon: "in",
  },
  {
    label: "GITHUB",
    value: "github.com/sarthaksulees2",
    href: "https://github.com/sarthaksulees2",
    icon: "⌘",
  },
];

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="section-heading">
        <p className="eyebrow">06 / GET IN TOUCH</p>
        <h2>
          Let's build something{" "}
          <span className="gradient-text">meaningful.</span>
        </h2>
        <p className="contact-intro">
          I'm looking for an entry-level opportunity in software
          development. Reach out to connect or discuss an opportunity.
        </p>
      </div>

      <div className="contact-grid">
        {contacts.map((contact) => (
          <a
            className="contact-card"
            href={contact.href}
            key={contact.label}
            target={
              contact.label === "LINKEDIN" || contact.label === "GITHUB"
                ? "_blank"
                : undefined
            }
            rel={
              contact.label === "LINKEDIN" || contact.label === "GITHUB"
                ? "noreferrer"
                : undefined
            }
          >
            <span className="contact-icon" aria-hidden="true">
              {contact.icon}
            </span>

            <span className="contact-details">
              <span className="contact-label">{contact.label}</span>
              <span className="contact-value">{contact.value}</span>
            </span>

            <span className="contact-arrow" aria-hidden="true">↗</span>
          </a>
        ))}
      </div>

      <div className="contact-bottom">
        <span className="status-dot" />
        <p>Thank you for visiting my portfolio.</p>
      </div>
    </section>
  );
}
