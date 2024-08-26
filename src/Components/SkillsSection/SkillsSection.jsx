import React from "react";
import "./SkillsSection.scss";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faFigma,
  faNode,
  faWebflow,
} from "@fortawesome/free-brands-svg-icons";

import { ReactComponent as PhotoshopIcon } from "../../Assets/Logo/photoshop-icon.svg";
import { ReactComponent as HaskellIcon } from "../../Assets/Logo/haskell-icon.svg";
import { ReactComponent as ExpoIcon } from "../../Assets/Logo/expo-icon.svg";
import { ReactComponent as PostgresIcon } from "../../Assets/Logo/postgresql-icon.svg";
import { ReactComponent as ExpressIcon } from "../../Assets/Logo/express-icon.svg";
import {ReactComponent as TypeScriptIcon} from "../../Assets/Logo/typescript.svg"

function SkillsSection() {
  const frontendItems = [
    { icon: faReact, text: "React" },
    { icon: null, text: "TypeScript" },
    { icon: faHtml5, text: "HTML" },
    { icon: faCss3, text: "CSS" },
    { icon: faJs, text: "JavaScript" },
  ];
  const mobileItems = [
    { icon: faReact, text: "React Native" },
    { icon: null, text: "Expo" },
  ];
  const backendItems = [
    { icon: faNode, text: "NodeJs" },
    { icon: null, text: "Express" },
    { icon: null, text: "Haskell" },
    { icon: null, text: "PostgreSQL" },
  ];
  const UIItems = [
    { icon: faFigma, text: "Figma" },
    { icon: null, text: "Photoshop" },
    { icon: faWebflow, text: "Webflow" },
  ];

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("Portfolio");
    portfolioSection.scrollIntoView({ behavior: "smooth" });
  };

  const variants = {
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: { staggerChildren: 0.4, type: "spring" },
    },
    hover: {
      opacity: 0.3,
    }
  };

  const SkillBlock = ({ title, skills }) => {
    return (
      <div className="icon-row">
        <h3 variants={variants} whileHover="hover">{title}</h3>
        {skills.map((item, index) => (
          <div className="icon-container" key={index} variants={variants} whileHover="hover">
            {item.text === "Haskell" ? (
              <HaskellIcon />
            ) : item.text === "Photoshop" ? (
              <PhotoshopIcon />
            ) : item.text === "Expo" ? (
              <ExpoIcon />
            ) : item.text === "PostgreSQL" ? (
              <PostgresIcon />
            ) : item.text === "Express" ? (
              <ExpressIcon />
            ) : item.text === "TypeScript" ? (
              <TypeScriptIcon />
            ) : (
              <FontAwesomeIcon icon={item.icon} />
            )}
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="skill-container">
      <h2>What I can do</h2>
      <motion.div
        className="inner-container"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.div variants={variants}>
          <SkillBlock title="Frontend Development" skills={frontendItems} />
        </motion.div>
        <motion.div variants={variants}>
          <SkillBlock title="Backend Development" skills={backendItems} />
        </motion.div>
        <motion.div variants={variants}>
          <SkillBlock title="Mobile App Development" skills={mobileItems} />
        </motion.div>
        <motion.div variants={variants}>
          <SkillBlock title="UI/UX and No Code Development" skills={UIItems} />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default SkillsSection;
