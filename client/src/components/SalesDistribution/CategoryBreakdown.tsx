interface CategoryBreakdownProps {
    isDarkMode: boolean
}

export default function CategoryBreakdown({ isDarkMode }: CategoryBreakdownProps) {
    const categories = [
        { name: 'Antibiotics', value: 28, revenue: '₦92,680', color: 'bg-blue-600' },
        { name: 'Pain Relief', value: 22, revenue: '₦72,820', color: 'bg-green-600' },
        { name: 'Vitamins', value: 15, revenue: '₦49,650', color: 'bg-yellow-600' },
        { name: 'Prescriptions', value: 20, revenue: '₦66,200', color: 'bg-purple-600' },
        { name: 'Medical Supplies', value: 10, revenue: '₦33,100', color: 'bg-pink-600' },
        { name: 'Others', value: 5, revenue: '₦16,550', color: 'bg-gray-600' }
    ]
    
    return (
        <div className={`p-6 rounded-lg shadow-sm border transition-colors duration-300 ${
            isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        }`}>
            <h3 className={`text-lg font-semibold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                <i className="bx bx-list-ul mr-2"></i>Category Breakdown
            </h3>
            <div className="space-y-3">
                {categories.map(cat => (
                    <div key={cat.name} className={`flex items-center justify-between p-3 rounded-lg transition-colors duration-300 ${
                        isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
                    }`}>
                        <div className="flex items-center gap-3 flex-1">
                            <div className={`w-3 h-3 rounded-full ${cat.color}`}></div>
                            <span className={`text-sm font-medium transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{cat.name}</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{cat.revenue}</span>
                            <span className={`text-sm font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{cat.value}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
