import { useDarkMode } from '../../utils/useDarkMode'
import { useState } from 'react'

interface AdditionalDetailsStepProps {
    formData: any
    setFormData: (data: any) => void
}

function AdditionalDetailsStep({ formData, setFormData }: AdditionalDetailsStepProps) {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    const [imagePreview, setImagePreview] = useState<string | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setImagePreview(reader.result as string)
                setFormData({ ...formData, pharmacyImage: file })
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${isDarkMode ? 'bg-green-500/20' : 'bg-green-100'}`}>
                    <i className='bx bx-detail text-3xl text-green-500'></i>
                </div>
                <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Additional Details</h2>
                <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Tell us more about your pharmacy</p>
            </div>

            <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <i className='bx bx-image mr-2'></i>Pharmacy Logo/Image
                </label>
                <div className={`border-2 border-dashed rounded-lg p-6 text-center transition-all ${
                    isDarkMode 
                        ? 'border-gray-600 hover:border-green-500' 
                        : 'border-gray-300 hover:border-green-500'
                }`}>
                    {imagePreview ? (
                        <div className="space-y-3">
                            <img src={imagePreview} alt="Preview" className="w-32 h-32 object-cover rounded-lg mx-auto" />
                            <button
                                type="button"
                                onClick={() => {
                                    setImagePreview(null)
                                    setFormData({ ...formData, pharmacyImage: null })
                                }}
                                className={`text-sm ${isDarkMode ? 'text-red-400 hover:text-red-300' : 'text-red-600 hover:text-red-700'}`}
                            >
                                Remove Image
                            </button>
                        </div>
                    ) : (
                        <label className="cursor-pointer">
                            <i className={`bx bx-cloud-upload text-4xl ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}></i>
                            <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                Click to upload or drag and drop
                            </p>
                            <p className={`text-xs mt-1 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                                PNG, JPG up to 5MB
                            </p>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="hidden"
                            />
                        </label>
                    )}
                </div>
            </div>

            <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <i className='bx bx-time mr-2'></i>Operating Hours
                </label>
                <input
                    type="text"
                    name="operatingHours"
                    value={formData.operatingHours}
                    onChange={handleChange}
                    placeholder="e.g., Mon-Fri: 8AM-8PM, Sat: 9AM-5PM"
                    className={`w-full p-3 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-green-500 ${
                        isDarkMode 
                            ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                />
            </div>

            <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <i className='bx bx-message-square-detail mr-2'></i>Description (Optional)
                </label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Brief description of your pharmacy and services"
                    rows={4}
                    className={`w-full p-3 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-green-500 resize-none ${
                        isDarkMode 
                            ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                />
            </div>
        </div>
    )
}

export default AdditionalDetailsStep
