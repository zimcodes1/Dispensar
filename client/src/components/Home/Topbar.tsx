import { Link } from "react-router-dom"

function Topbar(){
    return(
        <div className="w-full h-20 max-sm:h-15 bgImage backdrop-blur-2xl flex fixed top-0 left-0 justify-between items-center">
            <div className="flex items-center ml-10 max-sm:ml-2">
                <img src="/images/logo.png" alt="Logo" className="w-10 max-sm:w-8"/>
                <h1 className="text-gray-50 font-bold text-xl ml-3 max-sm:text-lg">Dispensar</h1>
            </div>
            <div className="flex items-center mr-10 max-sm:mr-2">
                <Link to='/login'><button className="text-gray-950 px-7 max-sm:py-2 max-sm:px-5 max-sm:text-xs py-3 rounded-3xl bg-gray-50 font-bold transition duration-300 hover:shadow-md shadow-[#80808058]">Login</button></Link>
            </div>
        </div>
    )
}

export default Topbar