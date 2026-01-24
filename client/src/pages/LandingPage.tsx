import Topbar from "../components/Home/Topbar"
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="w-full min-h-screen bg-gray-100">
            <Topbar />
            <div className="h-dvh max-sm:h-fit pt-25 bgImage flex flex-col justify-between overflow-hidden rounded-b-3xl">
                <span>
                    <h1 className="text-4xl max-sm:text-3xl text-gray-50 text-center font-bold">One Platform. Every Prescription. <br /> Every Sale</h1>
                    <p className="text-sm text-gray-300 text-center my-3">Manage your inventory, billing, and dispensing in one seamless interface. <br />Built for the modern pharmacy.</p>
                    <Link to='/login' className="mt-2 flex w-fit mx-auto"><button className="block text-gray-950 px-7 py-3 rounded-3xl bg-green-400 font-bold transition duration-300 hover:shadow-md shadow-[#80808058] hover:bg-gray-50 cursor-pointer mx-auto">Get Started</button></Link>
                </span>
                <div className="overflow-hidden w-5/10 max-sm:w-9/10 mt-5 max-sm:mt-5 mx-auto h-fit rounded-t-2xl shadow-2xl shadow-[#46ff65]">
                    <img src="/images/dashboard.png" alt="Dashboard" />
                </div>
            </div>
            <div className="w-full h-50"></div>
        </div>
    );
}

export default Home