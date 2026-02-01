import { useDarkMode } from "../utils/useDarkMode"

interface ErrorStateProps {
    message?: string
    onRetry?: () => void
}

export default function ErrorState({ message = "Failed to load data", onRetry }: ErrorStateProps) {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    
    return (
        <div className={`p-8 rounded-xl shadow-sm text-center transition-colors duration-300 ${
            isDarkMode
                ? 'bg-gray-800'
                : 'bg-white'
        }`}>
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300 ${
                isDarkMode
                    ? 'bg-red-900/30'
                    : 'bg-red-100'
            }`}>
                <i className={`bx bx-error text-3xl transition-colors duration-300 ${isDarkMode ? 'text-red-400' : 'text-red-600'}`}></i>
            </div>
            <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Oops!</h3>
            <p className={`text-sm mb-4 transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{message}</p>
            {onRetry && (
                <button 
                    onClick={onRetry}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300"
                >
                    Try Again
                </button>
            )}
        </div>
    )
}
