import "./MobileFrame.css";
import Badge from "../../Badge/Badge";

const MobileFrame = ({ data }) => {
  if (!data) {
    return <div>{data}</div>;
  }
  const { companyName, position, duration, skills, imagePath } = data;
  return (
    <div className="mobile-container">
      <p className="mobile-title">{companyName + " Mobile App"}</p>
      <div className="mobile-content">
        <img className="mobile-image" alt="Mobile App" src={imagePath} />
      </div>
      <div className="mobile-text">
        <div>
          <p className="text-header">{position}</p>
          <p className="subtext">{duration}</p>
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
