import { useState, useEffect } from "react";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SkillsList from "./components/SkillsList";
import "./App.css";

function App() {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={"section-light" + (scroll == 0 ? "" : " show-border")}>
        <NavBar />
      </nav>

      <section className="header section-light">
        <Header />
      </section>

      <hr className="cross-section section-dark" />

      <section id="about" className="about">
        <About />
      </section>

      <hr className="cross-section section-light" />

      <section id="skills" className="skills section-light">
        <SkillsList />
      </section>

      <hr className="cross-section section-dark" />

      <section id="contact" className="contact">
        <Contact />
      </section>

      <footer className="section-light">
        <Footer />
      </footer>
    </>
  );
}

export default App;
