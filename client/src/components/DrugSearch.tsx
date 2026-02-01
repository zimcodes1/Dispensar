import { useState } from 'react'
import { useDarkMode } from '../utils/useDarkMode'

interface DrugSearchProps {
    onSearch?: (query: string) => void
    onFilter?: () => void
    placeholder?: string
}

function DrugSearch({ 
    onSearch, 
    onFilter, 
    placeholder = "Search by drug name, category, or manufacturer..." 
}: DrugSearchProps) {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    const [searchQuery, setSearchQuery] = useState('')
    
    const handleSearch = () => {
        onSearch?.(searchQuery)
    }
    
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSearch()
        }
    }
    
    const handleClear = () => {
        setSearchQuery('')
        onSearch?.('')
    }
    
    return(
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
                onClick={onFilter}
                className={`h-12 px-4 rounded-lg border transition flex items-center gap-2 ${isDarkMode ? 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700' : 'bg-white border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700'}`}
            >
                <i className="bx bx-filter-alt text-xl"></i>
                <span className="max-sm:hidden font-medium">Filter</span>
            </button>
        </div>
    )
}

export default DrugSearch