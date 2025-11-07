import Topbar from "../components/dashboard/Topbar"
import SideNav from "../components/SideNav"

function Dispense(){
        return(
        <>
        {/*--------Topbar Component--------*/}
        <Topbar></Topbar>
        {/*-----------Side Nav & Main Contents Container-----------*/}
        <div className="flex w-full h-dvh bg-gray-50 pt-[60px] justify-between items-start pr-[2%]">
            {/*----------Side navigation-----*/}
            <div className="flex w-[20%] h-full">
                <SideNav></SideNav>
            </div>

            {/*--------Main Contents-----------*/}
            <div className="flex flex-col px-5 w-[78%] h-full justify-start items-center">
                {/*--------------Drugs Search Bar------------------ */}
                <div className="flex w-full h-[20%] justify-between items-center">
                    <input type="text" placeholder="Drug name..." className="bg-white w-[80%] h-12 p-3 border border-gray-300 rounded-lg"/>
                    <span className="hover:bg-[#5fdf85] h-12 px-4 rounded-lg hover:text-gray-900 text-lg flex justify-center items-center cursor-pointer transition duration-500 bg-gray-900 text-[#5fdf85]"><i className="bx bx-search"></i></span>
                    <div className="w-[100px] flex justify-between px-4 hover:border-2 items-center bg-white h-12 border border-gray-300 rounded-lg cursor-pointer">
                        <p className="text-gray-800 font-semibold">Filter</p>
                        <i className="bx bx-filter-alt text-gray-800"></i>
                    </div>
                </div>
                {/*--------------Drugs Info------------------ */}
                <div className="flex w-full h-[50%] bg-white rounded-2xl border border-gray-200 p-4 justify-start items-center">
                    <div className="w-[30%] h-full rounded-2xl overflow-hidden flex justify-center items-center bg-white">
                        {/* Drug Image */}
                        <img src="/images/drug_test.png" alt="Drug Image" />
                    </div>
                    {/* Drug Details */}
                    <div className="w-[70%] h-full rounded-2xl">
                        <div className="flex flex-col h-full justify-between px-5 py-2 relative">
                            <i className="bx bx-star absolute right-0 text-xl cursor-pointer"></i>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-800">Paracetamol 500mg</h1>
                                <p className="text-sm text-gray-600 mt-2">Category: Pain Reliever</p>
                                <p className="text-sm text-gray-600 mt-1">Manufacturer: HealthPharma</p>
                                <p className="text-sm text-gray-600 mt-1">Stock Available: 150 units</p>
                                <p className="text-sm text-gray-600 mt-1">Formulation: Tablet</p>
                                <p className="text-sm text-gray-600 mt-1">Expiry Date: 07/03/2026</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-800 font-semibold">Description:</p>
                                <p className="text-sm text-gray-600 mt-1">Paracetamol is used to relieve pain and reduce fever. It is commonly used for headaches, muscle aches, arthritis, backaches, toothaches, colds, and fevers.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*--------------Price & Quantity----------- */}
                <div className="w-[80%] flex justify-between bg-white border border-gray-200 h-[15%] mt-[1%] rounded-2xl">
                    <input type="text" placeholder="Price (₦)" className="focus:outline-none focus:ring-0 border-r rounded-r-none border-gray-300 rounded-lg p-2 w-[50%] text-xl text-gray-900" />
                    <span className="w-[50%] border-gray-300 rounded-lg h-full flex justify-between items-center px-2">
                        <input type="number" placeholder="Quantity" className="focus:outline-none focus:ring-0 p-2 text-xl text-gray-900 w-[70%]" />
                        <p className="text-gray-700 font-semibold">/ 100</p>
                        <h1 className="text-gray-900 font-semibold cursor-pointer">MAX</h1>
                    </span>
                </div>
                <button className="bg-[#5fdf85] text-gray-900 font-semibold py-2 px-5 rounded-lg mt-4 hover:bg-gray-900 hover:text-[#5fdf85] transition duration-500">Dispense <i className="bx bx-right-arrow-alt"></i></button>
            </div>
           
        </div>
        </>
    )
}

export default Dispense