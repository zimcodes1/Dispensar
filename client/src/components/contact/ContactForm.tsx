import { useState } from 'react'
import { useDarkMode } from '../../utils/useDarkMode'

interface ContactFormProps {
    onSubmit: (data: FormData) => void
}

interface FormData {
    name: string
    email: string
    phone: string
    pharmacyName: string
    message: string
    inquiryType: string
}

function ContactForm({ onSubmit }: ContactFormProps) {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        pharmacyName: '',
        message: '',
        inquiryType: 'sales'
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit(formData)
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <i className='bx bx-user mr-2'></i>Full Name*
                    </label>
                    <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full p-3 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-green-500 ${
                            isDarkMode 
                                ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400' 
                                : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                    />
                </div>

                <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <i className='bx bx-envelope mr-2'></i>Email Address*
                    </label>
                    <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@pharmacy.com"
                        className={`w-full p-3 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-green-500 ${
                            isDarkMode 
                                ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400' 
                                : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                    />
                </div>

                <div>
                    <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        <i className='bx bx-phone mr-2'></i>Phone Number
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
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
                        <i className='bx bx-store mr-2'></i>Pharmacy Name
                    </label>
                    <input
                        type="text"
                        name="pharmacyName"
                        value={formData.pharmacyName}
                        onChange={handleChange}
                        placeholder="Your Pharmacy"
                        className={`w-full p-3 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-green-500 ${
                            isDarkMode 
                                ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400' 
                                : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                    />
                </div>
            </div>

            <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <i className='bx bx-category mr-2'></i>Inquiry Type*
                </label>
                <select
                    required
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className={`w-full p-3 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-green-500 ${
                        isDarkMode 
                            ? 'bg-gray-700 border border-gray-600 text-white' 
                            : 'bg-gray-50 border border-gray-300 text-gray-900'
                    }`}
                >
                    <option value="sales">Sales Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="demo">Request a Demo</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <i className='bx bx-message-square-detail mr-2'></i>Message*
                </label>
                <textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your needs..."
                    rows={6}
                    className={`w-full p-3 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-green-500 resize-none ${
                        isDarkMode 
                            ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                />
            </div>

            <button
                type="submit"
                className="w-full py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-bold shadow-lg"
            >
                Send Message <i className='bx bx-send ml-2'></i>
            </button>
        </form>
    )
}

export default ContactForm
