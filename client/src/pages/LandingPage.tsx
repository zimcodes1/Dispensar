import Topbar from "../components/Home/Topbar"
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <Topbar />
            <div className="h-dvh pt-25 bgImage flex flex-col justify-between overflow-hidden bg-gray-50">
                <span>
                    <h1 className="text-4xl text-gray-50 text-center font-bold">One Platform. Every Prescription. <br /> Every Sale</h1>
                    <p className="text-sm text-gray-300 text-center my-3">Manage your inventory, billing, and dispensing in one seamless interface. <br />Built for the modern pharmacy.</p>
                    <Link to='/login'><button className="block text-gray-950 px-7 py-3 rounded-3xl bg-green-400 font-bold transition duration-300 hover:shadow-md shadow-[#80808058] hover:bg-gray-50 cursor-pointer mx-auto">Get Started</button></Link>
                </span>
                <div className="overflow-hidden w-5/10 mt-5 mx-auto h-fit rounded-t-2xl shadow-2xl border-10 border-b-0 border-[#67ff80a5]">
                    <img src="/images/dashboard.png" alt="Dashboard" />
                </div>
            </div>
        </>
    );
}

export default Home