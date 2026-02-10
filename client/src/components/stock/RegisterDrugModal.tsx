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
    formulation: string
    manufacturer: string
    image: string
    fractionalUnits: string[]
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

const formulations = [
    'Tablets',
    'Capsules',
    'Syrup',
    'Injection',
    'Loose Capsules',
    'Loose Tablets',
    'Cream',
    'Ointment'
]

const fractionalOptions = ['1', '0.75', '0.5', '0.25']

export default function RegisterDrugModal({ onClose, onSubmit, initialData, isEdit = false }: RegisterDrugModalProps) {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    const [imagePreview, setImagePreview] = useState<string>(initialData?.image || '')
    const [formData, setFormData] = useState<DrugFormData>({
        name: initialData?.name || '',
        nafdacNumber: initialData?.nafdacNumber || '',
        manufactureDate: initialData?.manufactureDate || '',
        expiryDate: initialData?.expiryDate || '',
        price: initialData?.price || '',
        stock: initialData?.stock || '',
        category: initialData?.category || '',
        formulation: initialData?.formulation || '',
        manufacturer: initialData?.manufacturer || '',
        image: initialData?.image || '',
        fractionalUnits: initialData?.fractionalUnits || ['1'],
        description: initialData?.description || ''
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }
    
    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                const result = reader.result as string
                setImagePreview(result)
                setFormData(prev => ({ ...prev, image: result }))
            }
            reader.readAsDataURL(file)
        }
    }
    
    function toggleFractionalUnit(unit: string) {
        setFormData(prev => {
            const units = prev.fractionalUnits.includes(unit)
                ? prev.fractionalUnits.filter(u => u !== unit)
                : [...prev.fractionalUnits, unit]
            return { ...prev, fractionalUnits: units.length > 0 ? units : ['1'] }
        })
    }
    
    const supportsFractions = ['Tablets', 'Capsules'].includes(formData.formulation)

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
                    <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Drug Image */}
                        <div className="col-span-2">
                            <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                Drug Image
                            </label>
                            <div className="flex items-center gap-4">
                                {imagePreview && (
                                    <div className={`w-24 h-24 rounded-lg overflow-hidden border ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}`}>
                                        <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                                    </div>
                                )}
                                <label className={`flex-1 cursor-pointer border-2 border-dashed rounded-lg p-4 text-center transition ${isDarkMode ? 'border-gray-600 hover:border-gray-500' : 'border-gray-300 hover:border-gray-400'}`}>
                                    <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                                    <i className={`bx bx-cloud-upload text-3xl ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}></i>
                                    <p className={`text-sm mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Click to upload image</p>
                                </label>
                            </div>
                        </div>
                        
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
                        <div className="col-span-2 md:col-span-1">
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

                        {/* Manufacturer */}
                        <div className="col-span-2 md:col-span-1">
                            <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                Manufacturer*
                            </label>
                            <input
                                required
                                type="text"
                                name="manufacturer"
                                value={formData.manufacturer}
                                onChange={handleChange}
                                className={`w-full p-2 border rounded-md text-sm ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'border-gray-300'}`}
                                placeholder="Enter manufacturer"
                            />
                        </div>

                        {/* Category */}
                        <div className="col-span-2 md:col-span-1">
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

                        {/* Formulation */}
                        <div className="col-span-2 md:col-span-1">
                            <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                Formulation*
                            </label>
                            <select
                                required
                                name="formulation"
                                value={formData.formulation}
                                onChange={handleChange}
                                className={`w-full p-2 border rounded-md text-sm ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                            >
                                <option value="">Select formulation</option>
                                {formulations.map(form => (
                                    <option key={form} value={form}>{form}</option>
                                ))}
                            </select>
                        </div>

                        {/* Manufacture Date */}
                        <div className="col-span-2 md:col-span-1">
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
                        <div className="col-span-2 md:col-span-1">
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

                        {/* Unit Price */}
                        <div className="col-span-2 md:col-span-1">
                            <label className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                Unit Price (₦)*
                            </label>
                            <input
                                required
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                className={`w-full p-2 border rounded-md text-sm ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'border-gray-300'}`}
                                placeholder="Enter unit price"
                                min="0"
                                step="0.01"
                            />
                        </div>

                        {/* Stock */}
                        <div className="col-span-2 md:col-span-1">
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

                        {/* Fractional Units - Only for Tablets/Capsules */}
                        {supportsFractions && (
                            <div className="col-span-2">
                                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    Available Fractional Units
                                </label>
                                <div className="flex gap-2 flex-wrap">
                                    {fractionalOptions.map(unit => (
                                        <button
                                            key={unit}
                                            type="button"
                                            onClick={() => toggleFractionalUnit(unit)}
                                            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                                                formData.fractionalUnits.includes(unit)
                                                    ? 'bg-green-600 text-white'
                                                    : isDarkMode
                                                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                            }`}
                                        >
                                            {unit === '1' ? 'Whole (1)' : unit === '0.75' ? '3/4' : unit === '0.5' ? '1/2' : '1/4'}
                                        </button>
                                    ))}
                                </div>
                                <p className={`text-xs mt-2 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                                    Select which fractional units customers can purchase
                                </p>
                            </div>
                        )}

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