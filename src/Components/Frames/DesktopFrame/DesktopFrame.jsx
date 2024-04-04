import "./DesktopFrame.css";
import Badge from "../../Badge/Badge";

const DesktopFrame = ({ data }) => {
  if (!data) {
    return <div>{data}</div>;
  }
  const { companyName, position, duration, skills, imagePath } = data;
  return (
    <div className="desktop-container">
      <p className="desktop-title">{companyName}</p>
      <div className="desktop-content">
        <img className="desktop-image" alt="Website Homepage" src={imagePath} />
      </div>
      <div className="desktop-text">
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

export default DesktopFrame;
