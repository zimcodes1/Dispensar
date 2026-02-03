import { useState } from 'react'
import { useDarkMode } from '../utils/useDarkMode'

interface DrugSearchProps {
    onSearch?: (query: string, filters: FilterState) => void
    placeholder?: string
}

interface FilterState {
    category: string
    stockStatus: string
    manufacturer: string
}

function DrugSearch({ 
    onSearch, 
    placeholder = "Search by drug name, category, or manufacturer..." 
}: DrugSearchProps) {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    const [searchQuery, setSearchQuery] = useState('')
    const [showFilters, setShowFilters] = useState(false)
    const [filters, setFilters] = useState<FilterState>({
        category: 'all',
        stockStatus: 'all',
        manufacturer: 'all'
    })
    
    const handleSearch = () => {
        onSearch?.(searchQuery, filters)
    }
    
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSearch()
        }
    }
    
    const handleClear = () => {
        setSearchQuery('')
        onSearch?.('', filters)
    }
    
    const handleFilterChange = (key: keyof FilterState, value: string) => {
        const newFilters = { ...filters, [key]: value }
        setFilters(newFilters)
        onSearch?.(searchQuery, newFilters)
    }
    
    const clearFilters = () => {
        const resetFilters = { category: 'all', stockStatus: 'all', manufacturer: 'all' }
        setFilters(resetFilters)
        onSearch?.(searchQuery, resetFilters)
    }
    
    return(
        <>
            <div className="flex w-full gap-3 items-center mt-4">
            <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className={`bx bx-search text-xl transition-colors duration-300 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}></i>
                </div>
                <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={placeholder}
                    className={`w-full h-12 pl-10 pr-10 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-300 ${
                        isDarkMode
                            ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500'
                            : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
                    }`}
                />
                {searchQuery && (
                    <button
                        onClick={handleClear}
                        className={`absolute inset-y-0 right-0 pr-3 flex items-center transition-colors duration-300 ${
                            isDarkMode
                                ? 'text-gray-500 hover:text-gray-400'
                                : 'text-gray-400 hover:text-gray-600'
                        }`}
                    >
                        <i className="bx bx-x text-xl"></i>
                    </button>
                )}
            </div>
            
            <button 
                onClick={handleSearch}
                className="h-12 px-6 rounded-lg bg-green-600 text-white hover:bg-green-700 transition flex items-center gap-2 font-medium"
            >
                <i className="bx bx-search"></i>
                <span className="max-sm:hidden">Search</span>
            </button>
            
            <button 
                onClick={() => setShowFilters(!showFilters)}
                className={`h-12 px-4 rounded-lg border transition flex items-center gap-2 ${showFilters ? 'bg-green-600 text-white border-green-600' : isDarkMode ? 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700' : 'bg-white border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700'}`}
            >
                <i className="bx bx-filter-alt text-xl"></i>
                <span className="max-sm:hidden font-medium">Filter</span>
            </button>
        </div>
        
        {/* Filter Panel */}
            {showFilters && (
            <div className={`mt-4 p-4 rounded-lg border transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                <div className="flex items-center justify-between mb-4">
                    <h3 className={`font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Filters</h3>
                    <button onClick={clearFilters} className="text-sm text-green-600 hover:text-green-700 font-medium">Clear All</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Category</label>
                        <select
                            value={filters.category}
                            onChange={(e) => handleFilterChange('category', e.target.value)}
                            className={`w-full p-2 border rounded-lg text-sm transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                        >
                            <option value="all">All Categories</option>
                            <option value="antibiotics">Antibiotics</option>
                            <option value="painrelief">Pain Relief</option>
                            <option value="vitamins">Vitamins</option>
                            <option value="prescription">Prescription</option>
                        </select>
                    </div>
                    <div>
                        <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Stock Status</label>
                        <select
                            value={filters.stockStatus}
                            onChange={(e) => handleFilterChange('stockStatus', e.target.value)}
                            className={`w-full p-2 border rounded-lg text-sm transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                        >
                            <option value="all">All Stock</option>
                            <option value="instock">In Stock</option>
                            <option value="lowstock">Low Stock</option>
                            <option value="outofstock">Out of Stock</option>
                        </select>
                    </div>
                    <div>
                        <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Manufacturer</label>
                        <select
                            value={filters.manufacturer}
                            onChange={(e) => handleFilterChange('manufacturer', e.target.value)}
                            className={`w-full p-2 border rounded-lg text-sm transition-colors duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                        >
                            <option value="all">All Manufacturers</option>
                            <option value="pfizer">Pfizer</option>
                            <option value="gsk">GSK</option>
                            <option value="novartis">Novartis</option>
                            <option value="roche">Roche</option>
                        </select>
                    </div>
                </div>
            </div>
        )}
        </>
    )
}
export default DrugSearch