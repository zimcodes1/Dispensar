import { useState, useEffect } from 'react'
import Topbar from '../components/dashboard/Topbar'
import SideNav from '../components/SideNav'
import { useDarkMode } from '../utils/useDarkMode'
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js'
import CategoryChart from '../components/SalesDistribution/CategoryChart'
import SalesTrendChart from '../components/SalesDistribution/SalesTrendChart'
import TopProductsChart from '../components/SalesDistribution/TopProductsChart'
import CategoryBreakdown from '../components/SalesDistribution/CategoryBreakdown'

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend)

export default function SalesDistribution() {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    const [timeRange, setTimeRange] = useState('month')
    
    useEffect(() => { document.title = 'Sales Distribution | Dispensar' })
    
    return (
        <>
            <Topbar />
            <div className={`flex w-full min-h-screen pt-[60px] justify-between items-start pr-[2%] max-[767px]:pr-0 md:pr-0 transition-colors duration-300 ${
                isDarkMode ? 'bg-gray-950' : 'bg-gray-100'
            }`}>
                <div className="flex w-[20%] h-full max-[767px]:w-0 md:w-16 lg:w-[20%]">
                    <SideNav />
                </div>
                <div className="flex w-[78%] md:w-[calc(100%-4rem)] lg:w-[78%] max-[767px]:w-full h-full flex-col max-[767px]:px-2 md:px-4 py-6">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h1 className={`text-2xl max-sm:text-lg font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Sales Distribution</h1>
                            <p className={`text-sm mt-1 transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Analyze sales by category and product</p>
                        </div>
                        <select
                            value={timeRange}
                            onChange={(e) => setTimeRange(e.target.value)}
                            className={`p-2 border rounded-lg text-sm transition-colors duration-300 ${
                                isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'
                            }`}
                        >
                            <option value="week">This Week</option>
                            <option value="month">This Month</option>
                            <option value="quarter">This Quarter</option>
                            <option value="year">This Year</option>
                        </select>
                    </div>
                    
                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                        <div className={`p-4 rounded-lg shadow-sm border transition-colors duration-300 ${
                            isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                        }`}>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total Revenue</p>
                                    <p className={`text-2xl font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>₦331K</p>
                                </div>
                                <i className="bx bx-money text-3xl text-green-600"></i>
                            </div>
                        </div>
                        <div className={`p-4 rounded-lg shadow-sm border transition-colors duration-300 ${
                            isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                        }`}>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total Sales</p>
                                    <p className={`text-2xl font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>1,247</p>
                                </div>
                                <i className="bx bx-cart text-3xl text-blue-600"></i>
                            </div>
                        </div>
                        <div className={`p-4 rounded-lg shadow-sm border transition-colors duration-300 ${
                            isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                        }`}>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Avg Order Value</p>
                                    <p className={`text-2xl font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>₦265</p>
                                </div>
                                <i className="bx bx-trending-up text-3xl text-purple-600"></i>
                            </div>
                        </div>
                        <div className={`p-4 rounded-lg shadow-sm border transition-colors duration-300 ${
                            isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                        }`}>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Top Category</p>
                                    <p className={`text-2xl font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>28%</p>
                                </div>
                                <i className="bx bx-category text-3xl text-orange-600"></i>
                            </div>
                        </div>
                    </div>
                    
                    {/* Charts Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                        <CategoryChart isDarkMode={isDarkMode} />
                        <SalesTrendChart isDarkMode={isDarkMode} />
                    </div>
                    
                    {/* Bottom Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                        <TopProductsChart isDarkMode={isDarkMode} />
                        <CategoryBreakdown isDarkMode={isDarkMode} />
                    </div>
                </div>
            </div>
        </>
    )
}
