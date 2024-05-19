import { motion } from "framer-motion";

import "./HeroSection.css";
import scrollImg from "../../Assets/scroll.png";

const HeroSection = () => {
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-300%",
      opacity: 1,
      transition: {
        duration: 20,
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("Contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("Portfolio");
    portfolioSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="text-container"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>ARCHI KUMARI</motion.h2>
          <motion.h1 variants={textVariants}>Web, Mobile and</motion.h1>
          <motion.h1 variants={textVariants}>Haskell Developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants} onClick={scrollToPortfolio} className="secondary">
              See Latest Works
            </motion.button>
            <motion.button variants={textVariants} onClick={scrollToContact} className="primary">
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            src={scrollImg}
            alt="scroll indicator"
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <motion.div
        className="sliding-text-container"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Web Mobile Haskell UI UX
      </motion.div>
    </div>
  );
};

export default HeroSection;
