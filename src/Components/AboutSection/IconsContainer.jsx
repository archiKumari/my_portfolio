import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

import "./AboutSection.css";
import { ReactComponent as PhotoshopIcon } from "../../Assets/Logo/photoshop-icon.svg";
import { ReactComponent as HaskellIcon } from "../../Assets/Logo/haskell-icon.svg";

const IconsContainer = ({ skills, index }) => {
  return (
    <div
      className="icon-row">
      {skills.map((item, index) => (
        <div className="item-container" key={index}>
          {item.text === "Haskell" ? (
            <HaskellIcon />
          ) : item.text === "Photoshop" ? (
            <PhotoshopIcon />
          ) : (
            <FontAwesomeIcon icon={item.icon} />
          )}
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  );
};

export default IconsContainer;
