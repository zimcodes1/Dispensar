import { Line } from 'react-chartjs-2'
import { memo } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js'

// Register ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
)

function RevenueChart() {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                label: 'Revenue',
                data: [1800000, 2200000, 1900000, 2800000, 2100000, 2400000, 2700000],
                borderColor: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                fill: true,
                tension: 0.4
            }
        ]
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: (value: any) => `₦${(value / 1000000).toFixed(1)}M`
                }
            }
        }
    }

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">Revenue Overview</h3>
                    <p className="text-sm text-gray-600">Monthly revenue trends</p>
                </div>
                <select className="text-sm border border-gray-200 rounded-lg px-3 py-2">
                    <option>Last 7 months</option>
                    <option>Last 12 months</option>
                    <option>This Year</option>
                </select>
            </div>
            <div className="h-80">
                <Line data={data} options={options} />
            </div>
        </div>
    )
}

export default memo(RevenueChart)