import { useState } from 'react'

interface SupplyFormData {
    name: string
    category: string
    quantity: string
    price: string
    supplier: string
    reorderLevel: string
    description?: string
    unit: string
    location?: string
}

interface RegisterSupplyModalProps {
    onClose: () => void
    onSubmit: (data: SupplyFormData) => void
    initialData?: Partial<SupplyFormData>
    isEdit?: boolean
}

const supplyCategories = [
    'Injection & Infusion',
    'Wound Care',
    'Personal Protective',
    'Diagnostic',
    'Surgical Instruments',
    'Patient Care',
    'Sterilization',
    'Laboratory',
    'Others'
]

const unitTypes = [
    'Pieces',
    'Boxes',
    'Packs',
    'Sets',
    'Rolls',
    'Pairs'
]

export default function RegisterSupplyModal({ 
    onClose, 
    onSubmit, 
    initialData, 
    isEdit = false 
}: RegisterSupplyModalProps) {
    const [formData, setFormData] = useState<SupplyFormData>({
        name: initialData?.name || '',
        category: initialData?.category || '',
        quantity: initialData?.quantity || '',
        price: initialData?.price || '',
        supplier: initialData?.supplier || '',
        reorderLevel: initialData?.reorderLevel || '',
        description: initialData?.description || '',
        unit: initialData?.unit || '',
        location: initialData?.location || ''
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
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 flex-shrink-0">
                    <h3 className="text-lg font-semibold text-gray-900">
                        {isEdit ? 'Edit Medical Supply' : 'Register New Medical Supply'}
                    </h3>
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
                        <i className="bx bx-x text-2xl"></i>
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto table-scroll">
                    <div className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                        {/* Supply Name */}
                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Supply Name*
                            </label>
                            <input
                                required
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md text-sm"
                                placeholder="Enter supply name"
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
                                {supplyCategories.map(category => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>

                        {/* Unit Type */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Unit Type*
                            </label>
                            <select
                                required
                                name="unit"
                                value={formData.unit}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md text-sm"
                            >
                                <option value="">Select unit</option>
                                {unitTypes.map(unit => (
                                    <option key={unit} value={unit}>{unit}</option>
                                ))}
                            </select>
                        </div>

                        {/* Quantity */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Quantity*
                            </label>
                            <input
                                required
                                type="number"
                                name="quantity"
                                value={formData.quantity}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md text-sm"
                                placeholder="Enter quantity"
                                min="0"
                            />
                        </div>

                        {/* Price */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Price per {formData.unit || 'unit'} (₦)*
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

                        {/* Supplier */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Supplier*
                            </label>
                            <input
                                required
                                type="text"
                                name="supplier"
                                value={formData.supplier}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md text-sm"
                                placeholder="Enter supplier name"
                            />
                        </div>

                        {/* Reorder Level */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Reorder Level*
                            </label>
                            <input
                                required
                                type="number"
                                name="reorderLevel"
                                value={formData.reorderLevel}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md text-sm"
                                placeholder="Minimum stock level"
                                min="0"
                            />
                        </div>

                        {/* Storage Location */}
                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Storage Location
                            </label>
                            <input
                                type="text"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded-md text-sm"
                                placeholder="Enter storage location (optional)"
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
                                placeholder="Enter supply description (optional)"
                                rows={3}
                            />
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
                            {isEdit ? 'Save Changes' : 'Register Supply'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}