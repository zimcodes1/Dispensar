import { useState } from 'react'

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
        <div className="bg-white p-4 rounded-lg shadow mb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Search */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Search
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            value={filters.search}
                            onChange={(e) => handleFilterChange('search', e.target.value)}
                            placeholder="Search supplies..."
                            className="w-full p-2 pl-8 border border-gray-300 rounded-md text-sm"
                        />
                        <i className="bx bx-search absolute left-2.5 top-2.5 text-gray-400"></i>
                    </div>
                </div>

                {/* Category Filter */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Category
                    </label>
                    <select
                        value={filters.category}
                        onChange={(e) => handleFilterChange('category', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md text-sm"
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Stock Status
                    </label>
                    <select
                        value={filters.stockStatus}
                        onChange={(e) => handleFilterChange('stockStatus', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md text-sm"
                    >
                        <option value="">All Status</option>
                        <option value="in_stock">In Stock</option>
                        <option value="low_stock">Low Stock</option>
                        <option value="out_of_stock">Out of Stock</option>
                    </select>
                </div>

                {/* Supplier Filter */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Supplier
                    </label>
                    <select
                        value={filters.supplier}
                        onChange={(e) => handleFilterChange('supplier', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md text-sm"
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