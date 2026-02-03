import { Bar } from 'react-chartjs-2'

interface TopProductsChartProps {
    isDarkMode: boolean
}

export default function TopProductsChart({ isDarkMode }: TopProductsChartProps) {
    const data = {
        labels: ['Paracetamol', 'Amoxicillin', 'Vitamin C', 'Ibuprofen', 'Bandages'],
        datasets: [{
            label: 'Revenue (₦)',
            data: [45000, 38000, 32000, 28000, 22000],
            backgroundColor: '#3b82f6'
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
        <div className={`p-6 rounded-lg shadow-sm border transition-colors duration-300 ${
            isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        }`}>
            <h3 className={`text-lg font-semibold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                <i className="bx bx-bar-chart-alt-2 mr-2"></i>Top Products
            </h3>
            <div className="h-64">
                <Bar data={data} options={options} />
            </div>
        </div>
    )
}
