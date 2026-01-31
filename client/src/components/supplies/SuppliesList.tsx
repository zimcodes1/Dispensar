import { useState } from 'react'

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
    const [selectedSupply, setSelectedSupply] = useState<Supply | null>(null)

    return (
        <div className="overflow-x-auto table-scroll">
            <table className="w-full min-w-[900px]">
                <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                        <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Name
                        </th>
                        <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Category
                        </th>
                        <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Quantity
                        </th>
                        <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Price
                        </th>
                        <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Status
                        </th>
                        <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Supplier
                        </th>
                        <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {supplies.map((supply) => (
                        <tr key={supply.id} className="hover:bg-gray-50 transition">
                            <td className="py-3 px-4">
                                <div className="text-sm font-medium text-gray-900">{supply.name}</div>
                                {supply.location && (
                                    <div className="text-xs text-gray-500">
                                        {supply.location}
                                    </div>
                                )}
                            </td>
                            <td className="py-3 px-4">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                    {supply.category}
                                </span>
                            </td>
                            <td className="py-3 px-4">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                    supply.quantity === 0 ? 'bg-red-100 text-red-800' :
                                    supply.quantity <= supply.reorderLevel ? 'bg-yellow-100 text-yellow-800' :
                                    'bg-green-100 text-green-800'
                                }`}>
                                    {supply.quantity} {supply.unit}
                                </span>
                            </td>
                            <td className="py-3 px-4 text-sm font-medium text-gray-900">
                                ₦{supply.price.toLocaleString()}
                            </td>
                            <td className="py-3 px-4">
                                <StockStatus quantity={supply.quantity} reorderLevel={supply.reorderLevel} />
                            </td>
                            <td className="py-3 px-4 text-sm text-gray-700">
                                {supply.supplier}
                            </td>
                            <td className="py-3 px-4">
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => onEdit(supply)}
                                        className="text-blue-600 hover:text-blue-800 p-1 hover:bg-blue-50 rounded transition"
                                        title="Edit"
                                    >
                                        <i className="bx bx-edit text-lg"></i>
                                    </button>
                                    <button
                                        onClick={() => setSelectedSupply(supply)}
                                        className="text-gray-600 hover:text-gray-800 p-1 hover:bg-gray-50 rounded transition"
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
                                        className="text-red-600 hover:text-red-800 p-1 hover:bg-red-50 rounded transition"
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
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="bx bx-package text-3xl text-gray-400"></i>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No supplies found</h3>
                    <p className="text-sm text-gray-500">Try adjusting your search or filters</p>
                </div>
            )}

            {/* Supply Details Modal */}
            {selectedSupply && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                    <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">
                                Supply Details
                            </h3>
                            <button
                                onClick={() => setSelectedSupply(null)}
                                className="text-gray-600 hover:text-gray-900"
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
    const config = quantity === 0 
        ? { color: 'bg-red-100 text-red-800', text: 'Out of Stock' }
        : quantity <= reorderLevel
        ? { color: 'bg-yellow-100 text-yellow-800', text: 'Low Stock' }
        : { color: 'bg-green-100 text-green-800', text: 'In Stock' }

    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.color}`}>
            {config.text}
        </span>
    )
}

function DetailRow({ label, value }: { label: string, value: string }) {
    return (
        <div className="flex">
            <span className="w-1/3 text-sm font-medium text-gray-500">{label}:</span>
            <span className="w-2/3 text-sm text-gray-900">{value}</span>
        </div>
    )
}