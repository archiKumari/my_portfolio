import "./App.css";
import { useState, useEffect } from "react";

import TopBar from "./Components/TopBar/TopBar"
import SkillsSection from "./Components/Skills/SkillsSection";

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
    <div>
      <TopBar text={currentSection}/>
      <section id="ABOUT">
        <p className="heading1">HI, I AM ARCHI.</p>
        {/* <p className="heading2">SOFTWARE, WEB AND MOBILE DEVELOPER</p> */}
        <p className="heading2">WEB DEVELOPER</p>
      </section>
      <section id="SKILLS">
        <p className="heading3">SKILLS</p>
        <SkillsSection/>
      </section>
      <section id="WORK">
        {/* <p className="heading3">WORK</p> */}
        <p className="heading4">Phonebook: Web Application</p>
        <p className="heading4">Expense Tracker: Mobile Application</p>
        <p className="heading4">Snake Game: Haskell Application</p>
      </section>
      <section id="EXPERIENCE">
        {/* <p className="heading3">EXPERIENCE</p> */}
        <p className="heading4">
          Frontend Developer (Remote), Maa Gyan Services
        </p>
        <p className="heading4">
          Mobile Application Developer (Remote), Petdrifts
        </p>
        <p className="heading4">
          Frontend Developer (Remote), Betiyan Nidhi Limited
        </p>
      </section>
    </div>
  );
}

export default App;
