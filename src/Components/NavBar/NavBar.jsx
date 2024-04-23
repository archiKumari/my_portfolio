import { motion } from "framer-motion";

import "./NavBar.css";
import discord from "../../Assets/Logo/discord.svg";
import slack from "../../Assets/Logo/slack.svg";
import github from "../../Assets/Logo/github.svg";
import linkedin from "../../Assets/Logo/linkedIn.svg";
import gmail from "../../Assets/Logo/gmail.svg";
import SideBar from "../SideBar/SideBar";

const NavBar = () => {
  return (
    <div className="navbar">
      <SideBar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Archi Kumari
        </motion.span>
        <div className="links">
          <a href="#">
            <img src={linkedin} alt="" />
          </a>
          <a href="#">
            <img src={slack} alt="" />
          </a>
          <a href="#">
            <img src={github} alt="" />
          </a>
          <a href="#">
            <img src={discord} alt="" />
          </a>
          <a href="#">
            <img src={gmail} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
