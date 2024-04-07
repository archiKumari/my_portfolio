import "./App.css";

import SkillsSection from "./Components/SkillsSection/SkillsSection";
import WorkSection from "./Components/WorkSection/WorkSection";
import Contact from "./Components/ContactSection/Contact";
import HorizontalDivider from "./Components/Dividers/HorizontalDivider"

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <section id="ABOUT">
        <p className="heading1">HI, I AM ARCHI.</p>
        {/* <p className="heading2">SOFTWARE, WEB AND MOBILE DEVELOPER</p> */}
        <p className="heading2">WEB DEVELOPER</p>
      </section>
      <HorizontalDivider/>
      <section id="SKILLS">
        <p className="heading3">SKILLS</p>
        <SkillsSection />
      </section>
      <HorizontalDivider/>
      <section id="EXPERIENCE">
        <p className="heading3">WORK</p>
        <WorkSection />
      </section>
      <HorizontalDivider/>
      <section id="CONTACTS">
        <Contact/>
      </section>
    </div>
  );
}

export default App;
