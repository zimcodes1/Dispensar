import { useDarkMode } from "../../utils/useDarkMode"

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
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    
    return (
        <div 
            onClick={onClick}
            className={`border rounded-lg p-4 transition-colors duration-300 cursor-pointer ${
                isDarkMode
                    ? 'bg-gray-800 border-gray-700 hover:shadow-lg hover:shadow-black/30'
                    : 'bg-white border-gray-200 hover:shadow-md'
            }`}
        >
            <div className="flex justify-between items-start">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <span className={`font-mono text-sm px-2 py-1 rounded transition-colors duration-300 ${
                            isDarkMode
                                ? 'bg-gray-700 text-gray-200'
                                : 'bg-gray-100 text-gray-700'
                        }`}>
                            {dispenseCode}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs transition-colors duration-300 ${
                            status === 'completed' ? isDarkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-800' :
                            status === 'cancelled' ? isDarkMode ? 'bg-red-900/30 text-red-300' : 'bg-red-100 text-red-800' :
                            isDarkMode ? 'bg-yellow-900/30 text-yellow-300' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                            {status.charAt(0).toUpperCase() + status.slice(1)}
                        </span>
                    </div>
                    <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>By {employeeName}</p>
                    <p className={`text-xs mt-1 transition-colors duration-300 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>{timestamp}</p>
                </div>
                
                <div className="text-right">
                    <p className={`text-lg font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>₦{totalAmount.toLocaleString()}</p>
                    <p className={`text-xs mt-1 transition-colors duration-300 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>{itemCount} items</p>
                </div>
            </div>
        </div>
    )
}