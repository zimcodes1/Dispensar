import { useDarkMode } from "../utils/useDarkMode"

interface EmptyStateProps {
    icon?: string
    title: string
    message: string
    actionLabel?: string
    onAction?: () => void
}

export default function EmptyState({ 
    icon = "bx-inbox", 
    title, 
    message, 
    actionLabel, 
    onAction 
}: EmptyStateProps) {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    
    return (
        <div className={`p-8 rounded-xl shadow-sm text-center transition-colors duration-300 ${
            isDarkMode
                ? 'bg-gray-800'
                : 'bg-white'
        }`}>
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300 ${
                isDarkMode
                    ? 'bg-gray-700'
                    : 'bg-gray-100'
            }`}>
                <i className={`bx ${icon} text-3xl transition-colors duration-300 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}></i>
            </div>
            <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
            <p className={`text-sm mb-4 transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{message}</p>
            {actionLabel && onAction && (
                <button 
                    onClick={onAction}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300"
                >
                    {actionLabel}
                </button>
            )}
        </div>
    )
}
