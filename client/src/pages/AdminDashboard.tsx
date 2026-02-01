import TopCards from "../components/AdminDashboard/TopCards"
import RevenueChart from "../components/AdminDashboard/RevenueChart"
import EmployeeList from "../components/AdminDashboard/EmployeeList"
import SalesOverview from "../components/AdminDashboard/SalesOverview"
import InventoryStatus from "../components/AdminDashboard/InventoryStatus"
import Topbar from "../components/dashboard/Topbar"
import SideNav from "../components/SideNav"
import { useEffect, useState } from "react"
import AddEmployeeModal from "../components/AdminDashboard/AddEmployeeModal"
import ExportReportModal from "../components/AdminDashboard/ExportReportModal"
import CreateNewReportModal from "../components/AdminDashboard/CreateNewReportModal"
import { useDarkMode } from "../utils/useDarkMode"

export default function AdminDashboard() {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    const [showAddEmployee, setShowAddEmployee] = useState(false)
    const [showExportModal, setShowExportModal] = useState(false)
    const [showNewReportModal, setShowNewReportModal] = useState(false)
    useEffect(()=>{document.title = 'Admin Dashboard | Dispensar'})
    return (
        <>
        {/*--------Topbar Component--------*/}
        <Topbar></Topbar>
        {/*-----------Side Nav & Main Contents Container-----------*/}
        <div className={`flex w-full min-h-screen pt-[60px] justify-between items-start pr-[2%] max-[767px]:pr-0 md:pr-0 transition-colors duration-300 ${
            isDarkMode ? 'bg-gray-950' : 'bg-gray-100'
        }`}>
            {/*----------Side navigation-----*/}
            <div className="flex w-[20%] h-full max-[767px]:w-0 md:w-16 lg:w-[20%]">
                <SideNav></SideNav>
            </div>
            {/*--------Main Contents-----------*/}
            <div className="flex w-[78%] md:w-[calc(100%-4rem)] lg:w-[78%] max-[767px]:w-full h-full flex-col max-[767px]:px-2 md:px-4">
                <div className="flex w-full h-[40%] max-[767px]:h-fit md:h-fit justify-between pt-4 max-[767px]:pt-2 md:pt-3 max-[767px]:flex-col">
                    <div className="my-0 max-sm:my-1">
                            <h1 className={`text-2xl max-sm:text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Admin Dashboard</h1>
                            <p className={`text-sm max-sm:text-sm my-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Welcome back, here's what's happening today</p>
                        </div>
                        <div className="flex gap-3  max-sm:my-2">
                            <button 
                                onClick={() => setShowExportModal(true)}
                                className={`h-12 px-4 py-2 rounded-lg transition border ${isDarkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border-gray-700' : 'bg-white text-gray-600 hover:bg-gray-50 border-gray-200'}`}
                            >
                                <i className="bx bx-download mr-2"></i>
                                Export Report
                            </button>
                            <button 
                                onClick={() => setShowNewReportModal(true)}
                                className="bg-green-600 text-white px-4 py-2 h-12 rounded-lg hover:bg-green-700 transition"
                            >
                                <i className="bx bx-plus mr-2"></i>
                                New Report
                            </button>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="mb-6">
                        <TopCards />
                    </div>

                    {/* Charts Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                        {/* Revenue Chart - Spans 2 columns */}
                        <div className="lg:col-span-2">
                            <RevenueChart />
                        </div>
                        {/* Sales Distribution */}
                        <div className="lg:col-span-1">
                            <SalesOverview />
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6 max-sm:mb-4">
                        {/* Employee List - Spans 3 columns */}
                        <div className="lg:col-span-3">
                            <EmployeeList onAddEmployee={() => setShowAddEmployee(true)} />
                        </div>
                        {/* Inventory Status - Spans 2 columns */}
                        <div className="lg:col-span-2">
                            <InventoryStatus />
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Add Employee Modal */}
            {showAddEmployee && <AddEmployeeModal onClose={() => setShowAddEmployee(false)} />}
            
            {/* Export Report Modal */}
            <ExportReportModal isOpen={showExportModal} onClose={() => setShowExportModal(false)} />
            
            {/* New Report Modal */}
            <CreateNewReportModal isOpen={showNewReportModal} onClose={() => setShowNewReportModal(false)} />
        </>
    )
}