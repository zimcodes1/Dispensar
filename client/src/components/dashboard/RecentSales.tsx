import { useState } from "react"

interface SaleItem {
    id: string
    time: string
    date: string
    drugName: string
    price: number
    quantity: number
}

function RecentSalesTableItem({ sale, onClick }: { sale: SaleItem, onClick: () => void }) {
    return(
        <tr onClick={onClick} className="border-b border-gray-200 hover:bg-gray-50 transition cursor-pointer">
            <td className="py-3 px-4 text-sm text-gray-700">{sale.time}</td>
            <td className="py-3 px-4 text-sm text-gray-700">{sale.date}</td>
            <td className="py-3 px-4 text-sm font-medium text-gray-900">{sale.drugName}</td>
            <td className="py-3 px-4 text-sm text-gray-700">{sale.quantity}</td>
            <td className="py-3 px-4 text-sm font-medium text-gray-900">₦{sale.price.toLocaleString()}</td>
        </tr>
    )
}


function RecentSales(){
    const [lastUpdated, setLastUpdated] = useState(new Date())
    
    // Demo data
    const salesData: SaleItem[] = [
        { id: '1', time: '12:00 AM', date: '12/03/2025', drugName: 'Arthmeta & Lumefantrine', quantity: 2, price: 250 },
        { id: '2', time: '12:15 AM', date: '12/03/2025', drugName: 'Paracetamol 500mg', quantity: 3, price: 600 },
        { id: '3', time: '12:30 AM', date: '12/03/2025', drugName: 'Amoxicillin 250mg', quantity: 1, price: 450 },
        { id: '4', time: '01:00 AM', date: '12/03/2025', drugName: 'Ibuprofen 400mg', quantity: 2, price: 700 },
        { id: '5', time: '01:15 AM', date: '12/03/2025', drugName: 'Omeprazole 20mg', quantity: 1, price: 500 },
        { id: '6', time: '01:30 AM', date: '12/03/2025', drugName: 'Metformin 500mg', quantity: 4, price: 1200 },
        { id: '7', time: '02:00 AM', date: '12/03/2025', drugName: 'Ciprofloxacin 500mg', quantity: 2, price: 800 },
        { id: '8', time: '02:15 AM', date: '12/03/2025', drugName: 'Vitamin C 1000mg', quantity: 5, price: 1500 },
    ]
    
    const handleRefresh = () => {
        setLastUpdated(new Date())
        // Add your data fetching logic here
    }
    
    const getTimeAgo = () => {
        const seconds = Math.floor((new Date().getTime() - lastUpdated.getTime()) / 1000)
        if (seconds < 60) return 'Just now'
        const minutes = Math.floor(seconds / 60)
        if (minutes < 60) return `${minutes}m ago`
        const hours = Math.floor(minutes / 60)
        return `${hours}h ago`
    }
    
    return(
        <div className="bg-white flex flex-col w-full h-[95%] md:h-full border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="px-5 h-12 border-b border-gray-200 flex justify-between items-center bg-gray-50">
                <div className="flex items-center gap-2">
                    <h1 className="text-sm font-semibold text-gray-900"><i className="bx bx-timer"></i> Recent Sales Activity</h1>
                    <span className="text-xs text-gray-500">{getTimeAgo()}</span>
                </div>
                <button onClick={handleRefresh} className="hover:bg-gray-200 rounded p-1 transition">
                    <i className="bx bx-refresh text-xl text-gray-900 cursor-pointer"></i>
                </button>
            </div>
            <div className="overflow-x-auto table-scroll">
                <table className="w-full min-w-[600px]">
                    <thead className="bg-gray-50 border-b border-gray-200 sticky top-0">
                        <tr>
                            <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Time</th>
                            <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Date</th>
                            <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Drug Name</th>
                            <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Qty</th>
                            <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Price</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {salesData.map(sale => (
                            <RecentSalesTableItem 
                                key={sale.id} 
                                sale={sale} 
                                onClick={() => console.log('View transaction:', sale.id)}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default RecentSales