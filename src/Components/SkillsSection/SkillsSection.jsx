import SkillCard from "./SkillCard";

import React from "react";
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

function SkillsSection() {
  const frontendItems = [
    { icon: faHtml5, text: "HTML" },
    { icon: faCss3, text: "CSS" },
    { icon: faJs, text: "JavaScript" },
    { icon: faReact, text: "React" },
    { icon: faMobileScreen, text: "React Native" },
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

  return (
  <div style={{display:"flex", flexDirection:"row",justifyContent:"center",margin:"80px"}}>
    <SkillCard skills={frontendItems} cardTitle="Frontend"/>
    <SkillCard skills={backendItems} cardTitle="Backend"/>
    <SkillCard skills={toolItems} cardTitle="Tools"/>
    <SkillCard skills={osItems} cardTitle="OS"/>

  </div>
  )
}

export default SkillsSection;
