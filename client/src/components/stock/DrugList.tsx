interface Drug {
    id: string
    name: string
    nafdacNumber: string
    category: string
    price: number
    stock: number
    expiryDate: string
    manufactureDate: string
    status: 'active' | 'delisted' | 'expired' | 'expiring-soon'
}

interface DrugListProps {
    drugs: Drug[]
    onEdit: (drug: Drug) => void
    onDelist: (drugId: string) => void
}

export default function DrugList({ drugs, onEdit, onDelist }: DrugListProps) {
    function getStatusBadge(status: Drug['status']) {
        const styles = {
            'active': 'bg-green-100 text-green-800',
            'delisted': 'bg-gray-100 text-gray-800',
            'expired': 'bg-red-100 text-red-800',
            'expiring-soon': 'bg-yellow-100 text-yellow-800'
        }
        const labels = {
            'active': 'Active',
            'delisted': 'Delisted',
            'expired': 'Expired',
            'expiring-soon': 'Expiring Soon'
        }
        return <span className={`${styles[status]} text-xs px-2.5 py-0.5 rounded-full font-medium`}>{labels[status]}</span>
    }

    return (
        <div className="overflow-x-auto table-scroll">
            <table className="w-full min-w-[900px]">
                <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                        <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Drug Info
                        </th>
                        <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Category
                        </th>
                        <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Stock
                        </th>
                        <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Price
                        </th>
                        <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Expiry Date
                        </th>
                        <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Status
                        </th>
                        <th className="py-3 px-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {drugs.map((drug) => (
                        <tr key={drug.id} className="hover:bg-gray-50 transition">
                            <td className="py-3 px-4">
                                <div className="text-sm font-medium text-gray-900">{drug.name}</div>
                                <div className="text-xs text-gray-500">NAFDAC: {drug.nafdacNumber}</div>
                            </td>
                            <td className="py-3 px-4">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                    {drug.category}
                                </span>
                            </td>
                            <td className="py-3 px-4">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                    drug.stock === 0 ? 'bg-red-100 text-red-800' :
                                    drug.stock < 50 ? 'bg-yellow-100 text-yellow-800' :
                                    'bg-green-100 text-green-800'
                                }`}>
                                    {drug.stock} units
                                </span>
                            </td>
                            <td className="py-3 px-4 text-sm font-medium text-gray-900">
                                ₦{drug.price.toLocaleString()}
                            </td>
                            <td className="py-3 px-4 text-sm text-gray-700">
                                {new Date(drug.expiryDate).toLocaleDateString('en-GB')}
                            </td>
                            <td className="py-3 px-4">
                                {getStatusBadge(drug.status)}
                            </td>
                            <td className="py-3 px-4">
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => onEdit(drug)}
                                        className="text-blue-600 hover:text-blue-800 p-1 hover:bg-blue-50 rounded transition"
                                        title="Edit"
                                    >
                                        <i className="bx bx-edit text-lg"></i>
                                    </button>
                                    <button
                                        onClick={() => onDelist(drug.id)}
                                        className="text-red-600 hover:text-red-800 p-1 hover:bg-red-50 rounded transition"
                                        title="Delist"
                                    >
                                        <i className="bx bx-trash text-lg"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {drugs.length === 0 && (
                <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="bx bx-package text-3xl text-gray-400"></i>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No drugs found</h3>
                    <p className="text-sm text-gray-500">Try adjusting your search or filters</p>
                </div>
            )}
        </div>
    )
}