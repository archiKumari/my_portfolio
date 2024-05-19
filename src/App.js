import { motion } from "framer-motion";

import "./App.css";
import SideBar from "./Components/SideBar/SideBar"
import NavBar from "./Components/NavBar/NavBar";
import HeroSection from "./Components/HeroSection/HeroSection";
import AboutSection from "./Components/AboutSection/AboutSection";
import SkillsSection from "./Components/SkillsSection/SkillsSection"
import PortfolioSection from "./Components/PortfolioSection/PortfolioSection";
import Contact from "./Components/ContactSection/Contact";

function App() {
  return (
    <motion.div className="main-container">
      <SideBar/>
      <NavBar />
      <section id="/">
        <HeroSection />
      </section>
      <section id="About">
        <AboutSection />
      </section>
      <section id="Skills">
        <SkillsSection/>
      </section>
      <PortfolioSection />
      <section id="Contact">
        <Contact />
      </section>
    </motion.div>
  );
}

export default App;
