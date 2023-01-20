import LogoLanding from "../../Assets/Logo/LogoLanding.png";

const LandingPage = () => {
    return (
        <div  id="LandingPage max-w-6xl m-auto h-screen w-screen">
        <div className="flex flex-col items-center md:my-40 my-24 md:w-8/12 m-auto px-5">
        <img src={LogoLanding} className="w-20"></img>
        <h1 data-aos="fade-up" style={{color:"#0F384A"}} className="md:text-6xl text-4xl font-bold text-center">We help you with your assignments, exams and quizzes </h1>
        <button data-aos="fade-up" className="bg-green-400 p-2 px-3 rounded-lg text-white m-8">AssignmentsSimplify.app</button>
        </div>
        </div>
    )
}

export default LandingPage;