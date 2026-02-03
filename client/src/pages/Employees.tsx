import { useState, useEffect } from 'react'
import Topbar from '../components/dashboard/Topbar'
import SideNav from '../components/SideNav'
import AddEmployeeModal from '../components/AdminDashboard/AddEmployeeModal'
import { useDarkMode } from '../utils/useDarkMode'

interface Employee {
    id: string
    name: string
    email: string
    role: string
    department: string
    status: 'active' | 'inactive'
    sales: number
    avatar: string
    joinDate: string
}

const demoEmployees: Employee[] = [
    { id: 'E001', name: 'Sarah Johnson', email: 'sarah.j@dispensar.com', role: 'Senior Pharmacist', department: 'Pharmacy', status: 'active', sales: 342, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah', joinDate: '2023-01-15' },
    { id: 'E002', name: 'Michael Chen', email: 'michael.c@dispensar.com', role: 'Pharmacist', department: 'Pharmacy', status: 'active', sales: 278, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael', joinDate: '2023-03-20' },
    { id: 'E003', name: 'Emma Davis', email: 'emma.d@dispensar.com', role: 'Pharmacy Technician', department: 'Pharmacy', status: 'active', sales: 156, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma', joinDate: '2023-06-10' },
    { id: 'E004', name: 'James Wilson', email: 'james.w@dispensar.com', role: 'Pharmacist', department: 'Pharmacy', status: 'inactive', sales: 89, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James', joinDate: '2022-11-05' },
    { id: 'E005', name: 'Lisa Anderson', email: 'lisa.a@dispensar.com', role: 'Store Manager', department: 'Management', status: 'active', sales: 420, avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa', joinDate: '2022-08-12' },
]

export default function Employees() {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    const [showAddModal, setShowAddModal] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [filterStatus, setFilterStatus] = useState('all')
    const [filterDepartment, setFilterDepartment] = useState('all')
    
    useEffect(() => { document.title = 'Employees | Dispensar' })
    
    const filteredEmployees = demoEmployees.filter(emp => {
        const matchesSearch = emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            emp.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            emp.id.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesStatus = filterStatus === 'all' || emp.status === filterStatus
        const matchesDepartment = filterDepartment === 'all' || emp.department === filterDepartment
        return matchesSearch && matchesStatus && matchesDepartment
    })
    
    return (
        <>
            <Topbar />
            <div className={`flex w-full min-h-screen pt-[60px] justify-between items-start pr-[2%] max-[767px]:pr-0 md:pr-0 transition-colors duration-300 ${
                isDarkMode ? 'bg-gray-950' : 'bg-gray-100'
            }`}>
                <div className="flex w-[20%] h-full max-[767px]:w-0 md:w-16 lg:w-[20%]">
                    <SideNav />
                </div>
                <div className="flex w-[78%] md:w-[calc(100%-4rem)] lg:w-[78%] max-[767px]:w-full h-full flex-col max-[767px]:px-2 md:px-4 py-6">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h1 className={`text-2xl max-sm:text-lg font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Employees</h1>
                            <p className={`text-sm mt-1 transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Manage your pharmacy staff</p>
                        </div>
                        <button
                            onClick={() => setShowAddModal(true)}
                            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition flex items-center gap-2"
                        >
                            <i className="bx bx-plus"></i>
                            <span>Add Employee</span>
                        </button>
                    </div>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                        <div className={`p-4 rounded-lg shadow-sm border transition-colors duration-300 ${
                            isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                        }`}>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total Employees</p>
                                    <p className={`text-2xl font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{demoEmployees.length}</p>
                                </div>
                                <i className="bx bx-group text-3xl text-blue-600"></i>
                            </div>
                        </div>
                        <div className={`p-4 rounded-lg shadow-sm border transition-colors duration-300 ${
                            isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                        }`}>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Active</p>
                                    <p className="text-2xl font-semibold text-green-600">{demoEmployees.filter(e => e.status === 'active').length}</p>
                                </div>
                                <i className="bx bx-check-circle text-3xl text-green-600"></i>
                            </div>
                        </div>
                        <div className={`p-4 rounded-lg shadow-sm border transition-colors duration-300 ${
                            isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                        }`}>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Inactive</p>
                                    <p className={`text-2xl font-semibold transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{demoEmployees.filter(e => e.status === 'inactive').length}</p>
                                </div>
                                <i className="bx bx-x-circle text-3xl text-gray-600"></i>
                            </div>
                        </div>
                        <div className={`p-4 rounded-lg shadow-sm border transition-colors duration-300 ${
                            isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                        }`}>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Departments</p>
                                    <p className={`text-2xl font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>2</p>
                                </div>
                                <i className="bx bx-buildings text-3xl text-purple-600"></i>
                            </div>
                        </div>
                    </div>
                    
                    {/* Search & Filter */}
                    <div className={`p-4 rounded-lg shadow-sm border mb-6 transition-colors duration-300 ${
                        isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                    }`}>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1">
                                <input
                                    type="text"
                                    placeholder="Search by name, email, or ID..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className={`w-full p-2 border rounded-lg text-sm transition-colors duration-300 ${
                                        isDarkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' : 'bg-white border-gray-300 text-gray-900'
                                    }`}
                                />
                            </div>
                            <select
                                value={filterDepartment}
                                onChange={(e) => setFilterDepartment(e.target.value)}
                                className={`p-2 border rounded-lg text-sm transition-colors duration-300 ${
                                    isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'
                                }`}
                            >
                                <option value="all">All Departments</option>
                                <option value="Pharmacy">Pharmacy</option>
                                <option value="Management">Management</option>
                                <option value="Billing">Billing</option>
                                <option value="Dispensing">Dispensing</option>
                                <option value="Payments">Payments</option>
                            </select>
                            <select
                                value={filterStatus}
                                onChange={(e) => setFilterStatus(e.target.value)}
                                className={`p-2 border rounded-lg text-sm transition-colors duration-300 ${
                                    isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'
                                }`}
                            >
                                <option value="all">All Status</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>
                    </div>
                    
                    {/* Employee Table */}
                    <div className={`rounded-lg shadow-sm border overflow-hidden transition-colors duration-300 ${
                        isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                    }`}>
                        <div className="overflow-x-auto table-scroll">
                            <table className="w-full min-w-[800px]">
                                <thead className={`border-b transition-colors duration-300 ${
                                    isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'
                                }`}>
                                    <tr>
                                        <th className={`py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                        }`}>Employee</th>
                                        <th className={`py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                        }`}>Role</th>
                                        <th className={`py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                        }`}>Department</th>
                                        <th className={`py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                        }`}>Status</th>
                                        <th className={`py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                        }`}>Sales</th>
                                        <th className={`py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                        }`}>Join Date</th>
                                        <th className={`py-3 px-4 text-left text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                                            isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                        }`}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody className={`divide-y transition-colors duration-300 ${
                                    isDarkMode ? 'bg-gray-800 divide-gray-700' : 'bg-white divide-gray-200'
                                }`}>
                                    {filteredEmployees.map(employee => (
                                        <tr key={employee.id} className={`transition-colors duration-300 ${
                                            isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                                        }`}>
                                            <td className="py-3 px-4">
                                                <div className="flex items-center gap-3">
                                                    <img src={employee.avatar} alt={employee.name} className="w-10 h-10 rounded-full" />
                                                    <div>
                                                        <p className={`text-sm font-medium transition-colors duration-300 ${
                                                            isDarkMode ? 'text-white' : 'text-gray-900'
                                                        }`}>{employee.name}</p>
                                                        <p className={`text-xs transition-colors duration-300 ${
                                                            isDarkMode ? 'text-gray-400' : 'text-gray-500'
                                                        }`}>{employee.email}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={`py-3 px-4 text-sm transition-colors duration-300 ${
                                                isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                            }`}>{employee.role}</td>
                                            <td className={`py-3 px-4 text-sm transition-colors duration-300 ${
                                                isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                            }`}>{employee.department}</td>
                                            <td className="py-3 px-4">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                                    employee.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                                                }`}>
                                                    {employee.status}
                                                </span>
                                            </td>
                                            <td className={`py-3 px-4 text-sm transition-colors duration-300 ${
                                                isDarkMode ? 'text-white' : 'text-gray-900'
                                            }`}>{employee.sales}</td>
                                            <td className={`py-3 px-4 text-sm transition-colors duration-300 ${
                                                isDarkMode ? 'text-gray-300' : 'text-gray-700'
                                            }`}>{new Date(employee.joinDate).toLocaleDateString()}</td>
                                            <td className="py-3 px-4">
                                                <div className="flex items-center gap-2">
                                                    <button className="text-blue-600 hover:text-blue-800 p-1 hover:bg-blue-50 rounded transition" title="Edit">
                                                        <i className="bx bx-edit text-lg"></i>
                                                    </button>
                                                    <button className="text-red-600 hover:text-red-800 p-1 hover:bg-red-50 rounded transition" title="Delete">
                                                        <i className="bx bx-trash text-lg"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            
            {showAddModal && <AddEmployeeModal onClose={() => setShowAddModal(false)} />}
        </>
    )
}
