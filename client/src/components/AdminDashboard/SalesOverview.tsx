import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { memo } from 'react'

ChartJS.register(ArcElement, Tooltip, Legend)

function SalesOverview() {
    const data = {
        labels: ['Prescription', 'OTC', 'Medical Supplies'],
        datasets: [
            {
                data: [45, 30, 25],
                backgroundColor: [
                    '#10b981',  // green
                    '#3b82f6',  // blue
                    '#f59e0b',  // yellow
                ],
                borderWidth: 0
            }
        ]
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom' as const,
                labels: {
                    usePointStyle: true,
                    padding: 20
                }
            }
        },
        cutout: '70%'
    }

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">Sales Distribution</h3>
                    <p className="text-sm text-gray-600">Sales by category</p>
                </div>
                <select className="text-sm border border-gray-200 rounded-lg px-3 py-2">
                    <option>This Month</option>
                    <option>Last Month</option>
                    <option>This Quarter</option>
                </select>
            </div>

            <div className="h-64">
                <Doughnut data={data} options={options} />
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
                {[
                    { label: 'Prescription', value: '₦1.2M', percentage: '45%' },
                    { label: 'OTC', value: '₦800K', percentage: '30%' },
                    { label: 'Supplies', value: '₦600K', percentage: '25%' }
                ].map((item, index) => (
                    <div key={index} className="text-center">
                        <p className="text-sm text-gray-600">{item.label}</p>
                        <p className="text-lg font-semibold text-gray-900 mt-1">{item.value}</p>
                        <p className="text-xs text-gray-500">{item.percentage}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default memo(SalesOverview)