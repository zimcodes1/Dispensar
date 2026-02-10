import { useEffect, useState } from "react"
import Topbar from "../components/dashboard/Topbar"
import SideNav from "../components/SideNav"
import BillDetailsModal from "../components/billpayments/BillDetailsModal"
import BillQueueItem from "../components/billpayments/BillQueueItem"
import { useDarkMode } from "../utils/useDarkMode"

// Demo data - replace with real data from your API/state
const demoBills = [
    {
        dispenseCode: "DSP001",
        timestamp: "2025-11-10 10:30 AM",
        employeeName: "Sarah Johnson",
        items: [
            { id: "1", name: "Paracetamol 500mg", quantity: 20, pricePerUnit: 50, totalPrice: 1000 },
            { id: "2", name: "Amoxicillin 250mg", quantity: 15, pricePerUnit: 100, totalPrice: 1500 },
        ],
        status: "pending" as const
    },
    {
        dispenseCode: "DSP002",
        timestamp: "2025-11-10 10:45 AM",
        employeeName: "Michael Chen",
        items: [
            { id: "3", name: "Metformin 500mg", quantity: 30, pricePerUnit: 75, totalPrice: 2250 },
            { id: "4", name: "Lisinopril 10mg", quantity: 28, pricePerUnit: 120, totalPrice: 3360 },
        ],
        status: "pending" as const
    },
    {
        dispenseCode: "DSP003",
        timestamp: "2025-11-10 09:15 AM",
        employeeName: "Emma Davis",
        items: [
            { id: "5", name: "Ibuprofen 400mg", quantity: 24, pricePerUnit: 60, totalPrice: 1440 },
            { id: "6", name: "Vitamin C 1000mg", quantity: 50, pricePerUnit: 40, totalPrice: 2000 },
            { id: "7", name: "Omeprazole 20mg", quantity: 14, pricePerUnit: 150, totalPrice: 2100 },
        ],
        status: "completed" as const
    },
    {
        dispenseCode: "DSP004",
        timestamp: "2025-11-10 11:20 AM",
        employeeName: "James Wilson",
        items: [
            { id: "8", name: "Aspirin 75mg", quantity: 30, pricePerUnit: 25, totalPrice: 750 },
        ],
        status: "pending" as const
    },
    {
        dispenseCode: "DSP005",
        timestamp: "2025-11-10 08:45 AM",
        employeeName: "Lisa Anderson",
        items: [
            { id: "9", name: "Cough Syrup 100ml", quantity: 3, pricePerUnit: 800, totalPrice: 2400 },
            { id: "10", name: "Cetirizine 10mg", quantity: 20, pricePerUnit: 45, totalPrice: 900 },
        ],
        status: "completed" as const
    },
    {
        dispenseCode: "DSP006",
        timestamp: "2025-11-10 09:50 AM",
        employeeName: "David Brown",
        items: [
            { id: "11", name: "Insulin Glargine", quantity: 2, pricePerUnit: 5000, totalPrice: 10000 },
        ],
        status: "cancelled" as const
    },
    {
        dispenseCode: "DSP007",
        timestamp: "2025-11-10 11:45 AM",
        employeeName: "Sarah Johnson",
        items: [
            { id: "12", name: "Atorvastatin 20mg", quantity: 30, pricePerUnit: 180, totalPrice: 5400 },
            { id: "13", name: "Amlodipine 5mg", quantity: 30, pricePerUnit: 90, totalPrice: 2700 },
        ],
        status: "pending" as const
    },
    {
        dispenseCode: "DSP008",
        timestamp: "2025-11-10 08:00 AM",
        employeeName: "Michael Chen",
        items: [
            { id: "14", name: "Ciprofloxacin 500mg", quantity: 10, pricePerUnit: 200, totalPrice: 2000 },
        ],
        status: "completed" as const
    },
    {
        dispenseCode: "DSP009",
        timestamp: "2025-11-10 12:15 PM",
        employeeName: "Emma Davis",
        items: [
            { id: "15", name: "Losartan 50mg", quantity: 28, pricePerUnit: 95, totalPrice: 2660 },
            { id: "16", name: "Hydrochlorothiazide 25mg", quantity: 30, pricePerUnit: 55, totalPrice: 1650 },
        ],
        status: "pending" as const
    },
    {
        dispenseCode: "DSP010",
        timestamp: "2025-11-10 07:30 AM",
        employeeName: "James Wilson",
        items: [
            { id: "17", name: "Levothyroxine 100mcg", quantity: 30, pricePerUnit: 85, totalPrice: 2550 },
        ],
        status: "completed" as const
    }
]

export default function BillPayments() {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    const [searchQuery, setSearchQuery] = useState("")
    const [statusFilter, setStatusFilter] = useState("pending")
    const [selectedBill, setSelectedBill] = useState<typeof demoBills[0] | null>(null)

    // Filter bills based on search query and status
    const filteredBills = demoBills.filter(bill => {
        const matchesSearch = bill.dispenseCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            bill.employeeName.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesStatus = statusFilter === "all" || bill.status === statusFilter
        return matchesSearch && matchesStatus
    })
    useEffect(() => {document.title = 'Bill Payments | Dispensar'})
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
                    <div className="p-6 max-sm:p-0">
                        <div className="flex flex-col justify-between items-center mb-6">
                            <h1 className={`text-2xl max-sm:text-lg font-semibold my-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Bill Payments</h1>
                            <div className="flex items-center gap-3 max-sm:gap-2 max-sm:w-full max-sm:flex-col">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search by code or employee..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className={`w-64 pl-10 pr-4 py-2 border rounded-lg text-sm transition-colors duration-300 ${
                                            isDarkMode
                                                ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400'
                                                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                                        }`}
                                    />
                                    <i className={`bx bx-search absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}></i>
                                </div>
                                <select 
                                    value={statusFilter}
                                    onChange={(e) => setStatusFilter(e.target.value)}
                                    className={`border rounded-lg px-3 py-2 text-sm transition-colors duration-300 ${
                                        isDarkMode
                                            ? 'bg-gray-800 border-gray-700 text-white'
                                            : 'bg-white border-gray-300 text-gray-900'
                                    }`}
                                >
                                    <option value="all">All Status</option>
                                    <option value="pending">Pending</option>
                                    <option value="completed">Completed</option>
                                    <option value="cancelled">Cancelled</option>
                                </select>
                            </div>
                        </div>

                        {/* Queue List */}
                        <div className="grid grid-cols-1 gap-4">
                            {filteredBills.map((bill) => (
                                <BillQueueItem
                                    key={bill.dispenseCode}
                                    dispenseCode={bill.dispenseCode}
                                    timestamp={bill.timestamp}
                                    employeeName={bill.employeeName}
                                    itemCount={bill.items.length}
                                    totalAmount={bill.items.reduce((sum, item) => sum + item.totalPrice, 0)}
                                    status={bill.status}
                                    onClick={() => setSelectedBill(bill)}
                                />
                            ))}
                        </div>

                        {filteredBills.length === 0 && (
                            <div className="text-center py-8">
                                <p className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>No bills found matching your search.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Bill Details Modal */}
            {selectedBill && (
                <BillDetailsModal
                    onClose={() => setSelectedBill(null)}
                    dispenseCode={selectedBill.dispenseCode}
                    employeeName={selectedBill.employeeName}
                    timestamp={selectedBill.timestamp}
                    items={selectedBill.items}
                    status={selectedBill.status}
                />
            )}
        </>
    )
}