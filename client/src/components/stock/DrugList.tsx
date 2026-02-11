import { useDarkMode } from '../../utils/useDarkMode'

interface Drug {
    id: string
    name: string
    itemType?: 'drug' | 'supply'
    nafdacNumber?: string
    category: string
    price: number
    stock: number
    expiryDate?: string
    manufactureDate?: string
    supplier?: string
    unit?: string
    status: 'active' | 'delisted' | 'expired' | 'expiring-soon'
}

interface DrugListProps {
    drugs: Drug[]
    onEdit: (drug: Drug) => void
    onDelist: (drugId: string) => void
}

export default function DrugList({ drugs, onEdit, onDelist }: DrugListProps) {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    function getStatusBadge(status: Drug['status']) {
        const styles = {
            'active': isDarkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-800',
            'delisted': isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-800',
            'expired': isDarkMode ? 'bg-red-900/30 text-red-300' : 'bg-red-100 text-red-800',
            'expiring-soon': isDarkMode ? 'bg-yellow-900/30 text-yellow-300' : 'bg-yellow-100 text-yellow-800'
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
                <thead className={`border-b ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'}`}>
                    <tr>
                        <th className={`py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Drug Info
                        </th>
                        <th className={`py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Category
                        </th>
                        <th className={`py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Stock
                        </th>
                        <th className={`py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Price
                        </th>
                        <th className={`py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Expiry Date
                        </th>
                        <th className={`py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Status
                        </th>
                        <th className={`py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className={`divide-y ${isDarkMode ? 'bg-gray-800 divide-gray-700' : 'bg-white divide-gray-200'}`}>
                    {drugs.map((drug) => (
                        <tr key={drug.id} className={`transition ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
                            <td className="py-3 px-4">
                                <div className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{drug.name}</div>
                                <div className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>NAFDAC: {drug.nafdacNumber}</div>
                            </td>
                            <td className="py-3 px-4">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${isDarkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-800'}`}>
                                    {drug.category}
                                </span>
                            </td>
                            <td className="py-3 px-4">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                    drug.stock === 0 ? isDarkMode ? 'bg-red-900/30 text-red-300' : 'bg-red-100 text-red-800' :
                                    drug.stock < 50 ? isDarkMode ? 'bg-yellow-900/30 text-yellow-300' : 'bg-yellow-100 text-yellow-800' :
                                    isDarkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-800'
                                }`}>
                                    {drug.stock} units
                                </span>
                            </td>
                            <td className={`py-3 px-4 text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                ₦{drug.price.toLocaleString()}
                            </td>
                            <td className={`py-3 px-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                {drug.expiryDate ? new Date(drug.expiryDate).toLocaleDateString('en-GB') : 'N/A'}
                            </td>
                            <td className="py-3 px-4">
                                {getStatusBadge(drug.status)}
                            </td>
                            <td className="py-3 px-4">
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => onEdit(drug)}
                                        className={`p-1 rounded transition ${isDarkMode ? 'text-blue-400 hover:text-blue-300 hover:bg-blue-900/30' : 'text-blue-600 hover:text-blue-800 hover:bg-blue-50'}`}
                                        title="Edit"
                                    >
                                        <i className="bx bx-edit text-lg"></i>
                                    </button>
                                    <button
                                        onClick={() => onDelist(drug.id)}
                                        className={`p-1 rounded transition ${isDarkMode ? 'text-red-400 hover:text-red-300 hover:bg-red-900/30' : 'text-red-600 hover:text-red-800 hover:bg-red-50'}`}
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
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                        <i className={`bx bx-package text-3xl ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}></i>
                    </div>
                    <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>No drugs found</h3>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>Try adjusting your search or filters</p>
                </div>
            )}
        </div>
    )
}