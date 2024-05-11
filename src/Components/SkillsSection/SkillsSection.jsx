import React from "react";
import "./SkillsSection.css";
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

function SkillsSection() {
  const frontendItems = [
    { icon: faHtml5, text: "HTML" },
    { icon: faCss3, text: "CSS" },
    { icon: faJs, text: "JavaScript" },
    { icon: faReact, text: "React" },
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
  ];
  const noCodeItems = [{ icon: faWebflow, text: "Webflow" }];

  const variants = {
    initial: {
      opacity: 0,
      y:10,
    },
    animate: {
      y:0,
      opacity: 1,
      transition: {staggerChildren: 0.4, type:"spring" },
    },
  };
  const SkillBlock = ({ title, skills }) => {
    return (
      <div
        className="icon-row"
      >
        <h3 variants={variants}>{title}</h3>
        {skills.map((item, index) => (
          <div
            className="icon-container"
            key={index}
            variants={variants}
          >
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
      <motion.div
        className="inner-container"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <h2>What I can do</h2>
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
          <SkillBlock title="UI/UX and Web Design" skills={UIItems} />
        </motion.div>
        <motion.div variants={variants}>
          <SkillBlock title="No Code Development" skills={noCodeItems} />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default SkillsSection;
