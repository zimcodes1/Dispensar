import SalesOverviewChart from "./SalesOverviewChart"
import { useDarkMode } from "../../utils/useDarkMode"

function SalesInfo(){
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    
    return(
    <>

        <div className={`w-[57%] max-[767px]:w-full md:w-[60%] h-full max-[767px]:h-[300px] md:h-[280px] shadow border rounded-2xl overflow-hidden transition-colors duration-300 ${
            isDarkMode 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-white border-gray-200'
        }`}>
            <SalesOverviewChart></SalesOverviewChart>
        </div>
        <div className={`w-[40%] max-sm:mt-5 max-[767px]:w-full md:w-[38%] max-[767px]:h-[250px] md:h-[280px] max-[767px]:mt-2 h-full shadow rounded-2xl px-5 flex-col overflow-scroll hide-scrollbar transition-colors duration-300 ${
            isDarkMode
                ? 'bg-gray-800 border border-gray-700 shadow-lg shadow-black/30'
                : 'bg-white shadow-green-200 border border-green-300'
        }`}>
        <div className="sticky top-0 h-10 flex justify-between items-center">
            <h1 className={`text-xs transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}><i className="bx bx-bar-chart-alt-2"></i> Activity Overview</h1> 
            <select name="" id="" className={`text-xs transition-colors duration-300 ${
                isDarkMode
                    ? 'bg-gray-700 rounded-sm text-gray-100 border-gray-600'
                    : 'bg-white text-gray-900 border-gray-300'
            }`}>
                <option value="Daily">Today</option>
                <option value="Weekly" selected>This Week</option>
                <option value="Monthly">This Month</option>
            </select>
        </div>

        <div className="w-full h-[75%] justify-between items-start flex flex-col">
            <div className={`flex flex-col items-center justify-evenly w-full h-[50%] border-b transition-colors duration-300 ${
                isDarkMode ? 'border-gray-700' : 'border-gray-300'
            }`}>
                <h1 className={`text-2xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>2430+</h1>
                <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>Drugs Sold</p>
                <span className="text-xs text-green-500 flex items-center gap-1">
                    <i className="bx bx-trending-up"></i>
                    +12.5% vs last week
                </span>
            </div>
            <div className=" flex flex-col items-center justify-evenly w-full h-[50%]">
                <h1 className={`text-2xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>₦ 50,000+</h1>
                <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>Transacted</p>
                <span className="text-xs text-green-500 flex items-center gap-1">
                    <i className="bx bx-trending-up"></i>
                    +8.3% vs last week
                </span>
            </div>
        </div>
        </div>
    </>

    )
}


export default SalesInfo