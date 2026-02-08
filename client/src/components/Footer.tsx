import { Link } from 'react-router-dom'
import { useDarkMode } from '../utils/useDarkMode'

export default function Footer() {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    
    return (
        <footer className={`py-12 px-6 border-t transition-colors duration-300 ${
            isDarkMode ? 'bg-gray-950 border-gray-800' : 'bg-gray-900 border-gray-800'
        }`}>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/images/logo.png" alt="Logo" className="w-8 h-8" />
                            <span className="text-xl font-bold text-white">Dispensar</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-4">Modern pharmacy management software built for efficiency and compliance.</p>
                        <div className="flex gap-3">
                            <a href="#" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition">
                                <i className="bx bxl-twitter text-gray-300 text-lg"></i>
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition">
                                <i className="bx bxl-linkedin text-gray-300 text-lg"></i>
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-green-600 flex items-center justify-center transition">
                                <i className="bx bxl-github text-gray-300 text-lg"></i>
                            </a>
                        </div>
                    </div>
                    
                    {/* Product */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Product</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/workflows" className="text-gray-400 hover:text-green-500 transition">Workflows</Link></li>
                            <li><Link to="/pricing" className="text-gray-400 hover:text-green-500 transition">Pricing</Link></li>
                            <li><Link to="/signup" className="text-gray-400 hover:text-green-500 transition">Start Free Trial</Link></li>
                            <li><Link to="/login" className="text-gray-400 hover:text-green-500 transition">Sign In</Link></li>
                        </ul>
                    </div>
                    
                    {/* Company */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/contact" className="text-gray-400 hover:text-green-500 transition">Contact Us</Link></li>
                            <li><Link to="/about" className="text-gray-400 hover:text-green-500 transition">About</Link></li>
                            <li><Link to="/careers" className="text-gray-400 hover:text-green-500 transition">Careers</Link></li>
                            <li><Link to="/blog" className="text-gray-400 hover:text-green-500 transition">Blog</Link></li>
                        </ul>
                    </div>
                    
                    {/* Legal */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/privacy-policy" className="text-gray-400 hover:text-green-500 transition">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="text-gray-400 hover:text-green-500 transition">Terms of Service</Link></li>
                            <li><a href="#" className="text-gray-400 hover:text-green-500 transition">Security</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-green-500 transition">Compliance</a></li>
                        </ul>
                    </div>
                </div>
                
                <div className="pt-8 border-t border-gray-800 text-center">
                    <p className="text-gray-400 text-sm">© 2026 Dispensar by Rizon Labs. Built for the modern pharmacy.</p>
                </div>
            </div>
        </footer>
    )
}
