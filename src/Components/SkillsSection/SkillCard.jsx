import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

import "./SkillCard.css";
import { ReactComponent as PhotoshopIcon } from "../../Assets/Logo/photoshop-icon.svg";
import { ReactComponent as HaskellIcon } from "../../Assets/Logo/haskell-icon.svg";

const SkillCard = ({ skills, cardTitle }) => {
  const isMultipleColumns = skills.length > 2;

  return (
    <motion.div className="card-container">
      <p className="item-heading">{cardTitle}</p>
      <div className="item-wrapper">
        <div className="item-column">
          {skills
            .slice(
              0,
              isMultipleColumns ? Math.ceil(skills.length / 2) : skills.length
            )
            .map((item, index) => (
              <div className="item-container" key={index}>
                <FontAwesomeIcon icon={item.icon} />
                <span>{item.text}</span>
              </div>
            ))}
        </div>

        {isMultipleColumns && (
          <div className="item-column">
            {skills.slice(Math.ceil(skills.length / 2)).map((item, index) => (
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
        )}
      </div>
    </motion.div>
  );
};

export default SkillCard;
