import TopCards from "../components/AdminDashboard/TopCards"
import RevenueChart from "../components/AdminDashboard/RevenueChart"
import EmployeeList from "../components/AdminDashboard/EmployeeList"
import SalesOverview from "../components/AdminDashboard/SalesOverview"
import InventoryStatus from "../components/AdminDashboard/InventoryStatus"
import Topbar from "../components/dashboard/Topbar"
import SideNav from "../components/SideNav"
import { useEffect } from "react"
import AddEmployeeModal from "../components/AdminDashboard/AddEmployeeModal"

export default function AdminDashboard() {
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
                            <button className="bg-white text-gray-600 h-12 px-4 py-2 rounded-lg hover:bg-gray-50 transition border border-gray-200">
                                <i className="bx bx-download mr-2"></i>
                                Export Report
                            </button>
                            <button className="bg-green-600 text-white px-4 py-2 h-12 rounded-lg hover:bg-green-700 transition">
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
                    <div className="grid grid-cols-3 gap-6 mb-6">
                        {/* Revenue Chart - Spans 2 columns */}
                        <div className="col-span-2 max-sm:col-span-full">
                            <RevenueChart />
                        </div>
                        {/* Sales Distribution */}
                        <div className="col-span-1 max-sm:col-span-full">
                            <SalesOverview />
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="grid grid-cols-5 gap-6 mb-6 max-sm:mb-4">
                        {/* Employee List - Spans 3 columns */}
                        <div className="col-span-3 max-sm:col-span-full overflow-x-scroll">
                        <div className="w-[600px]">
                            <EmployeeList />
                            {/* Add Employee Modal - For demonstration purposes */}
                            <AddEmployeeModal />
                        </div>
                        </div>
                        {/* Inventory Status - Spans 2 columns */}
                        <div className="col-span-2 max-sm:col-span-full">
                            <InventoryStatus />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}