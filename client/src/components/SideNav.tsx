import { Link } from "react-router-dom"

function SideNav(){
    return(
        <div className="bg-[#5fdf85] flex w-[20%] h-[90dvh] flex-col px-2 justify-between pb-5 fixed top-[60px]">
            <div>
                <Link to="/dashboard">  
                    <div className="mt-2 flex items-center justify-start w-full rounded-lg hover:bg-[#1313132a] h-12 px-2 transition-all duration-300 cursor-pointer">
                        <p className="text-gray-800 font-semibold"><i className="bx bx-tachometer"></i> Dashboard</p>
                    </div>
                </Link>
                <Link to="/admin">  
                    <div className="mt-2 flex items-center justify-start w-full rounded-lg hover:bg-[#1313132a] h-12 px-2 transition-all duration-300 cursor-pointer">
                        <p className="text-gray-800 font-semibold"><i className="bx bx-shield-quarter"></i> Admin Dashboard</p>
                    </div>
                </Link>
                <Link to="/dispense">
                    <div className="mt-2 flex items-center justify-start w-full rounded-lg hover:bg-[#1313132a] h-12 px-2 transition-all duration-300 cursor-pointer">
                        <p className="text-gray-800 font-semibold"><i className="bx bx-dollar"></i> Dispense</p>
                    </div>
                </Link>
                <Link to="/billpayments">
                    <div className="mt-2 flex items-center justify-start w-full rounded-lg hover:bg-[#1313132a] h-12 px-2 transition-all duration-300 cursor-pointer">
                        <p className="text-gray-800 font-semibold"><i className="bx bx-receipt"></i> Bill Payments</p>
                    </div>
                </Link>
                <Link to="/inventory">
                    <div className="mt-2 flex items-center justify-start w-full rounded-lg hover:bg-[#1313132a] h-12 px-2 transition-all duration-300 cursor-pointer">
                        <p className="text-gray-800 font-semibold"><i className="bx bx-package"></i> Inventory</p>
                    </div>
                </Link>
                <Link to="/stock">
                    <div className="mt-2 flex items-center justify-start w-full rounded-lg hover:bg-[#1313132a] h-12 px-2 transition-all duration-300 cursor-pointer">
                        <p className="text-gray-800 font-semibold"><i className="bx bx-cabinet"></i> Stock Management</p>
                    </div>
                </Link>
                <Link to="/supplies">
                    <div className="mt-2 flex items-center justify-start w-full rounded-lg hover:bg-[#1313132a] h-12 px-2 transition-all duration-300 cursor-pointer">
                        <p className="text-gray-800 font-semibold"><i className="bx bx-first-aid"></i> Medical Supplies</p>
                    </div>
                </Link>
                <Link to="/reports">
                    <div className="mt-2 flex items-center justify-start w-full rounded-lg hover:bg-[#1313132a] h-12 px-2 transition-all duration-300 cursor-pointer">
                        <p className="text-gray-800 font-semibold"><i className="bx bx-notepad"></i> Reports</p>
                    </div>
                </Link>
                <Link to="/settings">
                    <div className="mt-2 flex items-center justify-start w-full rounded-lg hover:bg-[#1313132a] h-12 px-2 transition-all duration-300 cursor-pointer">
                        <p className="text-gray-800 font-semibold"><i className="bx bx-cog"></i> Settings</p>
                    </div>
                </Link>
            </div>

            <div className="mt-2 flex items-center justify-start w-full rounded-lg hover:bg-[#1313132a] h-12 px-2 transition-all duration-300 cursor-pointer">
                <p className="text-red-500 font-semibold "><i className="bx bx-log-out"></i> Logout</p>
            </div>
        </div>
    )
}


export default SideNav