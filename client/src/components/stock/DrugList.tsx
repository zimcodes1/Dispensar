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
        switch (status) {
            case 'active':
                return <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Active</span>
            case 'delisted':
                return <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">Delisted</span>
            case 'expired':
                return <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Expired</span>
            case 'expiring-soon':
                return <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Expiring Soon</span>
        }
    }

    return (
        <div className="overflow-x-auto">
            <table className="w-full">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                            Drug Info
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                            Stock
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                            Expiry
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {drugs.map((drug) => (
                        <tr key={drug.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                                <div>
                                    <div className="text-sm font-medium text-gray-900">{drug.name}</div>
                                    <div className="text-sm text-gray-500">NAFDAC: {drug.nafdacNumber}</div>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                                {drug.category}
                            </td>
                            <td className="px-6 py-4">
                                <div className="text-sm text-gray-900">{drug.stock} units</div>
                                {drug.stock < 50 && (
                                    <div className="text-xs text-red-600">Low stock</div>
                                )}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-900">
                                ₦{drug.price.toLocaleString()}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                                {new Date(drug.expiryDate).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4">
                                {getStatusBadge(drug.status)}
                            </td>
                            <td className="px-6 py-4 text-right text-sm font-medium">
                                <button
                                    onClick={() => onEdit(drug)}
                                    className="text-green-600 hover:text-green-900 mr-3"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => onDelist(drug.id)}
                                    className="text-red-600 hover:text-red-900"
                                >
                                    Delist
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {drugs.length === 0 && (
                <div className="text-center py-8">
                    <p className="text-gray-500">No drugs found matching your criteria.</p>
                </div>
            )}
        </div>
    )
}