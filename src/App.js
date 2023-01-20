import { useEffect } from "react";
import BackgroundImg from "../src/Assets/BackgroundImg/BackgroundImg.jpg";
import Header from "./Components/Header/Header";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Section2 from "./Pages/Section2/Section2";
import Section3 from "./Pages/Section3/Section3";
import Section4 from "./Pages/Section4/Section4";
import Footer from "../src/Pages/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";



function App() {
  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 600,
      delay: 100,
    });

  })
  return (
    <div style={{backgroundImage:`url($})`}} className="App m-0 p-0 overflow-x-hidden" >
    <Header/>
    <LandingPage/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Footer/>

    </div>
  );
}

export default App;
