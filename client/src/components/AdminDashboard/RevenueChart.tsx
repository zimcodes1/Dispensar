import { Line } from 'react-chartjs-2'
import { memo } from 'react'
import { useDarkMode } from '../../utils/useDarkMode'
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
    const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
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
                    callback: (value: any) => `₦${(value / 1000000).toFixed(1)}M`,
                    color: isDarkMode ? '#9ca3af' : '#6b7280'
                },
                grid: {
                    color: isDarkMode ? '#374151' : '#e5e7eb'
                }
            },
            x: {
                ticks: {
                    color: isDarkMode ? '#9ca3af' : '#6b7280'
                },
                grid: {
                    color: isDarkMode ? '#374151' : '#e5e7eb'
                }
            }
        }
    }

    return (
        <div className={`p-6 rounded-xl shadow-sm ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Revenue Overview</h3>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Monthly revenue trends</p>
                </div>
                <select className={`text-sm border rounded-lg px-3 py-2 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'border-gray-200 bg-white'}`}>
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