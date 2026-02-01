import { useDarkMode } from '../../utils/useDarkMode'

interface BasicInfoStepProps {
    formData: any
    setFormData: (data: any) => void
}

function BasicInfoStep({ formData, setFormData }: BasicInfoStepProps) {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${isDarkMode ? 'bg-green-500/20' : 'bg-green-100'}`}>
                    <i className='bx bx-store text-3xl text-green-500'></i>
                </div>
                <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Pharmacy Information</h2>
                <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Let's start with the basics</p>
            </div>

            <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <i className='bx bx-building mr-2'></i>Pharmacy Name
                </label>
                <input
                    type="text"
                    name="pharmacyName"
                    value={formData.pharmacyName}
                    onChange={handleChange}
                    placeholder="Enter pharmacy name"
                    className={`w-full p-3 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-green-500 ${
                        isDarkMode 
                            ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                />
            </div>

            <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <i className='bx bx-id-card mr-2'></i>Registration Number
                </label>
                <input
                    type="text"
                    name="registrationNumber"
                    value={formData.registrationNumber}
                    onChange={handleChange}
                    placeholder="Enter registration number"
                    className={`w-full p-3 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-green-500 ${
                        isDarkMode 
                            ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                />
            </div>

            <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <i className='bx bx-user mr-2'></i>Owner Name
                </label>
                <input
                    type="text"
                    name="ownerName"
                    value={formData.ownerName}
                    onChange={handleChange}
                    placeholder="Enter owner name"
                    className={`w-full p-3 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-green-500 ${
                        isDarkMode 
                            ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                />
            </div>
        </div>
    )
}

export default BasicInfoStep
