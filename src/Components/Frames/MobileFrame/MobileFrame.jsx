import "./MobileFrame.css";
import Badge from "../../Badge/Badge";

const MobileFrame = ({ title,heading,subtext,skills,imagePath }) => {
  
  return (
    <div className="mobile-container">
      <p className="mobile-title">{title + " App"}</p>
      <div className="mobile-content">
        <img className="mobile-image" alt="Mobile App" src={imagePath} />
      </div>
      <div className="mobile-text">
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

export default MobileFrame;
