import { useDarkMode } from '../../utils/useDarkMode'

interface InventoryItem {
    name: string
    stock: number
    threshold: number
    category: string
    lastUpdated: string
}

const demoItems: InventoryItem[] = [
    {
        name: 'Paracetamol 500mg',
        stock: 50,
        threshold: 100,
        category: 'Pain Relief',
        lastUpdated: '2 hours ago'
    },
    {
        name: 'Amoxicillin 250mg',
        stock: 25,
        threshold: 75,
        category: 'Antibiotics',
        lastUpdated: '1 day ago'
    },
    {
        name: 'Omeprazole 20mg',
        stock: 30,
        threshold: 50,
        category: 'Digestive',
        lastUpdated: '3 hours ago'
    },
    {
        name: 'Metformin 500mg',
        stock: 15,
        threshold: 80,
        category: 'Diabetes',
        lastUpdated: '5 hours ago'
    }
]

export default function InventoryStatus() {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    const lowStockCount = demoItems.length
    
    return (
        <div className={`p-6 rounded-xl shadow-sm ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Low Stock Alert</h3>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Items below reorder threshold</p>
                </div>
                <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                    View All ({lowStockCount})
                </button>
            </div>

            <div className="space-y-4 overflow-x-auto lg:overflow-x-visible">
                <div className="min-w-[500px] lg:min-w-0 space-y-4">
                {demoItems.map((item, index) => (
                    <div key={index} className={`flex items-center justify-between p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                                <h4 className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{item.name}</h4>
                                <span className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>{item.lastUpdated}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.category}</span>
                                <span className="text-xs text-red-600">Below threshold</span>
                            </div>
                        </div>
                        
                        <div className="ml-4 text-right">
                            <div className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{item.stock} units</div>
                            <div className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>of {item.threshold}</div>
                        </div>

                        <div className="ml-4 w-24">
                            <div className={`h-2 rounded-full relative ${isDarkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>
                                <div 
                                    className={`h-full rounded-full ${
                                        (item.stock / item.threshold) < 0.3 ? 'bg-red-500' : 'bg-yellow-500'
                                    }`}
                                    style={{ width: `${(item.stock / item.threshold) * 100}%` }}
                                ></div>
                            </div>
                            <p className={`text-xs mt-1 text-center ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                                {Math.round((item.stock / item.threshold) * 100)}%
                            </p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}