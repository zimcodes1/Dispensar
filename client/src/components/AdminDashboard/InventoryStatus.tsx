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
    const lowStockCount = demoItems.length
    
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">Low Stock Alert</h3>
                    <p className="text-sm text-gray-600">Items below reorder threshold</p>
                </div>
                <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                    View All ({lowStockCount})
                </button>
            </div>

            <div className="space-y-4">
                {demoItems.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg">
                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="text-sm font-medium text-gray-900">{item.name}</h4>
                                <span className="text-xs text-gray-500">{item.lastUpdated}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-xs text-gray-600">{item.category}</span>
                                <span className="text-xs text-red-600">Below threshold</span>
                            </div>
                        </div>
                        
                        <div className="ml-4 text-right">
                            <div className="text-sm font-medium text-gray-900">{item.stock} units</div>
                            <div className="text-xs text-gray-500">of {item.threshold}</div>
                        </div>

                        <div className="ml-4 w-24">
                            <div className="h-2 bg-gray-200 rounded-full relative">
                                <div 
                                    className={`h-full rounded-full ${
                                        (item.stock / item.threshold) < 0.3 ? 'bg-red-500' : 'bg-yellow-500'
                                    }`}
                                    style={{ width: `${(item.stock / item.threshold) * 100}%` }}
                                ></div>
                            </div>
                            <p className="text-xs text-gray-500 mt-1 text-center">
                                {Math.round((item.stock / item.threshold) * 100)}%
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}