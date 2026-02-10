import { useState, useEffect } from 'react'
import Topbar from '../components/dashboard/Topbar'
import SideNav from '../components/SideNav'
import ActivityLogItem from '../components/activitylogs/ActivityLogItem'
import { type ActivityLog } from '../components/activitylogs/ActivityLogItem'
import ActivityLogsFilters from '../components/activitylogs/ActivityLogsFilters'
import { useDarkMode } from '../utils/useDarkMode'

const demoLogs: ActivityLog[] = [
    { id: '1', user: 'John Doe', action: 'created', entity: 'Paracetamol 500mg', details: 'Added 200 units to inventory', timestamp: '2 mins ago', type: 'create' },
    { id: '2', user: 'Jane Smith', action: 'processed payment for', entity: 'Bill #DSP-2025-001', details: 'Amount: ₦15,000 via Cash', timestamp: '15 mins ago', type: 'payment' },
    { id: '3', user: 'Admin', action: 'updated price for', entity: 'Amoxicillin 250mg', details: 'Changed from ₦1,000 to ₦1,200', timestamp: '1 hour ago', type: 'update' },
    { id: '4', user: 'John Doe', action: 'logged in', entity: 'System', details: 'IP: 192.168.1.100', timestamp: '2 hours ago', type: 'login' },
    { id: '5', user: 'Jane Smith', action: 'deleted', entity: 'Expired Drug Batch', details: 'Metformin 500mg - Batch #MT-2024-05', timestamp: '3 hours ago', type: 'delete' },
    { id: '6', user: 'Admin', action: 'created', entity: 'New Employee', details: 'Added Sarah Johnson as Pharmacist', timestamp: '4 hours ago', type: 'create' },
    { id: '7', user: 'John Doe', action: 'updated', entity: 'Surgical Gloves', details: 'Stock adjusted from 100 to 150 boxes', timestamp: '5 hours ago', type: 'update' },
    { id: '8', user: 'Jane Smith', action: 'processed payment for', entity: 'Bill #DSP-2025-002', details: 'Amount: ₦8,500 via POS Transfer', timestamp: '6 hours ago', type: 'payment' },
    { id: '9', user: 'Admin', action: 'created', entity: 'Digital Thermometer', details: 'Added new medical supply to inventory', timestamp: '8 hours ago', type: 'create' },
    { id: '10', user: 'John Doe', action: 'updated', entity: 'Ibuprofen 400mg', details: 'Updated reorder level to 50 units', timestamp: '10 hours ago', type: 'update' },
    { id: '11', user: 'Jane Smith', action: 'logged in', entity: 'System', details: 'IP: 192.168.1.105', timestamp: '12 hours ago', type: 'login' },
    { id: '12', user: 'Admin', action: 'deleted', entity: 'Obsolete Item', details: 'Removed discontinued supply item', timestamp: '1 day ago', type: 'delete' },
    { id: '13', user: 'John Doe', action: 'processed payment for', entity: 'Bill #DSP-2025-003', details: 'Amount: ₦22,000 via Bank Transfer', timestamp: '1 day ago', type: 'payment' },
    { id: '14', user: 'Admin', action: 'updated', entity: 'System Settings', details: 'Changed notification preferences', timestamp: '2 days ago', type: 'update' },
    { id: '15', user: 'Jane Smith', action: 'created', entity: 'Ciprofloxacin 500mg', details: 'Registered new drug in system', timestamp: '2 days ago', type: 'create' }
]

export default function ActivityLogs() {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    const [search, setSearch] = useState('')
    const [actionType, setActionType] = useState('all')
    const [dateRange, setDateRange] = useState('all')
    
    const filteredLogs = demoLogs.filter(log => {
        const matchesSearch = log.user.toLowerCase().includes(search.toLowerCase()) ||
                            log.action.toLowerCase().includes(search.toLowerCase()) ||
                            log.entity.toLowerCase().includes(search.toLowerCase())
        const matchesAction = actionType === 'all' || log.type === actionType
        return matchesSearch && matchesAction
    })
    
    useEffect(() => { document.title = 'Activity Logs | Dispensar' })
    
    return (
        <>
            <Topbar />
            <div className={`flex w-full min-h-screen pt-[60px] justify-between items-start pr-[2%] max-[767px]:pr-0 md:pr-0 transition-colors duration-300 ${
                isDarkMode ? 'bg-gray-950' : 'bg-gray-100'
            }`}>
                <div className="flex w-[20%] h-full max-[767px]:w-0 md:w-16 lg:w-[20%]">
                    <SideNav />
                </div>
                <div className="flex w-[78%] md:w-[calc(100%-4rem)] lg:w-[78%] max-[767px]:w-full h-full flex-col max-[767px]:px-2 md:px-4">
                    <div className="p-6 max-sm:p-4">
                        <div className="mb-6">
                            <h1 className={`text-2xl max-sm:text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Activity Logs</h1>
                            <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Track all system activities and user actions</p>
                        </div>
                        
                        <ActivityLogsFilters
                            search={search}
                            onSearchChange={setSearch}
                            actionType={actionType}
                            onActionTypeChange={setActionType}
                            dateRange={dateRange}
                            onDateRangeChange={setDateRange}
                        />
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                            {[
                                { label: 'Total Activities', value: demoLogs.length, icon: 'bx-list-ul', color: 'blue' },
                                { label: 'Created', value: demoLogs.filter(l => l.type === 'create').length, icon: 'bx-plus-circle', color: 'green' },
                                { label: 'Updated', value: demoLogs.filter(l => l.type === 'update').length, icon: 'bx-edit', color: 'yellow' },
                                { label: 'Deleted', value: demoLogs.filter(l => l.type === 'delete').length, icon: 'bx-trash', color: 'red' }
                            ].map((stat, index) => (
                                <div key={index} className={`p-4 rounded-lg shadow-sm border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</p>
                                            <p className={`text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{stat.value}</p>
                                        </div>
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                            stat.color === 'blue' ? 'bg-blue-100' :
                                            stat.color === 'green' ? 'bg-green-100' :
                                            stat.color === 'yellow' ? 'bg-yellow-100' : 'bg-red-100'
                                        }`}>
                                            <i className={`bx ${stat.icon} text-xl ${
                                                stat.color === 'blue' ? 'text-blue-600' :
                                                stat.color === 'green' ? 'text-green-600' :
                                                stat.color === 'yellow' ? 'text-yellow-600' : 'text-red-600'
                                            }`}></i>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className={`rounded-lg shadow-sm border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                            <div className={`px-4 py-3 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                                <h3 className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                    Activity Timeline ({filteredLogs.length})
                                </h3>
                            </div>
                            <div className="max-h-[600px] overflow-y-auto table-scroll">
                                {filteredLogs.map(log => (
                                    <ActivityLogItem key={log.id} log={log} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
