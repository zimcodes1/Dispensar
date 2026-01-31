import { useState } from 'react'

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
            <div className="bg-white w-full max-w-2xl max-h-[90vh] rounded-lg shadow-lg flex flex-col">
                {/* Modal Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 shrink-0">
                    <h3 className="text-lg font-semibold text-gray-900">
                        {isEdit ? 'Edit Drug Details' : 'Register New Drug'}
                    </h3>
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
                        <i className="bx bx-x text-2xl"></i>
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto table-scroll">
                    <div className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                        {/* Drug Name */}
                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Drug Name*
                            </label>
                            <input
                                required
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md text-sm"
                                placeholder="Enter drug name"
                            />
                        </div>

                        {/* NAFDAC Number */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                NAFDAC Number*
                            </label>
                            <input
                                required
                                type="text"
                                name="nafdacNumber"
                                value={formData.nafdacNumber}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md text-sm"
                                placeholder="Enter NAFDAC number"
                            />
                        </div>

                        {/* Category */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Category*
                            </label>
                            <select
                                required
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md text-sm"
                            >
                                <option value="">Select category</option>
                                {drugCategories.map(category => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>

                        {/* Manufacture Date */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Manufacture Date*
                            </label>
                            <input
                                required
                                type="date"
                                name="manufactureDate"
                                value={formData.manufactureDate}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md text-sm"
                            />
                        </div>

                        {/* Expiry Date */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Expiry Date*
                            </label>
                            <input
                                required
                                type="date"
                                name="expiryDate"
                                value={formData.expiryDate}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md text-sm"
                            />
                        </div>

                        {/* Price */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Price (₦)*
                            </label>
                            <input
                                required
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md text-sm"
                                placeholder="Enter price"
                                min="0"
                                step="0.01"
                            />
                        </div>

                        {/* Stock */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Initial Stock*
                            </label>
                            <input
                                required
                                type="number"
                                name="stock"
                                value={formData.stock}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md text-sm"
                                placeholder="Enter quantity"
                                min="0"
                            />
                        </div>

                        {/* Description */}
                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Description
                            </label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md text-sm"
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
                            className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900">
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