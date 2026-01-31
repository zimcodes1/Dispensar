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
    return (
        <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`bx ${icon} text-3xl text-gray-400`}></i>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-sm text-gray-600 mb-4">{message}</p>
            {actionLabel && onAction && (
                <button 
                    onClick={onAction}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                >
                    {actionLabel}
                </button>
            )}
        </div>
    )
}
