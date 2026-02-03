import { Line } from 'react-chartjs-2'

interface SalesTrendChartProps {
    isDarkMode: boolean
}

export default function SalesTrendChart({ isDarkMode }: SalesTrendChartProps) {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Sales',
            data: [45000, 52000, 48000, 61000, 58000, 67000],
            borderColor: '#10b981',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            tension: 0.4
        }]
    }
    
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: { color: isDarkMode ? '#d1d5db' : '#374151' }
            }
        },
        scales: {
            x: {
                ticks: { color: isDarkMode ? '#9ca3af' : '#6b7280' },
                grid: { color: isDarkMode ? '#374151' : '#e5e7eb' }
            },
            y: {
                ticks: { color: isDarkMode ? '#9ca3af' : '#6b7280' },
                grid: { color: isDarkMode ? '#374151' : '#e5e7eb' }
            }
        }
    }
    
    return (
        <div className={`lg:col-span-2 p-6 rounded-lg shadow-sm border transition-colors duration-300 ${
            isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        }`}>
            <h3 className={`text-lg font-semibold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                <i className="bx bx-line-chart mr-2"></i>Sales Trend
            </h3>
            <div className="h-64">
                <Line data={data} options={options} />
            </div>
        </div>
    )
}
