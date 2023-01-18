import Iphone from "../../Assets/Section2/IphoneSection2.mp4";
import { BrandWhatsapp } from 'tabler-icons-react';
import { BrandInstagram } from 'tabler-icons-react';
import { BrandGmail } from 'tabler-icons-react';

import "./Section2.css";
const Section2 = () => {
    return (
        <div className="py-10 px-10">
        <div className="max-w-6xl m-auto Grids flex md:flex-row flex-col md:justify-center md:items-center justify-center" >
        <div data-aos="fade-right" className="Grid">
        <video src="https://github.com/TusharGeek/AssignmentsSimplify/raw/main/src/Assets/Section2/IphoneSection2.mp4" autoplay loop muted playsinline />
        </div>
        <div className="Grid md:text-left text-center">
        <h1 data-aos="fade-up" className="md:text-6xl text-3xl font-bold ">Book your <span style={{color:"#ca4246"}}>Assignment </span>Slot</h1>
        <div className="my-10">
            <div data-aos="fade-left" className="flex items-center ">
            <BrandWhatsapp
    size={35}
    strokeWidth={2}
    color={'#25D366'}
  />
  <p className="mx-2 text-xl">9888338698</p>
            </div>
            <div data-aos="fade-left" className="flex items-center ">
            <BrandInstagram
    size={35}
    strokeWidth={2}
    color={'#E1306C'}
  />
  <p className="mx-2 text-xl">assignmentssimplify</p>
            </div>
            <div data-aos="fade-left" className="flex items-center ">
            <BrandGmail 
    size={35}
    strokeWidth={2}
    color={'#EA4335'}
  />
  <p className="mx-2 text-xl">assignmentssimplify@gmail.com</p>
            </div>
        </div>
        </div>
        </div>
       
       
        </div>
    )
}
export default Section2;