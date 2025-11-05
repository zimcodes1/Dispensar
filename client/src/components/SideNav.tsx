

function SideNav(){
    return(
        <div className="bg-[#5fdf85] flex w-full h-full flex-col px-2 justify-between pb-5">
            <div>
            <div className="mt-2 flex items-center justify-start w-full rounded-lg hover:bg-[#1313132a] h-12 px-2 transition-all duration-300 cursor-pointer">
                <p className="text-gray-800 font-semibold"><i className="bx bx-tachometer"></i> Dashboard</p>
            </div>
            <div className="mt-2 flex items-center justify-start w-full rounded-lg hover:bg-[#1313132a] h-12 px-2 transition-all duration-300 cursor-pointer">
                <p className="text-gray-800 font-semibold"><i className="bx bx-dollar"></i> Dispense</p>
            </div>
            <div className="mt-2 flex items-center justify-start w-full rounded-lg hover:bg-[#1313132a] h-12 px-2 transition-all duration-300 cursor-pointer">
                <p className="text-gray-800 font-semibold"><i className="bx bx-package"></i> Inventory</p>
            </div>
            <div className="mt-2 flex items-center justify-start w-full rounded-lg hover:bg-[#1313132a] h-12 px-2 transition-all duration-300 cursor-pointer">
                <p className="text-gray-800 font-semibold"><i className="bx bx-notepad"></i> Reports</p>
            </div>
            <div className="mt-2 flex items-center justify-start w-full rounded-lg hover:bg-[#1313132a] h-12 px-2 transition-all duration-300 cursor-pointer">
                <p className="text-gray-800 font-semibold"><i className="bx bx-cog"></i> Settings</p>
            </div>
            </div>

            <div className="mt-2 flex items-center justify-start w-full rounded-lg hover:bg-[#1313132a] h-12 px-2 transition-all duration-300 cursor-pointer">
                <p className="text-red-500 font-semibold "><i className="bx bx-log-out"></i> Logout</p>
            </div>
        </div>
    )
}


export default SideNav