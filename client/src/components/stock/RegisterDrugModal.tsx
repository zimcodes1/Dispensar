import { useState } from 'react'
import { useDarkMode } from '../../utils/useDarkMode'

interface DrugFormData {
    name: string
    nafdacNumber: string
    manufactureDate: string
    expiryDate: string
    price: string
    stock: string
    category: string
    description?: string
}

interface RegisterDrugModalProps {
    onClose: () => void
    onSubmit: (data: DrugFormData) => void
    initialData?: Partial<DrugFormData>
    isEdit?: boolean
}

const drugCategories = [
    'Antibiotics',
    'Pain Relief',
    'Antidiabetic',
    'Cardiovascular',
    'Respiratory',
    'Gastrointestinal',
    'Supplements',
    'Others'
]

export default function RegisterDrugModal({ onClose, onSubmit, initialData, isEdit = false }: RegisterDrugModalProps) {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    const [formData, setFormData] = useState<DrugFormData>({
        name: initialData?.name || '',
        nafdacNumber: initialData?.nafdacNumber || '',
        manufactureDate: initialData?.manufactureDate || '',
        expiryDate: initialData?.expiryDate || '',
        price: initialData?.price || '',
        stock: initialData?.stock || '',
        category: initialData?.category || '',
        description: initialData?.description || ''
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        onSubmit(formData)
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
            <div className={`w-full max-w-2xl max-h-[90vh] rounded-lg shadow-lg flex flex-col ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                {/* Modal Header */}
                <div className={`flex items-center justify-between px-6 py-4 border-b shrink-0 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {isEdit ? 'Edit Drug Details' : 'Register New Drug'}
                    </h3>
                    <button onClick={onClose} className={`${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'}`}>
                        <i className="bx bx-x text-2xl"></i>
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto table-scroll">
                    <div className="p-6 overflow-x-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-w-[500px]">
                        {/* Drug Name */}
                        <div className="col-span-2">
                            <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                Drug Name*
                            </label>
                            <input
                                required
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`w-full p-2 border rounded-md text-sm ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'border-gray-300'}`}
                                placeholder="Enter drug name"
                            />
                        </div>

                        {/* NAFDAC Number */}
                        <div>
                            <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                NAFDAC Number*
                            </label>
                            <input
                                required
                                type="text"
                                name="nafdacNumber"
                                value={formData.nafdacNumber}
                                onChange={handleChange}
                                className={`w-full p-2 border rounded-md text-sm ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'border-gray-300'}`}
                                placeholder="Enter NAFDAC number"
                            />
                        </div>

                        {/* Category */}
                        <div>
                            <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                Category*
                            </label>
                            <select
                                required
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className={`w-full p-2 border rounded-md text-sm ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                            >
                                <option value="">Select category</option>
                                {drugCategories.map(category => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>

                        {/* Manufacture Date */}
                        <div>
                            <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                Manufacture Date*
                            </label>
                            <input
                                required
                                type="date"
                                name="manufactureDate"
                                value={formData.manufactureDate}
                                onChange={handleChange}
                                className={`w-full p-2 border rounded-md text-sm ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                            />
                        </div>

                        {/* Expiry Date */}
                        <div>
                            <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                Expiry Date*
                            </label>
                            <input
                                required
                                type="date"
                                name="expiryDate"
                                value={formData.expiryDate}
                                onChange={handleChange}
                                className={`w-full p-2 border rounded-md text-sm ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                            />
                        </div>

                        {/* Price */}
                        <div>
                            <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                Price (₦)*
                            </label>
                            <input
                                required
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                className={`w-full p-2 border rounded-md text-sm ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'border-gray-300'}`}
                                placeholder="Enter price"
                                min="0"
                                step="0.01"
                            />
                        </div>

                        {/* Stock */}
                        <div>
                            <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                Initial Stock*
                            </label>
                            <input
                                required
                                type="number"
                                name="stock"
                                value={formData.stock}
                                onChange={handleChange}
                                className={`w-full p-2 border rounded-md text-sm ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'border-gray-300'}`}
                                placeholder="Enter quantity"
                                min="0"
                            />
                        </div>

                        {/* Description */}
                        <div className="col-span-2">
                            <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                Description
                            </label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className={`w-full p-2 border rounded-md text-sm ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'border-gray-300'}`}
                                placeholder="Enter drug description"
                                rows={3}
                            />
                        </div>
                    </div>
                    </div>

                    {/* Footer */}
                    <div className="px-6 pb-6 flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className={`px-4 py-2 text-sm ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                            {isEdit ? 'Save Changes' : 'Register Drug'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}