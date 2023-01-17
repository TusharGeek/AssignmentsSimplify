import "./Section3.css"
import Section3Img1 from "../../Assets/Section3/Section3Img.PNG";
import ExpertsSvg from "../../Assets/Section3/Experts.svg";
import ReferFriend from "../../Assets/Section3/ReferFriend.svg";
import Grade from "../../Assets/Section3/Grade.svg";
import Submit from "../../Assets/Section3/Submit.svg";
import Support from "../../Assets/Section3/Support.svg";
const Section3 = () =>{
    return (
        <div style={{backgroundColor:"#f4f8fb"}} className="h-full w-full p-0 m-0">
        <div className=" max-w-6xl m-auto p-10">
        <div className="flex flex-col items-center  w-10/12 m-auto">
        <h1 data-aos="fade-up" className="Heading text-5xl font-bold text-center">Experience assignment help like never before </h1>
        </div>
        <div className="Grids py-20 ">
            <div data-aos="fade-right" style={{backgroundImage:`url(${ExpertsSvg})`,backgroundPosition:"bottom",backgroundSize:"contain",backgroundRepeat:"no-repeat"}} className="Grid  bg-white h-80 rounded-lg shadow-md p-5">
            <h1  className="font-bold text-3xl text-gray-600">20+ Subject Expertise Availabe</h1>
            </div>
            <div data-aos="fade-left" style={{backgroundImage:`url(${ReferFriend})`,backgroundSize:"contain",backgroundRepeat:"no-repeat"}} className="Grid Grid-col-span-2 bg-white md:h-80 rounded-lg shadow-md p-5 md:bg-right bg-center h-96">
            <h1  className="font-bold text-3xl text-gray-600">Get discount on referring<br/> friends</h1>
            </div>
            <div data-aos="fade-right" style={{backgroundImage:`url(${Support})`,backgroundPosition:"bottom",backgroundSize:"contain",backgroundRepeat:"no-repeat"}}  className="Grid  bg-white h-48 rounded-lg shadow-md p-5">
            <h1  className="font-bold text-3xl text-gray-600">24/7 assistance</h1>
            </div>
            <div data-aos="fade-left"  style={{backgroundImage:`url(${Grade})`,backgroundPosition:"bottom",backgroundSize:"contain",backgroundRepeat:"no-repeat"}} className="Grid bg-white h-48 rounded-lg shadow-md p-5">
            <h1  className="font-bold text-3xl text-gray-600">90% Above Marks</h1>
            </div>
            <div data-aos="fade-left" style={{backgroundImage:`url(${Submit})`,backgroundPosition:"bottom",backgroundSize:"contain",backgroundRepeat:"no-repeat"}} className="Grid   bg-white h-48 rounded-lg shadow-md p-5">
            <h1  className="font-bold text-3xl text-gray-600">On Time Submission</h1>
            </div>
        </div>

        </div>
        

        </div>
    )
}

export default Section3;