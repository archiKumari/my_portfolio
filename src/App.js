import "./App.css";
import { useState, useEffect } from "react";

import TopBar from "./Components/TopBar/TopBar";
import SkillsSection from "./Components/SkillsSection/SkillsSection";
import WorkSection from "./Components/WorkSection/WorkSection";

function App() {
  const [currentSection, setCurrentSection] = useState("ABOUT");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setCurrentSection(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSection]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {/* <TopBar text={currentSection} /> */}
      <section id="ABOUT">
        <p className="heading1">HI, I AM ARCHI.</p>
        {/* <p className="heading2">SOFTWARE, WEB AND MOBILE DEVELOPER</p> */}
        <p className="heading2">WEB DEVELOPER</p>
      </section>
      <section id="SKILLS">
        <p className="heading3">SKILLS</p>
        <SkillsSection />
      </section>
      <section id="EXPERIENCE">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p className="heading3">EXPERIENCE</p>
          <WorkSection />
        </div>
      </section>
      <section id="PROJECTS">
        {/* <p className="heading3">WORK</p> */}
        <p className="heading4">Phonebook: Web Application</p>
        <p className="heading4">Expense Tracker: Mobile Application</p>
        <p className="heading4">Snake Game: Haskell Application</p>
      </section>
    </div>
  );
}

export default App;
