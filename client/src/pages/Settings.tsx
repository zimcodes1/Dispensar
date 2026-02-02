import { useState } from "react"
import Topbar from "../components/dashboard/Topbar"
import SideNav from "../components/SideNav"
import { useEffect } from "react"
import { useDarkMode } from "../utils/useDarkMode"

const Settings = ()=>{
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    const [activeTab, setActiveTab] = useState('profile')
    const [showLogoutModal, setShowLogoutModal] = useState(false)
    const [userRole] = useState<'admin' | 'employee'>('employee') // Change based on auth
    const [formData, setFormData] = useState({
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '(123) 456-7890',
        role: 'Employee',
        pharmacyName: 'Dispensar Pharmacy',
        address: '123 Medical Street, Lagos',
        notifications: true,
        emailAlerts: true,
        lowStockAlerts: true,
        expiryAlerts: true
    })
    
    useEffect(()=>{document.title = 'Settings | Dispensar'})
    
    const adminTabs = [
        { id: 'profile', label: 'Profile', icon: 'bx-user' },
        { id: 'pharmacy', label: 'Pharmacy Info', icon: 'bx-store' },
        { id: 'notifications', label: 'Notifications', icon: 'bx-bell' },
        { id: 'security', label: 'Security', icon: 'bx-lock' },
    ]
    
    const employeeTabs = [
        { id: 'profile', label: 'Profile', icon: 'bx-user' },
        { id: 'notifications', label: 'Notifications', icon: 'bx-bell' },
        { id: 'security', label: 'Security', icon: 'bx-lock' },
    ]
    
    const tabs = userRole === 'admin' ? adminTabs : employeeTabs
    
    return(
        <>
        <Topbar />
        <div className={`flex w-full min-h-screen pt-[60px] justify-between items-start pr-[2%] max-[767px]:pr-0 md:pr-0 transition-colors duration-300 ${
            isDarkMode ? 'bg-gray-950' : 'bg-gray-100'
        }`}>
            <div className="flex w-[20%] h-full max-[767px]:w-0 md:w-16 lg:w-[20%]">
                <SideNav />
            </div>
            <div className="flex w-[78%] md:w-[calc(100%-4rem)] lg:w-[78%] max-[767px]:w-full h-full flex-col max-[767px]:px-2 md:px-4 py-6">
                <div className="mb-6">
                    <h1 className={`text-2xl max-sm:text-lg font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Settings</h1>
                    <p className={`text-sm mt-1 transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Manage your account and preferences</p>
                </div>
                
                {/* Tabs */}
                <div className={`rounded-lg shadow-sm border overflow-hidden transition-colors duration-300 ${
                    isDarkMode
                        ? 'bg-gray-800 border-gray-700'
                        : 'bg-white border-gray-200'
                }`}>
                    <div className={`border-b overflow-x-auto transition-colors duration-300 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                        <nav className="flex min-w-max">
                            {tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors duration-300 flex items-center gap-2 ${
                                        activeTab === tab.id
                                            ? 'border-green-600 text-green-600'
                                            : isDarkMode
                                                ? 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600'
                                                : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                                    }`}
                                >
                                    <i className={`bx ${tab.icon} text-lg`}></i>
                                    <span className="max-sm:hidden">{tab.label}</span>
                                </button>
                            ))}
                        </nav>
                    </div>
                    
                    <div className="p-6">
                        {/* Profile Tab */}
                        {activeTab === 'profile' && (
                            <div className="space-y-6">
                                <div className="flex items-center gap-6">
                                    <div className={`w-24 h-24 rounded-full overflow-hidden transition-colors duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                                        <img src="/images/defaultUser.jpg" alt="User" className="w-full h-full object-cover"/>
                                    </div>
                                    <div>
                                        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm">
                                            Change Photo
                                        </button>
                                        <p className={`text-xs mt-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>JPG, PNG or GIF. Max 2MB</p>
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className={`block text-sm font-medium mb-1 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Full Name</label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                                            className={`w-full p-2 border rounded-lg text-sm transition-colors duration-300 ${
                                                isDarkMode
                                                    ? 'bg-gray-800 border-gray-700 text-white'
                                                    : 'bg-white border-gray-300 text-gray-900'
                                            }`}
                                        />
                                    </div>
                                    <div>
                                        <label className={`block text-sm font-medium mb-1 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            disabled={userRole === 'employee'}
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                            className={`w-full p-2 border rounded-lg text-sm transition-colors duration-300 ${
                                                isDarkMode
                                                    ? `bg-gray-800 border-gray-700 text-white ${userRole === 'employee' ? 'opacity-60' : ''}`
                                                    : `bg-white border-gray-300 text-gray-900 ${userRole === 'employee' ? 'bg-gray-50' : ''}`
                                            }`}
                                        />
                                        {userRole === 'employee' && <p className={`text-xs mt-1 transition-colors duration-300 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>Contact admin to change email</p>}
                                    </div>
                                    <div>
                                        <label className={`block text-sm font-medium mb-1 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Phone</label>
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                            className={`w-full p-2 border rounded-lg text-sm transition-colors duration-300 ${
                                                isDarkMode
                                                    ? 'bg-gray-800 border-gray-700 text-white'
                                                    : 'bg-white border-gray-300 text-gray-900'
                                            }`}
                                        />
                                    </div>
                                    <div>
                                        <label className={`block text-sm font-medium mb-1 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Role</label>
                                        <input
                                            type="text"
                                            value={formData.role}
                                            disabled
                                            className={`w-full p-2 border rounded-lg text-sm opacity-60 transition-colors duration-300 ${
                                                isDarkMode
                                                    ? 'bg-gray-800 border-gray-700 text-white'
                                                    : 'bg-gray-50 border-gray-300 text-gray-900'
                                            }`}
                                        />
                                    </div>
                                </div>
                                
                                <div className="flex justify-end gap-3">
                                    <button className={`px-4 py-2 text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Cancel</button>
                                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm">Save Changes</button>
                                </div>
                            </div>
                        )}
                        
                        {/* Pharmacy Info Tab - Admin Only */}
                        {activeTab === 'pharmacy' && userRole === 'admin' && (
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="md:col-span-2">
                                        <label className={`block text-sm font-medium mb-1 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Pharmacy Name</label>
                                        <input
                                            type="text"
                                            value={formData.pharmacyName}
                                            onChange={(e) => setFormData({...formData, pharmacyName: e.target.value})}
                                            className={`w-full p-2 border rounded-lg text-sm transition-colors duration-300 ${
                                                isDarkMode
                                                    ? 'bg-gray-800 border-gray-700 text-white'
                                                    : 'bg-white border-gray-300 text-gray-900'
                                            }`}
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className={`block text-sm font-medium mb-1 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Address</label>
                                        <textarea
                                            value={formData.address}
                                            onChange={(e) => setFormData({...formData, address: e.target.value})}
                                            className={`w-full p-2 border rounded-lg text-sm transition-colors duration-300 ${
                                                isDarkMode
                                                    ? 'bg-gray-800 border-gray-700 text-white'
                                                    : 'bg-white border-gray-300 text-gray-900'
                                            }`}
                                            rows={3}
                                        />
                                    </div>
                                </div>
                                
                                <div className="flex justify-end gap-3">
                                    <button className={`px-4 py-2 text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Cancel</button>
                                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm">Save Changes</button>
                                </div>
                            </div>
                        )}
                        
                        {/* Notifications Tab */}
                        {activeTab === 'notifications' && (
                            <div className="space-y-4">
                                <div className={`flex items-center justify-between py-3 border-b transition-colors duration-300 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                                    <div>
                                        <p className={`text-sm font-medium transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Push Notifications</p>
                                        <p className={`text-xs transition-colors duration-300 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>Receive push notifications</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={formData.notifications}
                                            onChange={(e) => setFormData({...formData, notifications: e.target.checked})}
                                            className="sr-only peer"
                                        />
                                        <div className={`w-11 h-6 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5  after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600 transition-colors duration-300 ${
                                            isDarkMode
                                                ? 'bg-gray-700 after:bg-gray-800 after:border-gray-600'
                                                : 'bg-gray-200 after:bg-white after:border-gray-300'
                                        }`}></div>
                                    </label>
                                </div>
                                
                                <div className={`flex items-center justify-between py-3 border-b transition-colors duration-300 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                                    <div>
                                        <p className={`text-sm font-medium transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Email Alerts</p>
                                        <p className={`text-xs transition-colors duration-300 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>Receive email notifications</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={formData.emailAlerts}
                                            onChange={(e) => setFormData({...formData, emailAlerts: e.target.checked})}
                                            className="sr-only peer"
                                        />
                                        <div className={`w-11 h-6 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600 transition-colors duration-300 ${
                                            isDarkMode
                                                ? 'bg-gray-700 after:bg-gray-800 after:border-gray-600'
                                                : 'bg-gray-200 after:bg-white after:border-gray-300'
                                        }`}></div>
                                    </label>
                                </div>
                                
                                <div className={`flex items-center justify-between py-3 border-b transition-colors duration-300 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                                    <div>
                                        <p className={`text-sm font-medium transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Low Stock Alerts</p>
                                        <p className={`text-xs transition-colors duration-300 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>Get notified when stock is low</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={formData.lowStockAlerts}
                                            onChange={(e) => setFormData({...formData, lowStockAlerts: e.target.checked})}
                                            className="sr-only peer"
                                        />
                                        <div className={`w-11 h-6 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600 transition-colors duration-300 ${
                                            isDarkMode
                                                ? 'bg-gray-700 after:bg-gray-800 after:border-gray-600'
                                                : 'bg-gray-200 after:bg-white after:border-gray-300'
                                        }`}></div>
                                    </label>
                                </div>
                                
                                <div className="flex items-center justify-between py-3">
                                    <div>
                                        <p className={`text-sm font-medium transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Expiry Alerts</p>
                                        <p className={`text-xs transition-colors duration-300 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>Get notified about expiring items</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={formData.expiryAlerts}
                                            onChange={(e) => setFormData({...formData, expiryAlerts: e.target.checked})}
                                            className="sr-only peer"
                                        />
                                        <div className={`w-11 h-6 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600 transition-colors duration-300 ${
                                            isDarkMode
                                                ? 'bg-gray-700 after:bg-gray-800 after:border-gray-600'
                                                : 'bg-gray-200 after:bg-white after:border-gray-300'
                                        }`}></div>
                                    </label>
                                </div>
                            </div>
                        )}
                        
                        {/* Security Tab */}
                        {activeTab === 'security' && (
                            <div className="space-y-6">
                                <div>
                                    <h3 className={`text-sm font-semibold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Change Password</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <label className={`block text-sm font-medium mb-1 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Current Password</label>
                                            <input
                                                type="password"
                                                className={`w-full p-2 border rounded-lg text-sm transition-colors duration-300 ${
                                                    isDarkMode
                                                        ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500'
                                                        : 'bg-white border-gray-300 text-gray-900'
                                                }`}
                                                placeholder="Enter current password"
                                            />
                                        </div>
                                        <div>
                                            <label className={`block text-sm font-medium mb-1 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>New Password</label>
                                            <input
                                                type="password"
                                                className={`w-full p-2 border rounded-lg text-sm transition-colors duration-300 ${
                                                    isDarkMode
                                                        ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500'
                                                        : 'bg-white border-gray-300 text-gray-900'
                                                }`}
                                                placeholder="Enter new password"
                                            />
                                        </div>
                                        <div>
                                            <label className={`block text-sm font-medium mb-1 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Confirm New Password</label>
                                            <input
                                                type="password"
                                                className={`w-full p-2 border rounded-lg text-sm transition-colors duration-300 ${
                                                    isDarkMode
                                                        ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500'
                                                        : 'bg-white border-gray-300 text-gray-900'
                                                }`}
                                                placeholder="Confirm new password"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex justify-end gap-3 mt-4">
                                        <button className={`px-4 py-2 text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Cancel</button>
                                        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm">Update Password</button>
                                    </div>
                                </div>
                                
                                <div className={`border-t pt-6 transition-colors duration-300 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                                    <h3 className={`text-sm font-semibold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Danger Zone</h3>
                                    <div className={`border rounded-lg p-4 transition-colors duration-300 ${
                                        isDarkMode
                                            ? 'bg-red-900/20 border-red-800'
                                            : 'bg-red-50 border-red-200'
                                    }`}>
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <p className={`text-sm font-medium transition-colors duration-300 ${isDarkMode ? 'text-red-400' : 'text-red-900'}`}>Logout</p>
                                                <p className={`text-xs mt-1 transition-colors duration-300 ${isDarkMode ? 'text-red-500' : 'text-red-700'}`}>Sign out from your account</p>
                                            </div>
                                            <button
                                                onClick={() => setShowLogoutModal(true)}
                                                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition text-sm"
                                            >
                                                Logout
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
        
        {/* Logout Modal */}
        {showLogoutModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
                <div className={`w-full max-w-md rounded-lg shadow-lg p-6 transition-colors duration-300 ${
                    isDarkMode ? 'bg-gray-800' : 'bg-white'
                }`}>
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100 mx-auto mb-4">
                        <i className="bx bx-log-out text-2xl text-red-600"></i>
                    </div>
                    <h3 className={`text-lg font-semibold text-center mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Logout</h3>
                    <p className={`text-sm text-center mb-6 transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Are you sure you want to logout?</p>
                    <div className="flex gap-3">
                        <button
                            onClick={() => setShowLogoutModal(false)}
                            className={`flex-1 px-4 py-2 border rounded-lg transition ${
                                isDarkMode
                                    ? 'border-gray-700 text-gray-300 hover:bg-gray-700'
                                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                            }`}
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => console.log('Logout')}
                            className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        )}
        </>
    )
}


export default Settings