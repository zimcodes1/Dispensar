import { useDarkMode } from '../../utils/useDarkMode'

interface ContactStepProps {
    formData: any
    setFormData: (data: any) => void
}

function ContactStep({ formData, setFormData }: ContactStepProps) {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className="space-y-6">
            <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${isDarkMode ? 'bg-green-500/20' : 'bg-green-100'}`}>
                    <i className='bx bx-phone text-3xl text-green-500'></i>
                </div>
                <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Contact Information</h2>
                <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>How can customers reach you?</p>
            </div>

            <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <i className='bx bx-phone mr-2'></i>Primary Phone Number
                </label>
                <input
                    type="tel"
                    name="primaryPhone"
                    value={formData.primaryPhone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    className={`w-full p-3 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-green-500 ${
                        isDarkMode 
                            ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                />
            </div>

            <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <i className='bx bx-phone-call mr-2'></i>Secondary Phone Number (Optional)
                </label>
                <input
                    type="tel"
                    name="secondaryPhone"
                    value={formData.secondaryPhone}
                    onChange={handleChange}
                    placeholder="+1 (555) 987-6543"
                    className={`w-full p-3 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-green-500 ${
                        isDarkMode 
                            ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                />
            </div>

            <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <i className='bx bx-envelope mr-2'></i>Email Address
                </label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="pharmacy@example.com"
                    className={`w-full p-3 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-green-500 ${
                        isDarkMode 
                            ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                />
            </div>

            <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <i className='bx bx-globe mr-2'></i>Website (Optional)
                </label>
                <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://www.yourpharmacy.com"
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

export default ContactStep
