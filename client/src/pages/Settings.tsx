import { useState } from "react"
import Topbar from "../components/dashboard/Topbar"
import SideNav from "../components/SideNav"
import { useEffect } from "react"

const Settings = ()=>{
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
        <div className="flex w-full min-h-screen bg-gray-100 pt-[60px] justify-between items-start pr-[2%] max-[767px]:pr-0 md:pr-0">
            <div className="flex w-[20%] h-full max-[767px]:w-0 md:w-16 lg:w-[20%]">
                <SideNav />
            </div>
            <div className="flex w-[78%] md:w-[calc(100%-4rem)] lg:w-[78%] max-[767px]:w-full h-full flex-col max-[767px]:px-2 md:px-4 py-6">
                <div className="mb-6">
                    <h1 className="text-2xl max-sm:text-lg font-semibold text-gray-900">Settings</h1>
                    <p className="text-sm text-gray-600 mt-1">Manage your account and preferences</p>
                </div>
                
                {/* Tabs */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <div className="border-b border-gray-200 overflow-x-auto">
                        <nav className="flex min-w-max">
                            {tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-6 py-4 text-sm font-medium border-b-2 transition flex items-center gap-2 ${
                                        activeTab === tab.id
                                            ? 'border-green-600 text-green-600'
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
                                    <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
                                        <img src="/images/defaultUser.jpg" alt="User" className="w-full h-full object-cover"/>
                                    </div>
                                    <div>
                                        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm">
                                            Change Photo
                                        </button>
                                        <p className="text-xs text-gray-500 mt-2">JPG, PNG or GIF. Max 2MB</p>
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                                            className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            disabled={userRole === 'employee'}
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                            className={`w-full p-2 border border-gray-300 rounded-lg text-sm ${userRole === 'employee' ? 'bg-gray-50' : ''}`}
                                        />
                                        {userRole === 'employee' && <p className="text-xs text-gray-500 mt-1">Contact admin to change email</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                            className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                                        <input
                                            type="text"
                                            value={formData.role}
                                            disabled
                                            className="w-full p-2 border border-gray-300 rounded-lg text-sm bg-gray-50"
                                        />
                                    </div>
                                </div>
                                
                                <div className="flex justify-end gap-3">
                                    <button className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900">Cancel</button>
                                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm">Save Changes</button>
                                </div>
                            </div>
                        )}
                        
                        {/* Pharmacy Info Tab - Admin Only */}
                        {activeTab === 'pharmacy' && userRole === 'admin' && (
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Pharmacy Name</label>
                                        <input
                                            type="text"
                                            value={formData.pharmacyName}
                                            onChange={(e) => setFormData({...formData, pharmacyName: e.target.value})}
                                            className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                                        <textarea
                                            value={formData.address}
                                            onChange={(e) => setFormData({...formData, address: e.target.value})}
                                            className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                                            rows={3}
                                        />
                                    </div>
                                </div>
                                
                                <div className="flex justify-end gap-3">
                                    <button className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900">Cancel</button>
                                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm">Save Changes</button>
                                </div>
                            </div>
                        )}
                        
                        {/* Notifications Tab */}
                        {activeTab === 'notifications' && (
                            <div className="space-y-4">
                                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Push Notifications</p>
                                        <p className="text-xs text-gray-500">Receive push notifications</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={formData.notifications}
                                            onChange={(e) => setFormData({...formData, notifications: e.target.checked})}
                                            className="sr-only peer"
                                        />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                                    </label>
                                </div>
                                
                                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Email Alerts</p>
                                        <p className="text-xs text-gray-500">Receive email notifications</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={formData.emailAlerts}
                                            onChange={(e) => setFormData({...formData, emailAlerts: e.target.checked})}
                                            className="sr-only peer"
                                        />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                                    </label>
                                </div>
                                
                                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Low Stock Alerts</p>
                                        <p className="text-xs text-gray-500">Get notified when stock is low</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={formData.lowStockAlerts}
                                            onChange={(e) => setFormData({...formData, lowStockAlerts: e.target.checked})}
                                            className="sr-only peer"
                                        />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                                    </label>
                                </div>
                                
                                <div className="flex items-center justify-between py-3">
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Expiry Alerts</p>
                                        <p className="text-xs text-gray-500">Get notified about expiring items</p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={formData.expiryAlerts}
                                            onChange={(e) => setFormData({...formData, expiryAlerts: e.target.checked})}
                                            className="sr-only peer"
                                        />
                                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                                    </label>
                                </div>
                            </div>
                        )}
                        
                        {/* Security Tab */}
                        {activeTab === 'security' && (
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-900 mb-4">Change Password</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                                            <input
                                                type="password"
                                                className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                                                placeholder="Enter current password"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                                            <input
                                                type="password"
                                                className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                                                placeholder="Enter new password"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                                            <input
                                                type="password"
                                                className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                                                placeholder="Confirm new password"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex justify-end gap-3 mt-4">
                                        <button className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900">Cancel</button>
                                        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm">Update Password</button>
                                    </div>
                                </div>
                                
                                <div className="border-t border-gray-200 pt-6">
                                    <h3 className="text-sm font-semibold text-gray-900 mb-4">Danger Zone</h3>
                                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <p className="text-sm font-medium text-red-900">Logout</p>
                                                <p className="text-xs text-red-700 mt-1">Sign out from your account</p>
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
                <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100 mx-auto mb-4">
                        <i className="bx bx-log-out text-2xl text-red-600"></i>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 text-center mb-2">Logout</h3>
                    <p className="text-sm text-gray-600 text-center mb-6">Are you sure you want to logout?</p>
                    <div className="flex gap-3">
                        <button
                            onClick={() => setShowLogoutModal(false)}
                            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
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