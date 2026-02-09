import { useDarkMode } from '../../utils/useDarkMode'

interface BillItem {
    id: string
    items: number
    total: number
    date: string
    time: string
    paymentMethod: string
}

interface BillingHistoryModalProps {
    bills: BillItem[]
    onClose: () => void
}

function BillingHistoryModal({ bills, onClose }: BillingHistoryModalProps) {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className={`w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-xl flex flex-col ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className={`flex justify-between items-center p-6 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <h2 className={`text-2xl max-sm:text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Billing History
                    </h2>
                    <button
                        onClick={onClose}
                        className={`p-2 rounded-lg transition ${isDarkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-600'}`}
                    >
                        <i className='bx bx-x text-2xl'></i>
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6">
                    {bills.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-12">
                            <i className={`bx bx-receipt text-6xl mb-4 ${isDarkMode ? 'text-gray-600' : 'text-gray-300'}`}></i>
                            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>No billing history yet</p>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {bills.map((bill) => (
                                <div
                                    key={bill.id}
                                    className={`p-4 rounded-xl border transition hover:shadow-md ${isDarkMode ? 'bg-gray-700 border-gray-600 hover:bg-gray-600' : 'bg-gray-50 border-gray-200 hover:bg-white'}`}
                                >
                                    <div className="flex max-sm:flex-col justify-between items-start max-sm:items-start gap-4">
                                        <div className="flex-1">
                                            <h3 className={`font-semibold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                                Bill ID: {bill.id}
                                            </h3>
                                            <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                                {bill.items} item{bill.items > 1 ? 's' : ''} • {bill.paymentMethod}
                                            </p>
                                        </div>
                                        <div className="text-right max-sm:text-left max-sm:w-full">
                                            <p className={`text-2xl max-sm:text-xl font-bold ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
                                                ₦{bill.total.toLocaleString()}
                                            </p>
                                            <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                                {bill.date} • {bill.time}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default BillingHistoryModal
