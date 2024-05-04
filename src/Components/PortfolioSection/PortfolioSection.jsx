import { useRef } from "react";
import "./PortfolioSection.css";
import {
  easeInOut,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Badge from "../Badge/Badge";
import workData from "../../DataFiles/WorkData";
import projectData from "../../DataFiles/ProjectData";

const Single = ({ item, type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-350, 250], {
    ease: easeInOut,
    duration: 1,
  });
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.imagePath} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{type === "work" ? item.companyName : item.projectName}</h2>
            <p>{item.description}</p>
            <div className="badge-container">
              {item.skills.map((item) => (
                <Badge text={item} />
              ))}
            </div>
            <button>See Details</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const PortfolioSection = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {workData.map((item) => (
        <Single item={item} key={item.id} type="work" />
      ))}
      {projectData.map((item) => (
        <Single item={item} key={item.id} type="project" />
      ))}
    </div>
  );
};

export default PortfolioSection;
