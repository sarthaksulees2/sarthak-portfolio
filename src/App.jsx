import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import ScrollReveal from "./components/ScrollReveal";

export default function App() {
  return (
    <>
      <ScrollReveal />
      <Navbar />

      <main>
        <Hero />

        <About />

        <Skills />

        <Projects />

        <Education />

        <Certifications />

        <Contact />
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Sarthak Sule
        <span>Built with React & CSS</span>
      </footer>
    </>
  );
}
