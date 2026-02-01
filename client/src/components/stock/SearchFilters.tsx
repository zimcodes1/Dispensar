import { useDarkMode } from '../../utils/useDarkMode'

interface SearchFiltersProps {
    search: string
    onSearchChange: (value: string) => void
    category: string
    onCategoryChange: (value: string) => void
    status: string
    onStatusChange: (value: string) => void
    stockFilter: string
    onStockFilterChange: (value: string) => void
}

const categories = [
    'All Categories',
    'Antibiotics',
    'Pain Relief',
    'Antidiabetic',
    'Cardiovascular',
    'Respiratory',
    'Gastrointestinal',
    'Supplements',
    'Others'
]

const statuses = [
    'All Status',
    'Active',
    'Expired',
    'Expiring Soon',
    'Delisted'
]

const stockFilters = [
    'All Stock Levels',
    'Low Stock',
    'Out of Stock',
    'In Stock'
]

export default function SearchFilters({
    search,
    onSearchChange,
    category,
    onCategoryChange,
    status,
    onStatusChange,
    stockFilter,
    onStockFilterChange
}: SearchFiltersProps) {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    return (
        <div className={`p-4 rounded-lg shadow-sm border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Search Input */}
                <div className="relative">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => onSearchChange(e.target.value)}
                        placeholder="Search drugs..."
                        className={`w-full pl-10 pr-4 py-2 border rounded-lg text-sm ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'border-gray-300'}`}
                    />
                    <i className={`bx bx-search absolute left-3 top-1/2 -translate-y-1/2 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}></i>
                </div>

                {/* Category Filter */}
                <div>
                    <select
                        value={category}
                        onChange={(e) => onCategoryChange(e.target.value)}
                        className={`w-full px-3 py-2 border rounded-lg text-sm ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                    >
                        {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>

                {/* Status Filter */}
                <div>
                    <select
                        value={status}
                        onChange={(e) => onStatusChange(e.target.value)}
                        className={`w-full px-3 py-2 border rounded-lg text-sm ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                    >
                        {statuses.map(stat => (
                            <option key={stat} value={stat}>{stat}</option>
                        ))}
                    </select>
                </div>

                {/* Stock Level Filter */}
                <div>
                    <select
                        value={stockFilter}
                        onChange={(e) => onStockFilterChange(e.target.value)}
                        className={`w-full px-3 py-2 border rounded-lg text-sm ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                    >
                        {stockFilters.map(filter => (
                            <option key={filter} value={filter}>{filter}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}