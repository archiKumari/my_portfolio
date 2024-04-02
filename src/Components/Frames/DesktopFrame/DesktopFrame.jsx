import "./DesktopFrame.css";

import projectImg1 from "../../../Assets/Work-images/BNL/image1.png";

const DesktopFrame = () => {
  return (
    <div>
      <div className="desktop-container">
        <img className="desktop-image" src={projectImg1} />
      </div>
    </div>
  );
};

export default DesktopFrame;
