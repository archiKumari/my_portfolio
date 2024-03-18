import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./SkillCard.css";

const SkillCard = ({ skills, cardTitle }) => {
  const isMultipleColumns = skills.length > 2;

  return (
    <div className="card-container">
      <p className="item-heading">{cardTitle}</p>
      <div className="item-wrapper">
      <div className="item-column">
        {skills.slice(0, isMultipleColumns ? Math.ceil(skills.length / 2) : skills.length).map((item, index) => (
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
              <FontAwesomeIcon icon={item.icon} />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      )}
      </div>
    </div>
  );
};

export default SkillCard;
