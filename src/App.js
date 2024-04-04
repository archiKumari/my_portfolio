import "./App.css";
import ProjectSection from "./Components/ProjectSection/ProjectSection";

import SkillsSection from "./Components/SkillsSection/SkillsSection";
import WorkSection from "./Components/WorkSection/WorkSection";

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
      <section id="SKILLS">
        <p className="heading3">SKILLS</p>
        <SkillsSection />
      </section>
      <section id="EXPERIENCE">
        <p className="heading3">EXPERIENCE</p>
        <WorkSection />
      </section>
      <section id="PROJECTS">
      <p className="heading3">PROJECTS</p>
        <ProjectSection/>
      </section>
    </div>
  );
}

export default App;
