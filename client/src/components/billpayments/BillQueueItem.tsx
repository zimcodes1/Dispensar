interface BillQueueItemProps {
    dispenseCode: string
    timestamp: string
    employeeName: string
    itemCount: number
    totalAmount: number
    status: 'pending' | 'completed' | 'cancelled'
    onClick: () => void
}

export default function BillQueueItem({
    dispenseCode,
    timestamp,
    employeeName,
    itemCount,
    totalAmount,
    status,
    onClick
}: BillQueueItemProps) {
    return (
        <div 
            onClick={onClick}
            className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition cursor-pointer"
        >
            <div className="flex justify-between items-start">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded text-gray-700">
                            {dispenseCode}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                            status === 'completed' ? 'bg-green-100 text-green-800' :
                            status === 'cancelled' ? 'bg-red-100 text-red-800' :
                            'bg-yellow-100 text-yellow-800'
                        }`}>
                            {status.charAt(0).toUpperCase() + status.slice(1)}
                        </span>
                    </div>
                    <p className="text-sm text-gray-600">By {employeeName}</p>
                    <p className="text-xs text-gray-500 mt-1">{timestamp}</p>
                </div>
                
                <div className="text-right">
                    <p className="text-lg font-semibold text-gray-900">₦{totalAmount.toLocaleString()}</p>
                    <p className="text-xs text-gray-500 mt-1">{itemCount} items</p>
                </div>
            </div>
        </div>
    )
}