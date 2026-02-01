import { useState } from 'react'
import { useDarkMode } from '../../utils/useDarkMode'

interface Supply {
    id: string
    name: string
    category: string
    quantity: number
    price: number
    supplier: string
    reorderLevel: number
    description?: string
    unit: string
    location?: string
}

interface SuppliesListProps {
    supplies: Supply[]
    onEdit: (supply: Supply) => void
    onDelete: (supplyId: string) => void
}

export default function SuppliesList({ supplies, onEdit, onDelete }: SuppliesListProps) {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    const [selectedSupply, setSelectedSupply] = useState<Supply | null>(null)

    return (
        <div className="overflow-x-auto table-scroll">
            <table className="w-full min-w-[900px]">
                <thead className={`border-b ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'}`}>
                    <tr>
                        <th className={`py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Name
                        </th>
                        <th className={`py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Category
                        </th>
                        <th className={`py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Quantity
                        </th>
                        <th className={`py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Price
                        </th>
                        <th className={`py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Status
                        </th>
                        <th className={`py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Supplier
                        </th>
                        <th className={`py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className={`divide-y ${isDarkMode ? 'bg-gray-800 divide-gray-700' : 'bg-white divide-gray-200'}`}>
                    {supplies.map((supply) => (
                        <tr key={supply.id} className={`transition ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
                            <td className="py-3 px-4">
                                <div className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{supply.name}</div>
                                {supply.location && (
                                    <div className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                                        {supply.location}
                                    </div>
                                )}
                            </td>
                            <td className="py-3 px-4">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${isDarkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-800'}`}>
                                    {supply.category}
                                </span>
                            </td>
                            <td className="py-3 px-4">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                    supply.quantity === 0 ? isDarkMode ? 'bg-red-900/30 text-red-300' : 'bg-red-100 text-red-800' :
                                    supply.quantity <= supply.reorderLevel ? isDarkMode ? 'bg-yellow-900/30 text-yellow-300' : 'bg-yellow-100 text-yellow-800' :
                                    isDarkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-800'
                                }`}>
                                    {supply.quantity} {supply.unit}
                                </span>
                            </td>
                            <td className={`py-3 px-4 text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                ₦{supply.price.toLocaleString()}
                            </td>
                            <td className="py-3 px-4">
                                <StockStatus quantity={supply.quantity} reorderLevel={supply.reorderLevel} />
                            </td>
                            <td className={`py-3 px-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                {supply.supplier}
                            </td>
                            <td className="py-3 px-4">
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => onEdit(supply)}
                                        className={`p-1 rounded transition ${isDarkMode ? 'text-blue-400 hover:text-blue-300 hover:bg-blue-900/30' : 'text-blue-600 hover:text-blue-800 hover:bg-blue-50'}`}
                                        title="Edit"
                                    >
                                        <i className="bx bx-edit text-lg"></i>
                                    </button>
                                    <button
                                        onClick={() => setSelectedSupply(supply)}
                                        className={`p-1 rounded transition ${isDarkMode ? 'text-gray-400 hover:text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'}`}
                                        title="View Details"
                                    >
                                        <i className="bx bx-info-circle text-lg"></i>
                                    </button>
                                    <button
                                        onClick={() => {
                                            if (window.confirm('Are you sure you want to delete this supply?')) {
                                                onDelete(supply.id)
                                            }
                                        }}
                                        className={`p-1 rounded transition ${isDarkMode ? 'text-red-400 hover:text-red-300 hover:bg-red-900/30' : 'text-red-600 hover:text-red-800 hover:bg-red-50'}`}
                                        title="Delete"
                                    >
                                        <i className="bx bx-trash text-lg"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {supplies.length === 0 && (
                <div className="text-center py-12">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <i className={`bx bx-package text-3xl ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}></i>
                    </div>
                    <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>No supplies found</h3>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>Try adjusting your search or filters</p>
                </div>
            )}

            {/* Supply Details Modal */}
            {selectedSupply && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                    <div className={`w-full max-w-lg rounded-lg shadow-lg p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        <div className="flex items-center justify-between mb-4">
                            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                Supply Details
                            </h3>
                            <button
                                onClick={() => setSelectedSupply(null)}
                                className={`${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'}`}
                            >
                                <i className="bx bx-x text-2xl"></i>
                            </button>
                        </div>
                        
                        <div className="space-y-4">
                            <DetailRow label="Name" value={selectedSupply.name} />
                            <DetailRow label="Category" value={selectedSupply.category} />
                            <DetailRow 
                                label="Quantity" 
                                value={`${selectedSupply.quantity} ${selectedSupply.unit}`} 
                            />
                            <DetailRow 
                                label="Price" 
                                value={`₦${selectedSupply.price.toLocaleString()}`} 
                            />
                            <DetailRow label="Supplier" value={selectedSupply.supplier} />
                            <DetailRow 
                                label="Reorder Level" 
                                value={`${selectedSupply.reorderLevel} ${selectedSupply.unit}`} 
                            />
                            {selectedSupply.location && (
                                <DetailRow label="Location" value={selectedSupply.location} />
                            )}
                            {selectedSupply.description && (
                                <DetailRow label="Description" value={selectedSupply.description} />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

function StockStatus({ quantity, reorderLevel }: { quantity: number, reorderLevel: number }) {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    const config = quantity === 0 
        ? { color: isDarkMode ? 'bg-red-900/30 text-red-300' : 'bg-red-100 text-red-800', text: 'Out of Stock' }
        : quantity <= reorderLevel
        ? { color: isDarkMode ? 'bg-yellow-900/30 text-yellow-300' : 'bg-yellow-100 text-yellow-800', text: 'Low Stock' }
        : { color: isDarkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-800', text: 'In Stock' }

    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.color}`}>
            {config.text}
        </span>
    )
}

function DetailRow({ label, value }: { label: string, value: string }) {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    return (
        <div className="flex">
            <span className={`w-1/3 text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{label}:</span>
            <span className={`w-2/3 text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{value}</span>
        </div>
    )
}