import Topbar from "../components/Home/Topbar"
import { Link } from "react-router-dom";
import { useDarkMode } from "../utils/useDarkMode";
import { motion } from "framer-motion";

function Home() {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean };

    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    }

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    return (
        <div className={`w-full min-h-screen ${isDarkMode ? 'dark' : ''}`}>
            {/* Hero Section */}
            <div className="relative w-full overflow-hidden max-sm:pt-5">
                {/* Animated background with gradient */}
                <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-emerald-900 to-slate-900">
                    <Topbar />
                </div>
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

                <div className="relative z-10 px-6 max-sm:px-4 pt-24 max-sm:pt-16 pb-20 max-sm:pb-12">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh] max-sm:min-h-auto">

                            {/* Left Content */}
                            <motion.div 
                                initial="initial"
                                animate="animate"
                                variants={staggerContainer}
                                className="flex flex-col justify-center space-y-6 max-sm:space-y-4"
                            >
                                {/* Badge */}
                                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full bg-emerald-900/50 border border-emerald-500/50 backdrop-blur-sm">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                                    <p className="text-sm font-medium text-emerald-300">The Modern Pharmacy Solution</p>
                                </motion.div>

                                {/* Main Heading */}
                                <motion.div variants={fadeInUp}>
                                    <h1 className="text-5xl max-sm:text-3xl font-bold text-white leading-tight mb-4">
                                        Pharmacy Management
                                        <span className="block text-transparent bg-clip-text bg-linear-to-r from-emerald-300 via-green-300 to-cyan-300">Simplified & Powerful</span>
                                    </h1>
                                    <p className="text-lg max-sm:text-base text-slate-300 max-w-xl leading-relaxed">
                                        Manage inventory, process prescriptions, handle billing, and generate insightful reports—all in one intuitive platform built for modern pharmacies.
                                    </p>
                                </motion.div>

                                {/* CTA Buttons */}
                                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Link to='/signup'>
                                        <motion.button 
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-8 py-4 max-sm:w-full bg-linear-to-r from-emerald-400 to-green-500 text-gray-900 font-bold rounded-lg transition duration-300 hover:shadow-2xl hover:shadow-emerald-500/50"
                                        >
                                            Start Free Trial
                                        </motion.button>
                                    </Link>
                                    <Link to='/login'>
                                        <motion.button 
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-8 py-4 max-sm:w-full border-2 border-slate-400 text-white font-bold rounded-lg transition duration-300 hover:bg-slate-800 hover:border-emerald-400 backdrop-blur-sm"
                                        >
                                            Sign In
                                        </motion.button>
                                    </Link>
                                </motion.div>

                                {/* Trust indicators */}
                                <motion.div variants={fadeInUp} className="pt-6 space-y-3 text-sm text-slate-300">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                        <span>HIPAA Compliant & Secure</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                        <span>No credit card required</span>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Right Visual Section */}
                            <motion.div 
                                initial={{ opacity: 0, x: 60 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative hidden lg:flex items-center justify-center"
                            >
                                {/* Floating cards background effect */}
                                <div className="relative w-full h-96 max-sm:h-64">

                                    {/* Main Dashboard Preview - Center */}
                                    <motion.div 
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                        className="absolute inset-0 flex items-center justify-center"
                                    >
                                        <div className="w-full h-full bg-linear-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden transform hover:scale-105 transition duration-500">
                                            <img
                                                src="/images/hero.jpg"
                                                alt="Pharmacy Dashboard"
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent"></div>
                                        </div>
                                    </motion.div>

                                    {/* Floating card 1 - Top Left */}
                                    <motion.div 
                                        initial={{ opacity: 0, x: -50, y: -50 }}
                                        animate={{ opacity: 1, x: 0, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.6 }}
                                        whileHover={{ scale: 1.1 }}
                                        className="absolute -top-6 -left-6 w-32 h-32 bg-linear-to-br from-emerald-500/20 to-green-600/20 rounded-xl border border-emerald-400/50 backdrop-blur-lg p-4 shadow-xl hidden xl:flex flex-col justify-center items-center text-center"
                                    >
                                        <div className="text-2xl font-bold text-emerald-300">99.9%</div>
                                        <div className="text-xs text-slate-300 mt-2">Uptime Guaranteed</div>
                                    </motion.div>

                                    {/* Floating card 2 - Bottom Right */}
                                    <motion.div 
                                        initial={{ opacity: 0, x: 50, y: 50 }}
                                        animate={{ opacity: 1, x: 0, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.8 }}
                                        whileHover={{ scale: 1.1 }}
                                        className="absolute -bottom-6 -right-6 w-40 h-28 bg-linear-to-br from-cyan-500/20 to-blue-600/20 rounded-xl border border-cyan-400/50 backdrop-blur-lg p-4 shadow-xl hidden xl:flex flex-col justify-between"
                                    >
                                        <div className="text-xs font-semibold text-cyan-300">Real-Time Analytics</div>
                                        <div className="flex gap-2">
                                            <div className="flex-1 h-8 bg-linear-to-r from-emerald-400 to-green-500 rounded opacity-70"></div>
                                            <div className="flex-1 h-8 bg-linear-to-r from-cyan-400 to-blue-500 rounded opacity-50"></div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Scroll indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
                        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className={`py-20 max-sm:py-12 px-6 max-sm:px-4 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={`text-4xl max-sm:text-2xl font-bold text-center mb-4 ${isDarkMode ? 'text-gray-50' : 'text-gray-900'}`}>Powerful Features for Modern Pharmacies</h2>
                    <p className={`text-center mb-16 max-sm:mb-10 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Everything you need to run your pharmacy efficiently and compliantly</p>
                </motion.div>

                <motion.div 
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-3 max-sm:grid-cols-1 gap-8 max-sm:gap-6 max-w-6xl mx-auto"
                >
                    {[
                        { icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2', title: 'Real-Time Inventory', desc: 'Track stock levels, expiration dates, and lot numbers with automatic reorder alerts' },
                        { icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', title: 'E-Prescription Integration', desc: 'Seamlessly receive and process electronic prescriptions with automated inventory checks' },
                        { icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z', title: 'Compliance & Security', desc: 'HIPAA-compliant with controlled substance tracking and role-based access control' },
                        { icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z', title: 'Purchase Management', desc: 'Create and track purchase orders with electronic ordering and invoice reconciliation' },
                        { icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', title: 'Analytics & Reports', desc: 'Comprehensive reports on inventory valuation, turnover, and usage trends' },
                        { icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z', title: 'Cloud-Based Access', desc: 'Access your pharmacy data securely from anywhere with multi-store management' }
                    ].map((feature, i) => (
                        <motion.div 
                            key={i}
                            variants={fadeInUp}
                            whileHover={{ y: -8 }}
                            className={`border p-6 rounded-2xl hover:shadow-lg transition duration-300 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}
                        >
                            <div className="w-12 h-12 bg-green-400 rounded-xl flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} /></svg>
                            </div>
                            <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-gray-50' : 'text-gray-900'}`}>{feature.title}</h3>
                            <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>{feature.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Pricing Section */}
            <div className={`py-20 max-sm:py-12 px-6 max-sm:px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="max-w-6xl mx-auto text-center mb-12">
                    <h2 className={`text-4xl max-sm:text-2xl font-bold ${isDarkMode ? 'text-gray-50' : 'text-gray-900'}`}>Simple, transparent pricing</h2>
                    <p className={`mt-4 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Choose a plan that fits your pharmacy — scale as you grow. No hidden fees, cancel anytime.</p>
                    <Link to="/pricing">
                        <button className="mt-4 px-6 py-2 text-green-500 font-semibold hover:underline">
                            View detailed pricing <i className='bx bx-right-arrow-alt'></i>
                        </button>
                    </Link>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-3 max-sm:grid-cols-1 gap-8">
                    {/* Free Plan */}
                    <div className={`border rounded-2xl p-8 text-left ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'}`}>
                        <div className="flex items-center justify-between mb-4">
                            <h3 className={`text-xl font-bold ${isDarkMode ? 'text-gray-50' : 'text-gray-900'}`}>Free</h3>
                            <span className="text-sm text-green-600 font-semibold">For small pharmacies</span>
                        </div>
                        <div className={`text-3xl font-extrabold mb-4 ${isDarkMode ? 'text-gray-50' : 'text-gray-900'}`}>$0<span className={`text-base font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>/mo</span></div>
                        <ul className={`space-y-2 mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            <li>Basic inventory management</li>
                            <li>Billing & receipts</li>
                            <li>Email support</li>
                        </ul>
                        <Link to="/signup"><button className={`w-full py-3 rounded-lg border font-bold transition ${isDarkMode ? 'bg-gray-600 border-gray-500 text-gray-50 hover:bg-gray-700' : 'bg-white border-gray-300 text-gray-900 hover:shadow'}`}>Get Started</button></Link>
                    </div>

                    {/* Standard Plan */}
                    <div className={`border-2 border-emerald-400 rounded-2xl p-8 text-left shadow-lg ${isDarkMode ? 'bg-gray-700' : 'bg-linear-to-r from-emerald-50 to-white'}`}>
                        <div className="flex items-center justify-between mb-4">
                            <h3 className={`text-xl font-bold ${isDarkMode ? 'text-gray-50' : 'text-gray-900'}`}>Standard</h3>
                            <span className="text-sm text-emerald-600 font-semibold">Most popular</span>
                        </div>
                        <div className={`text-4xl font-extrabold mb-4 ${isDarkMode ? 'text-gray-50' : 'text-gray-900'}`}>$29<span className={`text-base font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>/mo</span></div>
                        <ul className={`space-y-2 mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                            <li>All Free features</li>
                            <li>Automated reorder alerts</li>
                            <li>E-prescription integration</li>
                            <li>Priority support</li>
                        </ul>
                        <Link to="/signup"><button className="w-full py-3 rounded-lg bg-emerald-400 text-gray-900 font-bold hover:shadow-lg transition">Start Free Trial</button></Link>
                    </div>

                    {/* Enterprise Plan */}
                    <div className={`border rounded-2xl p-8 text-left ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}>
                        <div className="flex items-center justify-between mb-4">
                            <h3 className={`text-xl font-bold ${isDarkMode ? 'text-gray-50' : 'text-gray-900'}`}>Enterprise</h3>
                            <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-slate-500'}`}>Custom for chains</span>
                        </div>
                        <div className={`text-3xl font-extrabold mb-4 ${isDarkMode ? 'text-gray-50' : 'text-gray-900'}`}>Custom</div>
                        <ul className={`space-y-2 mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            <li>Multi-store management</li>
                            <li>Dedicated account manager</li>
                            <li>Custom integrations & onboarding</li>
                        </ul>
                        <Link to="/contact"><button className="w-full py-3 rounded-lg border-2 border-emerald-400 text-emerald-400 font-bold transition hover:bg-emerald-400/20">Contact Sales</button></Link>
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className={`py-20 max-sm:py-12 px-6 max-sm:px-4 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                <div className="max-w-6xl mx-auto grid grid-cols-2 max-sm:grid-cols-1 gap-12 max-sm:gap-8 items-center">
                    <div>
                        <h2 className={`text-4xl max-sm:text-2xl font-bold mb-6 ${isDarkMode ? 'text-gray-50' : 'text-gray-900'}`}>Reduce Loss. Increase Efficiency.</h2>
                        <p className={`mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Dispensar helps medical store owners manage their businesses effectively and reduce financial losses due to expired stock, theft, and inefficient practices.</p>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-green-400 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Automated expiration tracking prevents stock wastage</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-green-400 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Barcode scanning reduces manual errors and saves time</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-green-400 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Detailed audit logs ensure accountability and transparency</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-green-400 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Smart reorder points prevent stockouts and overstocking</span>
                            </li>
                        </ul>
                    </div>
                    <div className={`p-8 rounded-2xl shadow-lg max-sm:p-0 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        <img src="/images/dashboard.png" alt="Analytics" className="w-full rounded-lg" />
                    </div>
                </div>
            </div>

            {/* Workflows Section */}
            <div className={`py-20 max-sm:py-12 px-6 max-sm:px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className={`text-4xl max-sm:text-2xl font-bold mb-4 ${isDarkMode ? 'text-gray-50' : 'text-gray-900'}`}>Flexible Workflows for Every Pharmacy</h2>
                        <p className={`max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Dispensar adapts to your pharmacy's unique operational structure—whether you're running a solo operation or a complex multi-person workflow.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-sm:gap-6">
                        {/* Single Worker Workflow */}
                        <div className={`rounded-2xl p-8 border shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 flex flex-col ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}>
                            <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-xl mb-6">
                                <svg className="w-7 h-7 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                </svg>
                            </div>
                            <h3 className={`text-2xl font-bold mb-3 ${isDarkMode ? 'text-gray-50' : 'text-gray-900'}`}>Single Worker</h3>
                            <p className={`mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Perfect for solo pharmacists or small operations where one person handles all tasks—billing, payments, and dispensing.</p>
                            <div className="space-y-2 mb-6">
                                <div className="flex items-center gap-2 text-gray-700">
                                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Simplified operations</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Faster processing</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Complete control</span>
                                </div>
                            </div>
                            <Link to="/workflows">
                                <button className={`mt-auto w-full py-2 px-4 rounded-lg font-semibold transition ${isDarkMode ? 'bg-blue-900 text-blue-200 hover:bg-blue-800' : 'bg-blue-50 text-blue-600 hover:bg-blue-100'}`}>Learn More</button>
                            </Link>
                        </div>

                        {/* Billing → Payment → Dispense Workflow */}
                        <div className={`rounded-2xl p-8 border-2 border-emerald-400 shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 flex flex-col ${isDarkMode ? 'bg-gray-700' : 'bg-linear-to-r from-emerald-50 to-white'}`}>
                            <div className="flex items-center justify-center w-14 h-14 bg-emerald-100 rounded-xl mb-6">
                                <svg className="w-7 h-7 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M13 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V9" />
                                    <polyline points="13 5 13 9 17 9" />
                                    <path d="M9 17L15 11" />
                                </svg>
                            </div>
                            <h3 className={`text-2xl font-bold mb-3 ${isDarkMode ? 'text-gray-50' : 'text-gray-900'}`}>Billing → Payment → Dispense</h3>
                            <p className={`mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Structured workflow where one staff member bills, another collects payment, and a third dispenses medication—ideal for busier pharmacies.</p>
                            <div className="space-y-2 mb-6">
                                <div className="flex items-center gap-2 text-gray-700">
                                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Clear role separation</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Improved accuracy</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Higher throughput</span>
                                </div>
                            </div>
                            <Link to="/workflows">
                                <button className={`mt-auto w-full py-2 px-4 rounded-lg font-semibold transition ${isDarkMode ? 'bg-emerald-900 text-emerald-200 hover:bg-emerald-800' : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100'}`}>Learn More</button>
                            </Link>
                        </div>

                        {/* Billing → Payment (Biller as Dispenser) Workflow */}
                        <div className={`rounded-2xl p-8 border shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 flex flex-col ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'}`}>
                            <div className="flex items-center justify-center w-14 h-14 bg-purple-100 rounded-xl mb-6">
                                <svg className="w-7 h-7 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                    <path d="M18 16h6M21 13v6" />
                                </svg>
                            </div>
                            <h3 className={`text-2xl font-bold mb-3 ${isDarkMode ? 'text-gray-50' : 'text-gray-900'}`}>Billing → Payment with Dual Roles</h3>
                            <p className={`mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Hybrid workflow where one staff member bills and handles payment collection, while another dispenses medication—balancing efficiency and specialization.</p>
                            <div className="space-y-2 mb-6">
                                <div className="flex items-center gap-2 text-gray-700">
                                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Flexible role assignment</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Balanced workload</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-700">
                                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Cost-effective staffing</span>
                                </div>
                            </div>
                            <Link to="/workflows">
                                <button className={`mt-auto w-full py-2 px-4 rounded-lg font-semibold transition ${isDarkMode ? 'bg-purple-900 text-purple-200 hover:bg-purple-800' : 'bg-purple-50 text-purple-600 hover:bg-purple-100'}`}>Learn More</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className={`py-20 max-sm:py-12 px-6 max-sm:px-4 ${isDarkMode ? 'bg-gray-900' : 'bgImage'}`}>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className={`text-4xl max-sm:text-2xl font-bold mb-6 ${isDarkMode ? 'text-gray-50' : 'text-gray-50'}`}>Ready to Transform Your Pharmacy?</h2>
                    <p className={`text-lg max-sm:text-base mb-8 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-300'}`}>Join modern pharmacies using Dispensar to streamline operations, ensure compliance, and grow their business.</p>
                    <div className="flex max-sm:flex-col gap-4 justify-center">
                        <Link to='/signup'><button className={`px-8 py-3 rounded-3xl font-bold transition duration-300 ${isDarkMode ? 'bg-green-400 text-gray-950 hover:bg-green-300' : 'text-gray-950 bg-green-400 hover:shadow-lg hover:bg-gray-50'}`}>Start Free Trial</button></Link>
                        <Link to='/login'><button className={`px-8 py-3 rounded-3xl border-2 border-gray-50 font-bold transition duration-300 ${isDarkMode ? 'text-gray-50 hover:bg-gray-800' : 'text-gray-50 hover:bg-gray-50 hover:text-gray-950'}`}>Sign In</button></Link>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className={`py-8 px-6 text-center ${isDarkMode ? 'bg-gray-950 text-gray-400' : 'bg-gray-900 text-gray-400'}`}>
                <p className="text-sm">© 2026 Dispensar by Rizon Labs. Built for the modern pharmacy.</p>
            </div>
        </div>
    );
}

export default Home