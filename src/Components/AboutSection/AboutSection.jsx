import IconsContainer from "./IconsContainer";
import "./AboutSection.css";

import { React } from "react";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faFigma,
  faNode,
  faGithub,
  faWebflow,
  faLinux,
  faWindows,
} from "@fortawesome/free-brands-svg-icons";
import {
  faServer,
  faDatabase,
  faMobileScreen,
  faObjectGroup,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const AboutSection = () => {
  const frontendItems = [
    { icon: faJs, text: "JavaScript" },
    { icon: faReact, text: "React" },
    { icon: faMobileScreen, text: "React Native" },
    { icon: faHtml5, text: "HTML" },
    { icon: faCss3, text: "CSS" },
    { icon: faObjectGroup, text: "UI/UX" },
  ];
  const backendItems = [
    { icon: faNode, text: "NodeJs" },
    { icon: faServer, text: "Express" },
    { icon: null, text: "Haskell" },
    { icon: faDatabase, text: "PostgreSQL" },
  ];
  const toolItems = [
    { icon: faGithub, text: "Git" },
    { icon: faWebflow, text: "Webflow" },
    { icon: faFigma, text: "Figma" },
    { icon: null, text: "Photoshop" },
  ];
  const osItems = [
    { icon: faLinux, text: "Linux" },
    { icon: faWindows, text: "Windows" },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById("Contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

  const variants = {
    initial: {
      x: -500,
      y: 50,
      opacity: 0,
    },
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="about-container">
      <motion.div
        className="text-container"
        variants={variants}
        initial="initial"
        whileInView="whileInView"
      >
        <motion.h2 variants={variants}>About Me</motion.h2>
        <motion.p variants={variants}>
          I'm a versatile web developer with expertise in both frontend and
          backend development. Specializing in crafting captivating user
          interfaces and robust backend systems,I bring a comprehensive skill
          set to every project I undertake.In addition to my development work,
          I'm experienced in UI/UX design using Figma and have proficiency in
          no-code website development with platforms like Webflow.
        </motion.p>
        <motion.p variants={variants}>
          I'm always on the lookout for new opportunities where I can
          contribute, learn, and grow. If you have a rewarding opportunity that
          aligns with my skills and experience, don't hesitate to reach out. I'm
          eager to collaborate on projects that challenge me and allow me to
          make a meaningful impact. Let's connect and discuss how we can
          collaborate to create something remarkable.
        </motion.p>
        <motion.button variants={variants} onClick={scrollToContact}>
          Connect
        </motion.button>
      </motion.div>
      <motion.div
        className="icon-container"
        variants={variants}
        initial="initial"
        whileInView="whileInView"
      >
        <motion.h2 variants={variants}>My Skills</motion.h2>
        <motion.div variants={variants}>
          <IconsContainer skills={frontendItems} index={1} />
        </motion.div>
        <motion.div variants={variants}>
          <IconsContainer skills={backendItems} index={2} />
        </motion.div>
        <motion.div variants={variants}>
          <IconsContainer skills={toolItems} index={3} />
        </motion.div>
        <motion.div variants={variants}>
          <IconsContainer skills={osItems} index={4} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
