export function CardSkeleton() {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm animate-pulse">
            <div className="flex justify-between items-start">
                <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                    <div className="h-8 bg-gray-200 rounded w-32"></div>
                </div>
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            </div>
            <div className="mt-4 h-4 bg-gray-200 rounded w-28"></div>
        </div>
    )
}

export function ChartSkeleton() {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-40 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-32 mb-4"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
        </div>
    )
}

export function TableSkeleton({ rows = 4 }: { rows?: number }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-40 mb-6"></div>
            <div className="space-y-4">
                {Array.from({ length: rows }).map((_, i) => (
                    <div key={i} className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                        <div className="flex-1 space-y-2">
                            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
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
