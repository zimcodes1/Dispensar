import React from 'react'

interface DrugItem {
    id: string
    name: string
    quantity: number
    pricePerUnit: number
    totalPrice: number
}

interface BillDetailsModalProps {
    onClose: () => void
    dispenseCode: string
    employeeName: string
    timestamp: string
    items: DrugItem[]
    status: 'pending' | 'completed' | 'cancelled'
}

export default function BillDetailsModal({ 
    onClose,
    dispenseCode,
    employeeName,
    timestamp,
    items,
    status
}: BillDetailsModalProps) {
    const total = items.reduce((sum, item) => sum + item.totalPrice, 0)

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white w-full max-w-2xl rounded-lg shadow-lg">
                {/* Modal Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">Bill Details</h3>
                        <p className="text-sm text-gray-600 mt-1">Dispense Code: <span className="font-mono font-medium">{dispenseCode}</span></p>
                    </div>
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
                        <i className="bx bx-x text-2xl"></i>
                    </button>
                </div>

                {/* Bill Info */}
                <div className="px-6 py-4 bg-gray-50">
                    <div className="flex justify-between items-center">
                        <div className="space-y-1">
                            <p className="text-sm text-gray-600">Employee: <span className="text-gray-900">{employeeName}</span></p>
                            <p className="text-sm text-gray-600">Time: <span className="text-gray-900">{timestamp}</span></p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm ${
                            status === 'completed' ? 'bg-green-100 text-green-800' :
                            status === 'cancelled' ? 'bg-red-100 text-red-800' :
                            'bg-yellow-100 text-yellow-800'
                        }`}>
                            {status.charAt(0).toUpperCase() + status.slice(1)}
                        </span>
                    </div>
                </div>

                {/* Items List */}
                <div className="px-6 py-4 max-h-[400px] overflow-y-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-sm text-gray-600">
                                <th className="pb-3 text-left">Drug Name</th>
                                <th className="pb-3 text-center">Quantity</th>
                                <th className="pb-3 text-right">Price/Unit</th>
                                <th className="pb-3 text-right">Total</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {items.map((item) => (
                                <tr key={item.id} className="text-sm">
                                    <td className="py-3 text-gray-900">{item.name}</td>
                                    <td className="py-3 text-center text-gray-600">{item.quantity}</td>
                                    <td className="py-3 text-right text-gray-600">₦{item.pricePerUnit.toLocaleString()}</td>
                                    <td className="py-3 text-right text-gray-900">₦{item.totalPrice.toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Footer with Total */}
                <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                    <div className="flex justify-between items-center">
                        <div className="text-gray-600">
                            Total Items: <span className="font-medium text-gray-900">{items.length}</span>
                        </div>
                        <div className="text-lg font-semibold text-gray-900">
                            Total: ₦{total.toLocaleString()}
                        </div>
                    </div>
                    <div className="mt-4 flex justify-end gap-3">
                        <button onClick={onClose} className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900">
                            Close
                        </button>
                        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                            Process Payment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}