import "./App.css";
import Separator from "./Components/Separator";
import MyDivider from "./Components/Divider";

import Container from "@mui/material/Container";

function App() {
  return (
    <>
      <Container>
        <p className="heading1">HI, I AM ARCHI.</p>
        {/* <p className="heading2">SOFTWARE, WEB AND MOBILE DEVELOPER</p> */}
        <p className="heading2">WEB DEVELOPER</p>
        <Separator />
        <p className="heading3">SKILLS</p>
        <p className="heading4">Frontend: React, React Native, HTML, CSS, Javascript</p>
        <p className="heading4">Backend: Haskell, NodeJS, Postgres</p>
        <p className="heading4">Tools: Git, Figma, Webflow, OS - Linux and Windows</p>
        <Separator />
        <p className="heading3">WORK</p>
        <p className="heading4">Phonebook: Web Application</p>
        <p className="heading4">Expense Tracker: Mobile Application</p>
        <p className="heading4">Snake Game: Haskell Application</p>
        <Separator />
        <p className="heading3">EXPERIENCE</p>
        <p className="heading4">Frontend Developer (Remote), Maa Gyan Services</p>
        <p className="heading4">Mobile Application Developer (Remote), Petdrifts</p>
        <p className="heading4">Frontend Developer (Remote), Betiyan Nidhi Limited</p>
        <p></p>
        <Separator />
      </Container>
    </>
  );
}

export default App;
