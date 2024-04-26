import { motion } from "framer-motion";

import "./App.css";
import HeroSection from "./Components/HeroSection/HeroSection";
import AboutSection from "./Components/AboutSection/AboutSection";
import WorkSection from "./Components/WorkSection/WorkSection";
import ProjectSection from "./Components/ProjectSection/ProjectSection";
import Contact from "./Components/ContactSection/Contact";
import HorizontalDivider from "./Components/Dividers/HorizontalDivider";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <motion.div className="main-container">
      <section id="Homepage">
        <NavBar />
        <HeroSection />
      </section>
      <HorizontalDivider />
      <section id="About Me">
        <AboutSection/>
      </section>
      <HorizontalDivider />
      <section id="Experience">
        <p className="heading3">WORK</p>
        <WorkSection />
      </section>
      <HorizontalDivider />
      <section id="Projects">
        <p className="heading3">PROJECTS</p>
        <ProjectSection />
      </section>
      <HorizontalDivider />
      <section id="Contact">
        <p className="heading3">CONTACT</p>
        <Contact />
      </section>
    </motion.div>
  );
}

export default App;
