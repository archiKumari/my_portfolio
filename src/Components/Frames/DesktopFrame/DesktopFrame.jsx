import { motion } from "framer-motion";

import "./DesktopFrame.css";
import Badge from "../../Badge/Badge";

const DesktopFrame = ({ title, heading, subtext, skills, imagePath }) => {
  return (
    <motion.div
      className="desktop-container"
      initial={{opacity:0 }}
      transition={{ duration: 1,delay:0.3 }}
      whileInView={{ opacity:1}}
    >
      <div className="desktop-image-container">
        <img className="desktop-image" alt="Website Homepage" src={imagePath} />
      </div>
      <div className="desktop-text-container">
        <p className="desktop-title">{title}</p>
        <p className="text-header">{heading}</p>
        <p className="subtext">{subtext}</p>
        <div className="badge-container">
          {skills.map((item) => (
            <Badge text={item} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default DesktopFrame;
