import "./Section3.css"

import ExpertsSvg from "../../Assets/Section3/Experts.jpg";
import Coding from "../../Assets/Section3/Coding.jpg";

import Business from "../../Assets/Section3/Business.jpg";
import Submit from "../../Assets/Section3/Submit.svg";
import Essay from "../../Assets/Section3/Essay.jpg";
import Original from "../../Assets/Section3/Original.png";

const Section3 = () =>{
    return (
        <div style={{backgroundColor:"#f4f8fb"}} className="h-full w-full p-0 m-0">
        <div className=" max-w-6xl m-auto p-10">
        <div className="flex flex-col items-center  w-10/12 m-auto">
        <h1 data-aos="fade-up" className="Heading md:text-6xl text-4xl font-bold text-center">Experience assignment help like never before </h1>
        </div>
        <div className="Grids py-20 ">
            <div data-aos="fade-right" style={{backgroundImage:`url(${ExpertsSvg})`,backgroundPosition:"bottom",backgroundSize:"contain",backgroundRepeat:"no-repeat"}} className="Grid  bg-white h-80 rounded-2xl shadow-md p-5">
            <h1  className="font-bold text-3xl text-gray-600">20+ Subject Expertise Available</h1>
            </div>
            <div data-aos="fade-left" style={{backgroundImage:`url(${Coding})`,backgroundPosition:"bottom",backgroundSize:"cover",backgroundRepeat:"no-repeat"}} className="Grid Grid-col-span-2 bg-white md:h-80 rounded-2xl shadow-md p-5 md:bg-right bg-center h-96 ">
            <h1  className="font-bold text-3xl text-gray-100">Coding Assignments from<br/> Elite MNC Professionals</h1>
            </div>
            <div data-aos="fade-right" style={{backgroundImage:`url(${Business})`,backgroundPosition:"bottom",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}  className="Grid  bg-white h-80 rounded-2xl shadow-md p-5">
            <h1  className="font-bold text-3xl text-gray-100">Business Analysis and Reports from MBA Professionals</h1>
            </div>
            <div data-aos="fade-left"  style={{backgroundImage:`url(${Essay})`,backgroundPosition:"bottom",backgroundSize:"cover",backgroundRepeat:"no-repeat"}} className="Grid bg-white h-80 rounded-2xl shadow-md p-5">
            <h1  className="font-bold text-3xl text-white">Expertly Crafted Essays</h1>
            </div>
            <div data-aos="fade-left" style={{backgroundImage:`url(${Original})`,backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat"}} className="Grid   bg-white h-80 rounded-2xl shadow-md p-5">
            <h1  className="font-bold text-2xl text-gray-600">Original and Authentic Assignments</h1>
            </div>
        </div>

        </div>
        

        </div>
    )
}

export default Section3;