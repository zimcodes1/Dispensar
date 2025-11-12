

function Topbar(){
    return(
        <div className="flex w-full h-[60px] max-sm:h-[50px] max-sm:pl-15 px-5 items-center justify-between bg-white fixed top-0 z-50 border-b border-gray-300">
             <div className="flex justify-center items-center">
                <img src="/images/logo.png" alt="Logo" className="w-10 h-10"/>
                 <h1 className="text-2xl max-sm:text-lg font-bold text-gray-800">Dispensar</h1>
             </div>
             <h2 className="text-xl font-semibold text-gray-800"></h2>
             <div className="flex w-auto h-full justify-between items-center">
                <p className="text-gray-800 text-md mx-2">User</p>
                <div className="w-[30px] h-[30px] rounded-full overflow-hidden cursor-pointer">
                    <img src="/images/user.png" alt="User" />
                </div>
             </div>
        </div>
    )
}

export default Topbar