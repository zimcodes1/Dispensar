import { useState } from 'react'
import { useDarkMode } from '../../utils/useDarkMode'

interface FiltersState {
    search: string
    category: string
    stockStatus: string
    supplier: string
}

interface SuppliesFiltersProps {
    onFilterChange: (filters: FiltersState) => void
    categories: string[]
    suppliers: string[]
}

export default function SuppliesFilters({ onFilterChange, categories, suppliers }: SuppliesFiltersProps) {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    const [filters, setFilters] = useState<FiltersState>({
        search: '',
        category: '',
        stockStatus: '',
        supplier: ''
    })

    function handleFilterChange(field: keyof FiltersState, value: string) {
        const newFilters = { ...filters, [field]: value }
        setFilters(newFilters)
        onFilterChange(newFilters)
    }

    return (
        <div className={`p-4 rounded-lg shadow mb-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Search */}
                <div>
                    <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Search
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            value={filters.search}
                            onChange={(e) => handleFilterChange('search', e.target.value)}
                            placeholder="Search supplies..."
                            className={`w-full p-2 pl-8 border rounded-md text-sm ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'border-gray-300'}`}
                        />
                        <i className={`bx bx-search absolute left-2.5 top-2.5 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}></i>
                    </div>
                </div>

                {/* Category Filter */}
                <div>
                    <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Category
                    </label>
                    <select
                        value={filters.category}
                        onChange={(e) => handleFilterChange('category', e.target.value)}
                        className={`w-full p-2 border rounded-md text-sm ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                    >
                        <option value="">All Categories</option>
                        {categories.map(category => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Stock Status */}
                <div>
                    <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Stock Status
                    </label>
                    <select
                        value={filters.stockStatus}
                        onChange={(e) => handleFilterChange('stockStatus', e.target.value)}
                        className={`w-full p-2 border rounded-md text-sm ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                    >
                        <option value="">All Status</option>
                        <option value="in_stock">In Stock</option>
                        <option value="low_stock">Low Stock</option>
                        <option value="out_of_stock">Out of Stock</option>
                    </select>
                </div>

                {/* Supplier Filter */}
                <div>
                    <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Supplier
                    </label>
                    <select
                        value={filters.supplier}
                        onChange={(e) => handleFilterChange('supplier', e.target.value)}
                        className={`w-full p-2 border rounded-md text-sm ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                    >
                        <option value="">All Suppliers</option>
                        {suppliers.map(supplier => (
                            <option key={supplier} value={supplier}>
                                {supplier}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}