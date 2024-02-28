import "./App.css";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";

function App() {

  return (
    <Container> 
      <p className="heading1">HI, I AM ARCHI.</p>
      <p className="heading2">SOFTWARE, WEB AND MOBILE DEVELOPER</p>
      <div style={{padding:200}}></div>
      <Divider textAlign="left"><p className="heading3">EXPERTISE</p></Divider>
      <div style={{padding:200}}></div>
      <Divider textAlign="left"><p className="heading3">WORK</p></Divider>
      <div style={{padding:200}}></div>
      <Divider textAlign="left"><p className="heading3">EXPERIENCE</p></Divider>
      <div style={{padding:200}}></div>
    </Container>
  );

}

export default App;
