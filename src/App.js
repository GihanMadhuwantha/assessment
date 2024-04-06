import logo from "./logo.svg";
import "./App.css";
import WebMobile from "./components/webMobile/webMobile";
import DigitalStrategy from "./components/digitalStrategy/digitalStrategy";
import Questions from "./components/questions/questions";
import Nav from "./components/nav/nav";

import "bootstrap/dist/css/bootstrap.min.css";
import FreeConsultant from "./components/freeConsultant/freeConsultant";
import Home from "./components/home/home";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
      <Nav></Nav>
      <Home></Home>
      <WebMobile></WebMobile>
      <DigitalStrategy></DigitalStrategy>
      <Questions></Questions>
      <Footer></Footer>
    </div>
  );
}

export default App;
