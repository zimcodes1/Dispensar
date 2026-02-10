import { useDarkMode } from '../../utils/useDarkMode'
import { useNavigate } from 'react-router-dom'
import ActivityLogItem, { type ActivityLog } from './ActivityLogItem'

interface RecentActivityCardProps {
    logs: ActivityLog[]
}

export default function RecentActivityCard({ logs }: RecentActivityCardProps) {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    const navigate = useNavigate()
    
    return (
        <div className={`rounded-lg shadow-sm border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
            <div className={`px-4 py-3 border-b flex items-center justify-between ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <h3 className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Recent Activity</h3>
                <button 
                    onClick={() => navigate('/activity-logs')}
                    className={`text-xs ${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
                >
                    View All
                </button>
            </div>
            <div className="max-h-[300px] overflow-y-auto table-scroll">
                {logs.slice(0, 5).map(log => (
                    <ActivityLogItem key={log.id} log={log} />
                ))}
            </div>
        </div>
    )
}
