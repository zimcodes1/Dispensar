

function Topbar(){
    return(
        <div className="w-full h-20 bg-white flex fixed top-0 left-0 justify-between items-center">
            <div className="flex items-center ml-10 max-sm:ml-2">
                <img src="/images/logo.png" alt="Logo" className="w-10 max-sm:w-8"/>
                <h1 className="text-gray-900 font-bold text-xl ml-3 max-sm:text-lg">Dispensar</h1>
            </div>
            <div className="flex items-center mr-10 max-sm:mr-2">
                <button className="text-white px-7 py-3 rounded-3xl bg-[#5fdf85] font-bold">Login</button>
            </div>
        </div>
    )
}

export default Topbar