import { useDarkMode } from '../../utils/useDarkMode'

interface ActivityLogsFiltersProps {
    search: string
    onSearchChange: (value: string) => void
    actionType: string
    onActionTypeChange: (value: string) => void
    dateRange: string
    onDateRangeChange: (value: string) => void
}

export default function ActivityLogsFilters({
    search,
    onSearchChange,
    actionType,
    onActionTypeChange,
    dateRange,
    onDateRangeChange
}: ActivityLogsFiltersProps) {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
                <input
                    type="text"
                    placeholder="Search by user or action..."
                    value={search}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className={`w-full px-4 py-2 rounded-lg border text-sm ${
                        isDarkMode 
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                            : 'bg-white border-gray-300 text-gray-900'
                    }`}
                />
            </div>
            <div>
                <select
                    value={actionType}
                    onChange={(e) => onActionTypeChange(e.target.value)}
                    className={`w-full px-4 py-2 rounded-lg border text-sm ${
                        isDarkMode 
                            ? 'bg-gray-700 border-gray-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-900'
                    }`}
                >
                    <option value="all">All Actions</option>
                    <option value="create">Created</option>
                    <option value="update">Updated</option>
                    <option value="delete">Deleted</option>
                    <option value="login">Login</option>
                    <option value="payment">Payment</option>
                </select>
            </div>
            <div>
                <select
                    value={dateRange}
                    onChange={(e) => onDateRangeChange(e.target.value)}
                    className={`w-full px-4 py-2 rounded-lg border text-sm ${
                        isDarkMode 
                            ? 'bg-gray-700 border-gray-600 text-white' 
                            : 'bg-white border-gray-300 text-gray-900'
                    }`}
                >
                    <option value="all">All Time</option>
                    <option value="today">Today</option>
                    <option value="week">This Week</option>
                    <option value="month">This Month</option>
                </select>
            </div>
        </div>
    )
}
