interface Employee {
    id: string
    name: string
    role: string
    status: 'active' | 'inactive'
    sales: number
    avatar: string
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

export default function EmployeeList() {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">Employee Overview</h3>
                    <p className="text-sm text-gray-600">Manage your pharmacy staff</p>
                </div>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition flex items-center gap-2">
                    <i className="bx bx-plus"></i>
                    <span>Add Employee</span>
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="text-sm text-gray-600 border-b border-gray-200">
                            <th className="pb-3 text-left font-medium">Employee</th>
                            <th className="pb-3 text-left font-medium">Role</th>
                            <th className="pb-3 text-left font-medium">Status</th>
                            <th className="pb-3 text-right font-medium">Sales</th>
                            <th className="pb-3 text-right font-medium">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {demoEmployees.map(employee => (
                            <tr key={employee.id} className="border-b border-gray-50">
                                <td className="py-3">
                                    <div className="flex items-center gap-3">
                                        <img src={employee.avatar} alt={employee.name} className="w-8 h-8 rounded-full" />
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">{employee.name}</p>
                                            <p className="text-xs text-gray-500">ID: {employee.id}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-3">
                                    <span className="text-sm text-gray-600">{employee.role}</span>
                                </td>
                                <td className="py-3">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                        employee.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                                    }`}>
                                        {employee.status}
                                    </span>
                                </td>
                                <td className="py-3 text-right">
                                    <span className="text-sm text-gray-900">{employee.sales}</span>
                                </td>
                                <td className="py-3 text-right">
                                    <button className="text-gray-600 hover:text-gray-900">
                                        <i className="bx bx-dots-vertical-rounded"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}