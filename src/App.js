import { motion } from "framer-motion";

import "./App.css";
import HeroSection from "./Components/HeroSection/HeroSection";
import SkillsSection from "./Components/SkillsSection/SkillsSection";
import WorkSection from "./Components/WorkSection/WorkSection";
import ProjectSection from "./Components/ProjectSection/ProjectSection";
import Contact from "./Components/ContactSection/Contact";
import HorizontalDivider from "./Components/Dividers/HorizontalDivider";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <motion.div className="main-container">
      <section>
        <NavBar />
        <HeroSection />
      </section>
      <HorizontalDivider />
      <section>
        <p className="heading3">SKILLS</p>
        <SkillsSection />
      </section>
      <HorizontalDivider />
      <section>
        <p className="heading3">WORK</p>
        <WorkSection />
      </section>
      <HorizontalDivider />
      <section>
        <p className="heading3">PROJECTS</p>
        <ProjectSection />
      </section>
      <HorizontalDivider />
      <section>
        <p className="heading3">CONTACT</p>
        <Contact />
      </section>
    </motion.div>
  );
}

export default App;
