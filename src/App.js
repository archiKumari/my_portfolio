import { motion } from "framer-motion";

import "./App.css";
import HeroSection from "./Components/HeroSection/HeroSection";
import AboutSection from "./Components/AboutSection/AboutSection";
import Contact from "./Components/ContactSection/Contact";
import HorizontalDivider from "./Components/Dividers/HorizontalDivider";
import NavBar from "./Components/NavBar/NavBar";
import PortfolioSection from "./Components/PortfolioSection/PortfolioSection";

function App() {
  return (
    <motion.div className="main-container">
      <section id="Homepage">
        <NavBar />
        <HeroSection />
      </section>
      <HorizontalDivider />
      <section id="About Me">
        <AboutSection />
      </section>
      <HorizontalDivider />
      <PortfolioSection />
      <HorizontalDivider />
      <section id="Contact">
        <Contact />
      </section>
    </motion.div>
  );
}

export default App;
