interface ErrorStateProps {
    message?: string
    onRetry?: () => void
}

export default function ErrorState({ message = "Failed to load data", onRetry }: ErrorStateProps) {
    return (
        <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="bx bx-error text-3xl text-red-600"></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Oops!</h3>
            <p className="text-sm text-gray-600 mb-4">{message}</p>
            {onRetry && (
                <button 
                    onClick={onRetry}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                >
                    Try Again
                </button>
            )}
        </div>
    )
}
