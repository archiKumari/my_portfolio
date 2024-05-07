import { motion } from "framer-motion";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <motion.a href="Home"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Archi Kumari
        </motion.a>
        <div className="links">
          <a href="#About">
            <span>About</span>
          </a>
          <a href="#Skills">
            <span>Skills</span>
          </a>
          <a href="#Portfolio">
            <span>Portfolio</span>
          </a>
          <a href="#Contact">
            <span>Contact</span>
          </a>
          <button>
            <span>Download CV</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
