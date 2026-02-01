import { useDarkMode } from '../../utils/useDarkMode'

interface LocationStepProps {
    formData: any
    setFormData: (data: any) => void
}

function LocationStep({ formData, setFormData }: LocationStepProps) {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${isDarkMode ? 'bg-green-500/20' : 'bg-green-100'}`}>
                    <i className='bx bx-map text-3xl text-green-500'></i>
                </div>
                <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Location Details</h2>
                <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Where is your pharmacy located?</p>
            </div>

            <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <i className='bx bx-home mr-2'></i>Street Address
                </label>
                <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter street address"
                    rows={3}
                    className={`w-full p-3 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-green-500 resize-none ${
                        isDarkMode 
                            ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <i className='bx bx-buildings mr-2'></i>City
                    </label>
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="City"
                        className={`w-full p-3 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-green-500 ${
                            isDarkMode 
                                ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400' 
                                : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                    />
                </div>
                <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <i className='bx bx-map-pin mr-2'></i>State/Region
                    </label>
                    <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="State"
                        className={`w-full p-3 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-green-500 ${
                            isDarkMode 
                                ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400' 
                                : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                    />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <i className='bx bx-envelope mr-2'></i>Postal Code
                    </label>
                    <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        placeholder="Postal code"
                        className={`w-full p-3 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-green-500 ${
                            isDarkMode 
                                ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400' 
                                : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                    />
                </div>
                <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <i className='bx bx-world mr-2'></i>Country
                    </label>
                    <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="Country"
                        className={`w-full p-3 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-green-500 ${
                            isDarkMode 
                                ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400' 
                                : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                    />
                </div>
            </div>
        </div>
    )
}

export default LocationStep
