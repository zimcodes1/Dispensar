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
    const isLowStock = stock < 50
    
    return(
        <tr className="border-b border-gray-200 hover:bg-gray-50 transition">
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
            <td className="py-3 px-4 text-sm font-medium text-gray-900">{name}</td>
            {/* Category */}
            <td className="py-3 px-4 text-sm text-gray-700">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {category}
                </span>
            </td>
            {/* Manufacturer */}
            <td className="py-3 px-4 text-sm text-gray-700">{manufacturer}</td>
            {/* Formulation */}
            <td className="py-3 px-4 text-sm text-gray-700">{formulation}</td>
            {/* Price */}
            <td className="py-3 px-4 text-sm text-gray-900 font-medium">₦{price.toLocaleString()}</td>
            {/* Stock */}
            <td className="py-3 px-4 text-sm">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    isLowStock ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                }`}>
                    {stock} units
                </span>
            </td>
            {/* Actions */}
            <td className="py-3 px-4">
                <div className="flex items-center gap-2">
                    <button 
                        onClick={() => onEdit?.(id)}
                        className="text-blue-600 hover:text-blue-800 p-1 hover:bg-blue-50 rounded transition"
                        title="Edit"
                    >
                        <i className="bx bx-edit text-lg"></i>
                    </button>
                    <button 
                        onClick={() => onDelete?.(id)}
                        className="text-red-600 hover:text-red-800 p-1 hover:bg-red-50 rounded transition"
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