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
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Category
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Quantity
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Price (₦)
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Supplier
                        </th>
                        <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {supplies.map((supply) => (
                        <tr key={supply.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                <div className="font-medium">{supply.name}</div>
                                {supply.location && (
                                    <div className="text-gray-500 text-xs">
                                        Location: {supply.location}
                                    </div>
                                )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {supply.category}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {supply.quantity} {supply.unit}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                {supply.price.toLocaleString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <StockStatus quantity={supply.quantity} reorderLevel={supply.reorderLevel} />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {supply.supplier}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => onEdit(supply)}
                                        className="text-blue-600 hover:text-blue-900"
                                    >
                                        <i className="bx bx-edit text-xl"></i>
                                    </button>
                                    <button
                                        onClick={() => setSelectedSupply(supply)}
                                        className="text-gray-600 hover:text-gray-900"
                                    >
                                        <i className="bx bx-info-circle text-xl"></i>
                                    </button>
                                    <button
                                        onClick={() => {
                                            if (window.confirm('Are you sure you want to delete this supply?')) {
                                                onDelete(supply.id)
                                            }
                                        }}
                                        className="text-red-600 hover:text-red-900"
                                    >
                                        <i className="bx bx-trash text-xl"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

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
    let color = ''
    let text = ''

    if (quantity === 0) {
        color = 'bg-red-100 text-red-800'
        text = 'Out of Stock'
    } else if (quantity <= reorderLevel) {
        color = 'bg-yellow-100 text-yellow-800'
        text = 'Low Stock'
    } else {
        color = 'bg-green-100 text-green-800'
        text = 'In Stock'
    }

    return (
        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${color}`}>
            {text}
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