import "./DesktopFrame.css";

import projectImg1 from "../../../Assets/Work-images/BNL/image3.png";
import Badge from "../../Badge/Badge";

const DesktopFrame = () => {
  const skills = ["React", "NodeJs", "MongoDB", "Photoshop"];
  return (
    <div className="desktop-container">
      <p className="desktop-title">Betiyan Nidhi Limited</p>
      <div className="desktop-content">
        <img className="desktop-image" alt="Website Homepage" src={projectImg1} />
      </div>
      <div className="desktop-text">
        <div>
          <p className="text-header">Frontend Developer</p>
          <p className="subtext">Aug 2022 - Dec 2022</p>
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
