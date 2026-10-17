
import { useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <a href="#home" className="brand" onClick={closeMenu}>
        S<span>.</span>SULE
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        id="primary-navigation"
        className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}
        aria-label="Main navigation"
      >
        {links.map((link) => (
          <a
            href={link.href}
            key={link.href}
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a className="nav-cta" href="#contact">
        Let's Connect <span>↗</span>
      </a>
    </header>
  );
}
