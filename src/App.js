import "./App.css";
import { useState, useEffect } from "react";
import Container from "@mui/material/Container";

import Separator from "./Components/Separator";

function App() {
  const [currentSection, setCurrentSection] = useState("ABCD");

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
      <div className="top-bar">
        <p style={{color:"black", fontWeight:"bold"}}>{currentSection}</p>
      </div>
      <section id="ABOUT">
        <p className="heading1">HI, I AM ARCHI.</p>
        {/* <p className="heading2">SOFTWARE, WEB AND MOBILE DEVELOPER</p> */}
        <p className="heading2">WEB DEVELOPER</p>
      </section>
      <section id="SKILLS">
        {/* <p className="heading3">SKILLS</p> */}
        <p className="heading4">
          Frontend: React, React Native, HTML, CSS, Javascript
        </p>
        <p className="heading4">Backend: Haskell, NodeJS, Postgres</p>
        <p className="heading4">
          Tools: Git, Figma, Webflow, OS - Linux and Windows
        </p>
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
