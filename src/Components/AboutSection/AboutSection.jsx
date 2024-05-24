import { React } from "react";
import { motion } from "framer-motion";

import "./AboutSection.scss";

const AboutSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("Contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

  const variants = {
    left: {
      x: -100,
      opacity: 0,
    },
    right: {
      x: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className="about-container">
      <h2 variants={variants}>About Me</h2>
      <div className="wrapper">
        <motion.div
          className="left-container"
          variants={variants}
          initial="left"
          whileInView="animate"
        >
          <p>
            Crafting digital experiences is my passion, I've contibuted in the
            creation of dynamic web and mobile applications that prioritize user
            experience and technical excellence. My journey as a developer has
            equipped me with the proficiency and confidence to approach any
            project with determination and skill.
          </p>
          <p>
            I'm always on the lookout for new opportunities where I can
            contribute, learn, and grow. If you have an opportunity that aligns
            with my skills and experience, let's connect and discuss how we can
            collaborate to create something remarkable.
          </p>
          <button variants={variants} onClick={scrollToContact}>
            Connect
          </button>
        </motion.div>
        <motion.div
          className="right-container"
          variants={variants}
          initial="right"
          whileInView="animate"
        >
          <div className="design">
            <div className="circle" />
            <div className="line" />
            <div className="circle" />
            <div className="line" />
            <div className="circle" />
          </div>
          <div className="job-text">
            <div className="single-text">
              <p className="position">Full Stack Developer</p>
              <p className="company">Maa Gyan Services</p>
              <p className="duration">May 2023 - Present</p>
            </div>
            <div className="single-text">
              <p className="position">Mobile Software Developer</p>
              <p className="company">Petdrifts</p>
              <p className="duration">January 2023 - April 2023</p>
            </div>
            <div className="single-text">
              <p className="position">Frontend Developer</p>
              <p className="company">Betiyan Nidhi Limited</p>
              <p className="duration">August 2022 - December 2022</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
