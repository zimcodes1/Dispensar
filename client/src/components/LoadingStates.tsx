import { useDarkMode } from "../utils/useDarkMode"

export function CardSkeleton() {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    
    return (
        <div className={`p-6 rounded-xl shadow-sm animate-pulse transition-colors duration-300 ${
            isDarkMode
                ? 'bg-gray-800'
                : 'bg-white'
        }`}>
            <div className="flex justify-between items-start">
                <div className="flex-1">
                    <div className={`h-4 rounded w-24 mb-2 transition-colors duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
                    <div className={`h-8 rounded w-32 transition-colors duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
                </div>
                <div className={`w-10 h-10 rounded-full transition-colors duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
            </div>
            <div className={`mt-4 h-4 rounded w-28 transition-colors duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
        </div>
    )
}

export function ChartSkeleton() {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    
    return (
        <div className={`p-6 rounded-xl shadow-sm animate-pulse transition-colors duration-300 ${
            isDarkMode
                ? 'bg-gray-800'
                : 'bg-white'
        }`}>
            <div className={`h-6 rounded w-40 mb-2 transition-colors duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
            <div className={`h-4 rounded w-32 mb-4 transition-colors duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
            <div className={`h-64 rounded transition-colors duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
        </div>
    )
}

export function TableSkeleton({ rows = 4 }: { rows?: number }) {
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
    
    return (
        <div className={`p-6 rounded-xl shadow-sm animate-pulse transition-colors duration-300 ${
            isDarkMode
                ? 'bg-gray-800'
                : 'bg-white'
        }`}>
            <div className={`h-6 rounded w-40 mb-6 transition-colors duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
            <div className="space-y-4">
                {Array.from({ length: rows }).map((_, i) => (
                    <div key={i} className="flex items-center gap-4">
                        <div className={`w-8 h-8 rounded-full transition-colors duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
                        <div className="flex-1 space-y-2">
                            <div className={`h-4 rounded w-3/4 transition-colors duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
                            <div className={`h-3 rounded w-1/2 transition-colors duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export function Spinner() {
    return (
        <div className="flex items-center justify-center p-8">
            <div className="w-8 h-8 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div>
        </div>
    )
}
