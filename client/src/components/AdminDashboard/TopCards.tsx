interface StatCardProps {
    title: string
    value: string
    trend: number
    icon: string
}

function StatCard({ title, value, trend, icon }: StatCardProps) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-sm text-gray-600">{title}</p>
                    <h3 className="text-2xl font-semibold text-gray-900 mt-1">{value}</h3>
                </div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${trend >= 0 ? 'bg-green-100' : 'bg-red-100'}`}>
                    <i className={`bx ${icon} text-xl ${trend >= 0 ? 'text-green-600' : 'text-red-600'}`}></i>
                </div>
            </div>
            <div className="mt-4 flex items-center">
                <span className={`text-sm ${trend >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {trend >= 0 ? '+' : ''}{trend}%
                </span>
                <span className="text-sm text-gray-500 ml-2">vs last month</span>
            </div>
        </div>
    )
}

export default function TopCards() {
    const stats = [
        {
            title: "Total Revenue",
            value: "₦2.4M",
            trend: 12.5,
            icon: "bx-dollar"
        },
        {
            title: "Total Sales",
            value: "1,234",
            trend: 8.2,
            icon: "bx-shopping-bag"
        },
        {
            title: "Active Employees",
            value: "12",
            trend: 0,
            icon: "bx-user"
        },
        {
            title: "Low Stock Items",
            value: "8",
            trend: -2.3,
            icon: "bx-error-circle"
        }
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
            ))}
        </div>
    )
}