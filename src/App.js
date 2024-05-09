import { motion } from "framer-motion";

import "./App.css";
import HeroSection from "./Components/HeroSection/HeroSection";
import AboutSection from "./Components/AboutSection/AboutSection";
import Contact from "./Components/ContactSection/Contact";
import HorizontalDivider from "./Components/Dividers/HorizontalDivider";
import NavBar from "./Components/NavBar/NavBar";
import PortfolioSection from "./Components/PortfolioSection/PortfolioSection";
import SkillsSection from "./Components/SkillsSection/SkillsSection"

function App() {
  return (
    <motion.div className="main-container">
      <NavBar />
      <section id="/">
        <HeroSection />
      </section>
      <HorizontalDivider />
      <section id="About">
        <AboutSection />
      </section>
      <HorizontalDivider />
      <section id="Skills">
        <SkillsSection/>
      </section>
      <HorizontalDivider/>
      <PortfolioSection />
      <HorizontalDivider />
      <section id="Contact">
        <Contact />
      </section>
    </motion.div>
  );
}

export default App;
