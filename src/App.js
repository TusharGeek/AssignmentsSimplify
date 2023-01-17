import { useEffect } from "react";
import Header from "./Components/Header/Header";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Section3 from "./Pages/Section3/Section3";
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
    <div className="App">
    <Header/>
    <LandingPage/>
    <Section3/>
    </div>
  );
}

export default App;
