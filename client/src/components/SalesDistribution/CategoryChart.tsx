import { Doughnut } from 'react-chartjs-2'

interface CategoryChartProps {
    isDarkMode: boolean
}

export default function CategoryChart({ isDarkMode }: CategoryChartProps) {
    const data = {
        labels: ['Antibiotics', 'Pain Relief', 'Vitamins', 'Prescriptions', 'Medical Supplies', 'Others'],
        datasets: [{
            data: [28, 22, 15, 20, 10, 5],
            backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#6b7280'],
            borderWidth: 0
        }]
    }
    
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: { color: isDarkMode ? '#d1d5db' : '#374151' }
            }
        }
    }
    
    return (
        <div className={`p-6 rounded-lg shadow-sm border transition-colors duration-300 ${
            isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        }`}>
            <h3 className={`text-lg font-semibold mb-4 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                <i className="bx bx-pie-chart-alt-2 mr-2"></i>Category Distribution
            </h3>
            <div className="h-64">
                <Doughnut data={data} options={options} />
            </div>
        </div>
    )
}
