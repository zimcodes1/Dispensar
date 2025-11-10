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
    return (
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Search Input */}
                <div className="relative">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => onSearchChange(e.target.value)}
                        placeholder="Search drugs..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm"
                    />
                    <i className="bx bx-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                </div>

                {/* Category Filter */}
                <div>
                    <select
                        value={category}
                        onChange={(e) => onCategoryChange(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
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
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
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
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
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