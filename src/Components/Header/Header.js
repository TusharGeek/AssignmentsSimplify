import Logo from "../../Assets/Logo/Logo.PNG";
const Header = () => {
    return (
        <div id="Header max-w-7xl">

        <nav className="flex justify-around p-4">
            <div className="logo">
            <img src={Logo} className="w-40"></img>
            </div>
            <div className="Nav-items md:flex md:flex-row md:items-center gap-10 hidden text-gray-400 ">
            <a className="hover:text-gray-800 cursor-pointer">Essay</a>
            <a className="hover:text-gray-800 cursor-pointer">School/College Tips & Hacks</a>
            <a className="hover:text-gray-800 cursor-pointer">Social Media</a>
            <a className="hover:text-gray-800 cursor-pointer">Teacher</a>
            </div>
        </nav>
        </div>
    )
}

export default Header;