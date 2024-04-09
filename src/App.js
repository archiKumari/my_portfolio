import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

import "./App.css";
import HeroSection from "./Components/HeroSection/HeroSection";
import SkillsSection from "./Components/SkillsSection/SkillsSection";
import WorkSection from "./Components/WorkSection/WorkSection";
import ProjectSection from "./Components/ProjectSection/ProjectSection";
import Contact from "./Components/ContactSection/Contact";
import HorizontalDivider from "./Components/Dividers/HorizontalDivider";

function App() {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({clientX,clientY,currentTarget}) {
    console.log("render");
    const {left,top} = currentTarget.getBoundingClientRect();
    let xPosition = clientX - left;
    let yPosition = clientY - top;

    mouseX.set(xPosition);
    mouseY.set(yPosition);

  }
  // rgba(3,12,26,1)
  return (
    <motion.div
      className="main-container"
      onMouseMove={handleMouseMove}
      style={{
        background: useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px ,rgba(15,27,77,1),rgba(1,16,41,1))`,
      }}
    >
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
    </motion.div>
  );
}

export default App;
