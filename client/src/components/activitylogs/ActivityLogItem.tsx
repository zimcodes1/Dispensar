import { useDarkMode } from '../../utils/useDarkMode'

export interface ActivityLog {
    id: string
    user: string
    action: string
    entity: string
    details: string
    timestamp: string
    type: 'create' | 'update' | 'delete' | 'login' | 'payment'
}

interface ActivityLogItemProps {
    log: ActivityLog
}

export default function ActivityLogItem({ log }: ActivityLogItemProps) {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    
    const getIcon = () => {
        switch (log.type) {
            case 'create': return 'bx-plus-circle'
            case 'update': return 'bx-edit'
            case 'delete': return 'bx-trash'
            case 'login': return 'bx-log-in'
            case 'payment': return 'bx-money'
            default: return 'bx-info-circle'
        }
    }
    
    const getColor = () => {
        switch (log.type) {
            case 'create': return isDarkMode ? 'text-green-400' : 'text-green-600'
            case 'update': return isDarkMode ? 'text-blue-400' : 'text-blue-600'
            case 'delete': return isDarkMode ? 'text-red-400' : 'text-red-600'
            case 'login': return isDarkMode ? 'text-purple-400' : 'text-purple-600'
            case 'payment': return isDarkMode ? 'text-yellow-400' : 'text-yellow-600'
            default: return isDarkMode ? 'text-gray-400' : 'text-gray-600'
        }
    }
    
    return (
        <div className={`py-3 px-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex items-start gap-3">
                <i className={`bx ${getIcon()} text-xl ${getColor()} mt-0.5`}></i>
                <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                            <p className={`text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                <span className="font-medium">{log.user}</span> {log.action} <span className="font-medium">{log.entity}</span>
                            </p>
                            <p className={`text-xs mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{log.details}</p>
                        </div>
                        <span className={`text-xs whitespace-nowrap ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                            {log.timestamp}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
