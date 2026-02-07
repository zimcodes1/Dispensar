import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useDarkMode } from '../utils/useDarkMode'
import ContactForm from '../components/contact/ContactForm'
import ContactInfoCard from '../components/contact/ContactInfoCard'

function Contact() {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        document.title = 'Contact Us | Dispensar'
    }, [])

    const handleSubmit = (data: any) => {
        console.log('Form submitted:', data)
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 5000)
    }

    return (
        <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            {/* Header */}
            <div className={`${isDarkMode ? 'bg-gray-800 border-b border-gray-700' : 'bg-white border-b border-gray-200'}`}>
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3">
                        <img src="/images/logo.png" alt="Logo" className="w-10 h-10" />
                        <span className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            <span className="text-green-500">Dispensar</span>
                        </span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <Link to="/pricing" className={`text-sm font-medium ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                            Pricing
                        </Link>
                        <Link to="/signup">
                            <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-semibold">
                                Get Started
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className={`text-5xl max-sm:text-3xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Get in Touch
                    </h1>
                    <p className={`text-xl max-sm:text-base max-w-3xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </motion.div>

                {/* Contact Info Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    <ContactInfoCard
                        icon="bx bx-envelope"
                        title="Email Us"
                        info="support@dispensar.com"
                        link="mailto:support@dispensar.com"
                        index={0}
                    />
                    <ContactInfoCard
                        icon="bx bx-phone"
                        title="Call Us"
                        info="+1 (555) 123-4567"
                        link="tel:+15551234567"
                        index={1}
                    />
                    <ContactInfoCard
                        icon="bx bx-time"
                        title="Business Hours"
                        info="Mon-Fri: 9AM-6PM EST"
                        index={2}
                    />
                </div>

                {/* Main Content */}
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className={`p-8 rounded-2xl border ${
                            isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                        }`}>
                            <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                Send us a Message
                            </h2>
                            
                            {submitted && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg"
                                >
                                    <p className="text-green-500 flex items-center gap-2">
                                        <i className='bx bx-check-circle text-xl'></i>
                                        Message sent successfully! We'll get back to you soon.
                                    </p>
                                </motion.div>
                            )}

                            <ContactForm onSubmit={handleSubmit} />
                        </div>
                    </motion.div>

                    {/* Additional Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        {/* Why Contact Us */}
                        <div className={`p-8 rounded-2xl border ${
                            isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                        }`}>
                            <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                Why Contact Us?
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <i className='bx bx-check text-xl text-green-500 shrink-0 mt-0.5'></i>
                                    <div>
                                        <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                            Schedule a Demo
                                        </p>
                                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                            See Dispensar in action with a personalized demo
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <i className='bx bx-check text-xl text-green-500 shrink-0 mt-0.5'></i>
                                    <div>
                                        <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                            Enterprise Solutions
                                        </p>
                                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                            Custom pricing for pharmacy chains
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <i className='bx bx-check text-xl text-green-500 shrink-0 mt-0.5'></i>
                                    <div>
                                        <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                            Technical Support
                                        </p>
                                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                            Get help with setup and troubleshooting
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <i className='bx bx-check text-xl text-green-500 shrink-0 mt-0.5'></i>
                                    <div>
                                        <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                            Partnership Opportunities
                                        </p>
                                        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                            Explore integration and partnership options
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* FAQ Link */}
                        <div className={`p-8 rounded-2xl border ${
                            isDarkMode 
                                ? 'gradient-to-br from-green-900/30 to-gray-800 border-green-800' 
                                : 'gradient-to-br from-green-50 to-white border-green-200'
                        }`}>
                            <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                Looking for Quick Answers?
                            </h3>
                            <p className={`mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                Check out our pricing page for frequently asked questions.
                            </p>
                            <Link to="/pricing">
                                <button className={`w-full py-3 rounded-lg font-semibold transition ${
                                    isDarkMode 
                                        ? 'bg-green-900 text-green-200 hover:bg-green-800' 
                                        : 'bg-green-500 text-white hover:bg-green-600'
                                }`}>
                                    View FAQ <i className='bx bx-right-arrow-alt ml-2'></i>
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Footer */}
            <div className={`py-8 px-6 text-center border-t ${isDarkMode ? 'bg-gray-950 text-gray-400 border-gray-800' : 'bg-gray-900 text-gray-400 border-gray-800'}`}>
                <p className="text-sm">© 2026 Dispensar by Rizon Labs. Built for the modern pharmacy.</p>
            </div>
        </div>
    )
}

export default Contact
