import { useEffect } from "react";
import Header from "./Components/Header/Header";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Section3 from "./Pages/Section3/Section3";
import Section4 from "./Pages/Section4/Section4";
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
    <div className="App m-0 p-0 overflow-x-hidden" >
    <Header/>
    <LandingPage/>
    <Section3/>
    <Section4/>
    </div>
  );
}

export default App;
