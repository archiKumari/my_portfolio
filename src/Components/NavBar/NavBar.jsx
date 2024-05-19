import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import "./NavBar.scss";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const navLinks = ["About", "Skills", "Portfolio", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSectionId = "/";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSectionId = section.id;
        }
      });

      setActiveLink(currentSectionId);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className="navbar">
      <div className="wrapper">
        <motion.a
          href="/"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Archi Kumari
        </motion.a>
        <div className="links">
          {navLinks.map((link) => (
            <a
              href={`#${link}`}
              key={link}
              className={activeLink === link ? "active-text" : ""}
              onClick={() => handleLinkClick(link)}
            >
              {activeLink === link && (
                <motion.div
                  layoutId="active-tab"
                  className="active"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span>{link}</span>
            </a>
          ))}
          <button>
            <p>Download CV</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
