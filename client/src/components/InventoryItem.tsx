import { useDarkMode } from "../utils/useDarkMode"

interface InventoryItemProps {
    id: string
    name: string
    category: string
    manufacturer: string
    formulation: string
    price: number
    stock: number
    isSelected?: boolean
    onSelect?: (id: string) => void
    onEdit?: (id: string) => void
    onDelete?: (id: string) => void
}

function InventoryItem({
    id,
    name,
    category,
    manufacturer,
    formulation,
    price,
    stock,
    isSelected = false,
    onSelect,
    onEdit,
    onDelete
}: InventoryItemProps) {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    const isLowStock = stock < 50
    
    return(
        <tr className={`border-b transition-colors duration-300 ${
            isDarkMode
                ? 'border-gray-700 hover:bg-gray-700/50'
                : 'border-gray-200 hover:bg-gray-50'
        }`}>
            {/* Checkbox */}
            <td className="py-3 px-4">
                <input 
                    type="checkbox" 
                    checked={isSelected}
                    onChange={() => onSelect?.(id)}
                    className="form-checkbox h-4 w-4 text-green-600 accent-green-400 cursor-pointer" 
                />
            </td>
            {/* Name */}
            <td className={`py-3 px-4 text-sm font-medium transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{name}</td>
            {/* Category */}
            <td className="py-3 px-4 text-sm">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors duration-300 ${
                    isDarkMode
                        ? 'bg-blue-900/30 text-blue-300'
                        : 'bg-blue-100 text-blue-800'
                }`}>
                    {category}
                </span>
            </td>
            {/* Manufacturer */}
            <td className={`py-3 px-4 text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{manufacturer}</td>
            {/* Formulation */}
            <td className={`py-3 px-4 text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{formulation}</td>
            {/* Price */}
            <td className={`py-3 px-4 text-sm font-medium transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>₦{price.toLocaleString()}</td>
            {/* Stock */}
            <td className="py-3 px-4 text-sm">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors duration-300 ${
                    isLowStock 
                        ? isDarkMode 
                            ? 'bg-red-900/30 text-red-300'
                            : 'bg-red-100 text-red-800'
                        : isDarkMode
                            ? 'bg-green-900/30 text-green-300'
                            : 'bg-green-100 text-green-800'
                }`}>
                    {stock} units
                </span>
            </td>
            {/* Actions */}
            <td className="py-3 px-4">
                <div className="flex items-center gap-2">
                    <button 
                        onClick={() => onEdit?.(id)}
                        className={`p-1 rounded transition-colors duration-300 ${
                            isDarkMode
                                ? 'text-blue-400 hover:text-blue-300 hover:bg-blue-900/30'
                                : 'text-blue-600 hover:text-blue-800 hover:bg-blue-50'
                        }`}
                        title="Edit"
                    >
                        <i className="bx bx-edit text-lg"></i>
                    </button>
                    <button 
                        onClick={() => onDelete?.(id)}
                        className={`p-1 rounded transition-colors duration-300 ${
                            isDarkMode
                                ? 'text-red-400 hover:text-red-300 hover:bg-red-900/30'
                                : 'text-red-600 hover:text-red-800 hover:bg-red-50'
                        }`}
                        title="Delete"
                    >
                        <i className="bx bx-trash text-lg"></i>
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default InventoryItem