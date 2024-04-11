import { motion } from "framer-motion";

import "./MobileFrame.css";
import Badge from "../../Badge/Badge";

const MobileFrame = ({ title, heading, subtext, skills, imagePath }) => {
  return (
    <motion.div
      className="mobile-container"
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5, delay: 0.2 }}
      whileInView={{ opacity: 1 }}
    >
      <div className="mobile-image-container">
        <img className="mobile-image" alt="Mobile App" src={imagePath} />
      </div>
      <div className="mobile-text-container">
        <p className="mobile-title">{title + " App"}</p>
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

export default MobileFrame;
