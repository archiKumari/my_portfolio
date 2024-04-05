import { useState } from "react";

import "./DesktopFrame.css";
import Badge from "../../Badge/Badge";

const DesktopFrame = ({ title,heading,subtext,skills,imagePath }) => {

  return (
    <div className="desktop-container">
      <p className="desktop-title">{title}</p>
      <div className="desktop-content">
        <img className="desktop-image" alt="Website Homepage" src={imagePath} />
      </div>
      <div className="desktop-text">
        <div>
          <p className="text-header">{heading}</p>
          <p className="subtext">{subtext}</p>
        </div>
        <div className="badge-container">
          {skills.map((item) => (
            <Badge text={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesktopFrame;
