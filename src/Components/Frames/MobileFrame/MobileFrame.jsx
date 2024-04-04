import "./MobileFrame.css";
import projectImg1 from "../../../Assets/Project-images/Petdrifts/Homepage.png";
import Badge from "../../Badge/Badge";

const MobileFrame = () => {
  const skills = ["React Native", "Figma"];
  return (
    <div className="mobile-container">
      <p className="mobile-title">Petdrifts Mobile App</p>
      <div className="mobile-content">
        <img className="mobile-image" alt="Mobile App" src={projectImg1} />
      </div>
      <div className="mobile-text">
        <div>
          <p className="text-header">Mobile App Developer</p>
          <p className="subtext">Jan 2023 - Apr 2023</p>
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

export default MobileFrame;
