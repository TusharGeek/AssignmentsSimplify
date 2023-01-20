import Logo from "../../Assets/Logo/Logo.PNG";
import { BrandWhatsapp } from 'tabler-icons-react';
import { BrandInstagram } from 'tabler-icons-react';
import { BrandGmail } from 'tabler-icons-react';

const Footer = () => {
return (
<div id="Footer">
<div className="max-w-6xl m-auto p-10">
<div className="my-5">
<img src={Logo} className="w-40"></img>
</div>
<hr></hr>
<div className="flex gap-5 my-5">
    <p className="text-1xl font-semibold">
    Contact Us 
    </p>
    <BrandGmail
        size={20}
    strokeWidth={2}
    color={'#EA4335'}
    />
    <BrandInstagram
         size={20}
    strokeWidth={2}
    color={'#E1306C'}
    />
    <BrandWhatsapp
           size={20}
    strokeWidth={2}
    color={'#25D366'}
    />
    
</div>
<p className="text-center text-gray-400">Copyright © AssignmentsSimplify</p>
</div>


</div>
)
}


export default Footer;