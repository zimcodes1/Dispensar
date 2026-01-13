import Topbar from "../components/Home/Topbar"

function Home() {
    return (
        <>
            <Topbar />
            <div className="h-dvh pt-25 bgImage flex flex-col justify-between overflow-hidden">
                <span>
                    <h1 className="text-4xl text-gray-50 text-center font-bold">One Platform. Every Prescription. <br /> Every Sale</h1>
                    <p className="text-sm text-gray-300 text-center my-3">Manage your inventory, billing, and dispensing in one seamless interface. <br />Built for the modern pharmacy.</p>
                </span>
                <div className="overflow-hidden w-6/10 mt-5 mx-auto h-fit rounded-t-2xl shadow-2xl shadow-[#67ff81]">
                    <img src="/images/dashboard.png" alt="Dashboard" />
                </div>
            </div>
        </>
    );
}

export default Home