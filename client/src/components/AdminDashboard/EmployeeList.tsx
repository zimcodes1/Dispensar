import { useState } from 'react'
import { useDarkMode } from '../../utils/useDarkMode'
import truncateText from '../../utils/truncateText'
import { Link } from 'react-router-dom'

interface Employee {
    id: string
    name: string
    role: string
    status: 'active' | 'inactive'
    sales: number
    avatar: string
}

function EmployeeActions({ employeeId }: { employeeId: string }) {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    const [isOpen, setIsOpen] = useState(false)
    employeeId = employeeId; // to avoid unused variable warning
    return (
        <div className="relative">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`p-1 rounded ${isDarkMode ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
            >
                <i className="bx bx-dots-vertical-rounded"></i>
            </button>
            {isOpen && (
                <>
                    <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
                    <div className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg border py-1 z-50 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                        <button className={`w-full text-left px-4 py-2 text-sm ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}>
                            <i className="bx bx-edit mr-2"></i>Edit
                        </button>
                        <button className={`w-full text-left px-4 py-2 text-sm ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}>
                            <i className="bx bx-show mr-2"></i>View Details
                        </button>
                        <button className={`w-full text-left px-4 py-2 text-sm text-red-600 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                            <i className="bx bx-trash mr-2"></i>Delete
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}

interface EmployeeListProps {
    onAddEmployee?: () => void
}

const demoEmployees: Employee[] = [
    {
        id: 'E001',
        name: 'Sarah Johnson',
        role: 'Senior Pharmacist',
        status: 'active',
        sales: 342,
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
    },
    {
        id: 'E002',
        name: 'Michael Chen',
        role: 'Pharmacist',
        status: 'active',
        sales: 278,
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael'
    },
    {
        id: 'E003',
        name: 'Emma Davis',
        role: 'Pharmacy Technician',
        status: 'active',
        sales: 156,
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma'
    },
    {
        id: 'E004',
        name: 'James Wilson',
        role: 'Pharmacist',
        status: 'inactive',
        sales: 89,
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James'
    }
]

export default function EmployeeList({ onAddEmployee }: EmployeeListProps) {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    return (
        <div className={`p-6 rounded-xl shadow-sm ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Employee Overview</h3>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Manage your pharmacy staff</p>
                </div>
                <button 
                    onClick={onAddEmployee}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition flex items-center gap-2">
                    <i className="bx bx-plus"></i>
                    <span>Add Employee</span>
                </button>
            </div>

            <div className="lg:overflow-visible">
                <table className="w-full lg:min-w-0">
                    <thead>
                        <tr className={`text-sm border-b ${isDarkMode ? 'text-gray-400 border-gray-700' : 'text-gray-600 border-gray-200'}`}>
                            <th className="pb-3 text-left font-medium">Employee</th>
                            <th className="pb-3 text-left font-medium">Role</th>
                            <th className="pb-3 text-left font-medium">Status</th>
                            <th className="pb-3 text-right font-medium">Sales</th>
                            <th className="pb-3 text-right font-medium">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {demoEmployees.slice(0, 3).map(employee => (
                            <tr key={employee.id} className={`border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-50'}`}>
                                <td className="py-3">
                                    <div className="flex items-center gap-3">
                                        <img src={employee.avatar} alt={employee.name} className="w-8 h-8 rounded-full" />
                                        <div>
                                            <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{employee.name}</p>
                                            <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>ID: {employee.id}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-3">
                                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{truncateText(employee.role, 12)}</span>
                                </td>
                                <td className="py-3">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                        employee.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                                    }`}>
                                        {employee.status}
                                    </span>
                                </td>
                                <td className="py-3 text-right">
                                    <span className={`text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{employee.sales}</span>
                                </td>
                                <td className="py-3 text-right">
                                    <EmployeeActions employeeId={employee.id} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            <div className="mt-4 text-center">
                <Link to="/admin/employees" className="text-sm text-green-600 hover:text-green-700 font-medium">
                    View All Employees ({demoEmployees.length})
                </Link>
            </div>
        </div>
    )
}