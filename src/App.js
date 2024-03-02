import "./App.css";
import Separator from "./Components/Separator";
import MyDivider from "./Components/Divider";

import Container from "@mui/material/Container";

function App() {
  return (
    <Container> 
      <p className="heading1">HI, I AM ARCHI.</p>
      <p className="heading2">SOFTWARE, WEB AND MOBILE DEVELOPER</p>
      <Separator/>
      <MyDivider text="EXPERTISE"/>
      <Separator/>
      <MyDivider text="WORK"/>
      <Separator/>
      <MyDivider text="EXPERIENCE"/>
      <Separator/>
    </Container>
  );
}

export default App;
