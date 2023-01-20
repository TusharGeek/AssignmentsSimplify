import "./Section4.css"
import AvtarLogo from "../../Assets/Section4/Avtar.PNG";
import Avtar2Logo from "../../Assets/Section4/Avtar2.PNG";
import Avtar3Logo from "../../Assets/Section4/Avtar3.png";

const Section4 = () => {
    return (
        <div style={{backgroundColor:"#f4f8fb"}} className="h-full w-full">
        <div className="max-w-6xl m-auto p-10">
        <h1 data-aos="fade-up" className="md:text-6xl text-3xl font-bold text-center"><span style={{color:"#ca4246"}}>1000+</span> Students Trust AssignmentsSimplify</h1>
        <div className="Grids Testimonial py-20">
         <div data-aos="fade-right" className="Grid rounded-2xl h-full p-5 flex shadow-md">
         <img src={AvtarLogo} className="w-16 h-16"></img>
         <div>
         <p className="text-2xl">Ajaypal Singh</p>
         <p className="text-xl text-gray-400">Computer Science</p>
         <p className="text-gray-500">"I have been a student of computer science for several years now and I can confidently say that the assignment making services provided by AssignmentsSimplify have been a game changer for me. Their team of experts have not only helped me understand complex concepts but also assisted me in completing my assignments on time. Their attention to detail and timely delivery has helped me achieve better grades. I highly recommend assignments simplify to any computer science student in need of assistance with their assignments."</p>
         </div>
         
         </div>
         <div data-aos="fade-left"  className="Grid rounded-2xl h-full p-5 flex shadow-md">
         <img src={Avtar2Logo} className="w-16 h-16"></img>
         <div>
         <p className="text-2xl">Rohini Kapoor</p>
         <p className="text-xl text-gray-400">Business Management</p>
         <p className="text-gray-500">"I recently used the services of AssignmentsSimplify for assistance with my business management assignments and I have to say, I was thoroughly impressed. The team of experts they have on board are not only knowledgeable in their field but also dedicated to helping students like me succeed. They provided me with well-researched and well-written assignments that helped me understand the concepts better and ultimately helped me score better grades.”</p>
         </div>
        
         </div>
         <div data-aos="fade-left"  className="Grid rounded-2xl h-full p-5 flex shadow-md">
         <img src={Avtar3Logo} className="w-16 h-16"></img>
         <div>
         <p className="text-2xl">Eddie</p>
         <p className="text-xl text-gray-400">Phycology</p>
         <p className="text-gray-500">Their customer service was also top-notch. They were always available to answer my queries and were very prompt in delivering my assignments. Overall, I am extremely satisfied with the services provided by AssignmentsSimplify and I highly recommend them to any student in need of assignment help."</p>
         </div>
       
         </div>
        </div>
        </div>
        </div>
    )
}

export default Section4;


//959 SSR