import SalesOverviewChart from "./SalesOverviewChart"

function SalesInfo(){
    return(
    <>

        <div className="bg-white w-[57%] max-[767px]:w-full md:w-[60%] h-full max-[767px]:h-[300px] md:h-[280px] shadow border border-gray-200 rounded-2xl overflow-hidden">
            <SalesOverviewChart></SalesOverviewChart>
        </div>
        <div className="bg-white w-[40%] max-sm:mt-5 max-[767px]:w-full md:w-[38%] max-[767px]:h-[200px] md:h-[280px] max-[767px]:mt-2 h-full shadow border border-gray-200 rounded-2xl px-5 flex-col  overflow-scroll hide-scrollbar">
        <div className="sticky top-0 h-10 flex justify-between items-center">
            <h1 className="text-xs"><i className="bx bx-bar-chart-alt-2"></i> Activity Overview</h1> 
            <select name="" id="" className="text-xs">
                <option value="Daily">Today</option>
                <option value="Weekly" selected>This Week</option>
                <option value="Monthly">This Month</option>
            </select>
        </div>

        <div className="w-full h-[75%] justify-between items-start flex flex-col">
            <div className="flex flex-col items-center justify-evenly w-full h-[50%] border-b border-gray-300">
                <h1 className="text-2xl font-bold text-gray-900">2430+</h1>
                <p className="text-sm text-gray-800">Drugs Sold</p>
            </div>
            <div className=" flex flex-col items-center justify-evenly w-full h-[50%]">
                <h1 className="text-2xl font-bold text-gray-900">₦ 50,000+</h1>
                <p className="text-sm text-gray-800">Transacted</p>
            </div>
        </div>
        </div>
    </>

    )
}


export default SalesInfo