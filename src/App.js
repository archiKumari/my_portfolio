import "./App.css";

import HeroSection from "./Components/HeroSection/HeroSection";
import SkillsSection from "./Components/SkillsSection/SkillsSection";
import WorkSection from "./Components/WorkSection/WorkSection";
import ProjectSection from "./Components/ProjectSection/ProjectSection";
import Contact from "./Components/ContactSection/Contact";
import HorizontalDivider from "./Components/Dividers/HorizontalDivider";

function App() {
  return (
    <div className="main-container">
      <section id="ABOUT">
        <HeroSection />
      </section>
      <HorizontalDivider />
      <section id="SKILLS">
        <p className="heading3">SKILLS</p>
        <SkillsSection />
      </section>
      <HorizontalDivider />
      <section id="WORK">
        <p className="heading3">WORK</p>
        <WorkSection />
      </section>
      <HorizontalDivider />
      <section id="PROJECTS">
        <p className="heading3">PROJECTS</p>
        <ProjectSection />
      </section>
      <HorizontalDivider />
      <section id="CONTACTS">
        <p className="heading3">CONTACT</p>
        <Contact />
      </section>
    </div>
  );
}

export default App;
