import TopCards from "../components/AdminDashboard/TopCards"
import RevenueChart from "../components/AdminDashboard/RevenueChart"
import EmployeeList from "../components/AdminDashboard/EmployeeList"
import SalesOverview from "../components/AdminDashboard/SalesOverview"
import InventoryStatus from "../components/AdminDashboard/InventoryStatus"
import Topbar from "../components/dashboard/Topbar"
import SideNav from "../components/SideNav"
import { useEffect, useState } from "react"
import AddEmployeeModal from "../components/AdminDashboard/AddEmployeeModal"

export default function AdminDashboard() {
    const [showAddEmployee, setShowAddEmployee] = useState(false)
    const [showExportModal, setShowExportModal] = useState(false)
    const [showNewReportModal, setShowNewReportModal] = useState(false)
    useEffect(()=>{document.title = 'Admin Dashboard | Dispensar'})
    return (
        <>
        {/*--------Topbar Component--------*/}
        <Topbar></Topbar>
        {/*-----------Side Nav & Main Contents Container-----------*/}
        <div className="flex w-full min-h-screen bg-gray-100 pt-[60px] justify-between items-start pr-[2%] max-[767px]:pr-0 md:pr-0">
            {/*----------Side navigation-----*/}
            <div className="flex w-[20%] h-full max-[767px]:w-0 md:w-16 lg:w-[20%]">
                <SideNav></SideNav>
            </div>
            {/*--------Main Contents-----------*/}
            <div className="flex w-[78%] md:w-[calc(100%-4rem)] lg:w-[78%] max-[767px]:w-full h-full flex-col max-[767px]:px-2 md:px-4">
                <div className="flex w-full h-[40%] max-[767px]:h-fit md:h-fit justify-between pt-4 max-[767px]:pt-2 md:pt-3 max-[767px]:flex-col">
                    <div className="my-0 max-sm:my-1">
                            <h1 className="text-2xl max-sm:text-lg font-semibold text-gray-900">Admin Dashboard</h1>
                            <p className="text-sm text-gray-600 max-sm:text-sm my-2">Welcome back, here's what's happening today</p>
                        </div>
                        <div className="flex gap-3  max-sm:my-2">
                            <button 
                                onClick={() => setShowExportModal(true)}
                                className="bg-white text-gray-600 h-12 px-4 py-2 rounded-lg hover:bg-gray-50 transition border border-gray-200"
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
            {showExportModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
                    <div className="bg-white w-full max-w-md max-h-[90vh] rounded-lg shadow-lg flex flex-col">
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 flex-shrink-0">
                            <h3 className="text-lg font-semibold text-gray-900">Export Report</h3>
                            <button onClick={() => setShowExportModal(false)} className="text-gray-600 hover:text-gray-900">
                                <i className="bx bx-x text-2xl"></i>
                            </button>
                        </div>
                        <div className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Report Type</label>
                                <select className="w-full p-2 border border-gray-300 rounded-lg text-sm">
                                    <option>Sales Report</option>
                                    <option>Inventory Report</option>
                                    <option>Employee Performance</option>
                                    <option>Financial Summary</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <input type="date" className="w-full p-2 border border-gray-300 rounded-lg text-sm" />
                                    <input type="date" className="w-full p-2 border border-gray-300 rounded-lg text-sm" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Format</label>
                                <div className="flex gap-3">
                                    <label className="flex items-center">
                                        <input type="radio" name="format" value="pdf" defaultChecked className="mr-2" />
                                        <span className="text-sm">PDF</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="format" value="excel" className="mr-2" />
                                        <span className="text-sm">Excel</span>
                                    </label>
                                    <label className="flex items-center">
                                        <input type="radio" name="format" value="csv" className="mr-2" />
                                        <span className="text-sm">CSV</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="px-6 pb-6 flex justify-end gap-3 flex-shrink-0">
                            <button onClick={() => setShowExportModal(false)} className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900">
                                Cancel
                            </button>
                            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm">
                                <i className="bx bx-download mr-2"></i>Export
                            </button>
                        </div>
                    </div>
                </div>
            )}
            
            {/* New Report Modal */}
            {showNewReportModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
                    <div className="bg-white w-full max-w-2xl max-h-[90vh] rounded-lg shadow-lg flex flex-col">
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 flex-shrink-0">
                            <h3 className="text-lg font-semibold text-gray-900">Create New Report</h3>
                            <button onClick={() => setShowNewReportModal(false)} className="text-gray-600 hover:text-gray-900">
                                <i className="bx bx-x text-2xl"></i>
                            </button>
                        </div>
                        <div className="flex-1 overflow-y-auto table-scroll">
                            <div className="p-6 space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Report Title</label>
                                    <input type="text" placeholder="Enter report title" className="w-full p-2 border border-gray-300 rounded-lg text-sm" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Report Type</label>
                                        <select className="w-full p-2 border border-gray-300 rounded-lg text-sm">
                                            <option>Daily Sales</option>
                                            <option>Inventory Status</option>
                                            <option>Low Stock Alert</option>
                                            <option>Expiry Report</option>
                                            <option>Employee Performance</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Period</label>
                                        <select className="w-full p-2 border border-gray-300 rounded-lg text-sm">
                                            <option>Today</option>
                                            <option>This Week</option>
                                            <option>This Month</option>
                                            <option>Custom Range</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                    <textarea rows={4} placeholder="Add report description..." className="w-full p-2 border border-gray-300 rounded-lg text-sm"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="px-6 pb-6 flex justify-end gap-3 flex-shrink-0">
                            <button onClick={() => setShowNewReportModal(false)} className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900">
                                Cancel
                            </button>
                            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm">
                                Generate Report
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}