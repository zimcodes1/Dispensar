import { useEffect, useState } from "react"
import Topbar from "../components/dashboard/Topbar"
import SideNav from "../components/SideNav"
import BillDetailsModal from "../components/billpayments/BillDetailsModal"
import BillQueueItem from "../components/billpayments/BillQueueItem"

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
    }
]

function Dispense(){
        const [searchQuery, setSearchQuery] = useState("")
        const [selectedBill, setSelectedBill] = useState<typeof demoBills[0] | null>(null)
    
        // Filter bills based on search query
        const filteredBills = demoBills.filter(bill => 
            bill.dispenseCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
            bill.employeeName.toLowerCase().includes(searchQuery.toLowerCase())
        )
    useEffect(()=>{document.title = 'Dispense Drugs | Dispensar'})
    return(
        <>
        {/*--------Topbar Component--------*/}
        <Topbar></Topbar>
        {/*-----------Side Nav & Main Contents Container-----------*/}
        <div className="flex w-full h-dvh bg-gray-50 pt-[60px] justify-between items-start pr-[2%] max-[767px]:pr-0 md:pr-0">
            {/*----------Side navigation-----*/}
            <div className="flex w-[20%] h-full max-[767px]:w-0 md:w-16 lg:w-[20%]">
                <SideNav></SideNav>
            </div>
            {/*--------Main Contents-----------*/}
            <div className="flex w-[78%] md:w-[calc(100%-4rem)] lg:w-[78%] max-[767px]:w-full h-full flex-col max-[767px]:px-2 md:px-4">
                    <div className="p-6 max-sm:p-0">
                        <div className="flex flex-col justify-between items-center mb-6">
                            <h1 className="text-2xl max-sm:text-lg font-semibold text-gray-900">Dispense</h1>
                            <div className="flex items-center gap-3 max-sm:gap-2 max-sm:w-full max-sm:flex-col">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search by code or employee..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm"
                                    />
                                    <i className="bx bx-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                </div>
                                <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
                                    <option>All Status</option>
                                    <option>Pending</option>
                                    <option>Completed</option>
                                    <option>Cancelled</option>
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
                                <p className="text-gray-600">No bills found matching your search.</p>
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

export default Dispense