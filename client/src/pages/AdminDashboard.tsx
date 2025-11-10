import TopCards from "../components/AdminDashboard/TopCards"
import RevenueChart from "../components/AdminDashboard/RevenueChart"
import EmployeeList from "../components/AdminDashboard/EmployeeList"
import SalesOverview from "../components/AdminDashboard/SalesOverview"
import InventoryStatus from "../components/AdminDashboard/InventoryStatus"
import Topbar from "../components/dashboard/Topbar"
import SideNav from "../components/SideNav"

export default function AdminDashboard() {
    return (
        <>
            <Topbar />
            <div className="flex w-full min-h-dvh bg-gray-50 pt-[60px] justify-between items-start pr-[2%]">
                {/* Side Navigation */}
                <div className="flex w-[20%] h-full">
                    <SideNav />
                </div>

                {/* Main Content */}
                <div className="flex w-[78%] h-full flex-col">
                    {/* Welcome Header */}
                    <div className="flex justify-between items-center mb-6 pt-4">
                        <div>
                            <h1 className="text-2xl font-semibold text-gray-900">Admin Dashboard</h1>
                            <p className="text-sm text-gray-600">Welcome back, here's what's happening today</p>
                        </div>
                        <div className="flex gap-3">
                            <button className="bg-white text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-50 transition border border-gray-200">
                                <i className="bx bx-download mr-2"></i>
                                Export Report
                            </button>
                            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
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
                        <div className="col-span-2">
                            <RevenueChart />
                        </div>
                        {/* Sales Distribution */}
                        <div className="col-span-1">
                            <SalesOverview />
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="grid grid-cols-5 gap-6 mb-6">
                        {/* Employee List - Spans 3 columns */}
                        <div className="col-span-3">
                            <EmployeeList />
                        </div>
                        {/* Inventory Status - Spans 2 columns */}
                        <div className="col-span-2">
                            <InventoryStatus />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}