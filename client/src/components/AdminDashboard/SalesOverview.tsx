import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { memo } from "react";
import { useDarkMode } from "../../utils/useDarkMode";
import { Link } from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend);

function SalesOverview() {
  const { isDarkMode } = useDarkMode() as { isDarkMode: boolean };
  const data = {
    labels: ["Prescription", "OTC", "Medical Supplies"],
    datasets: [
      {
        data: [45, 30, 25],
        backgroundColor: [
          "#10b981", // green
          "#3b82f6", // blue
          "#f59e0b", // yellow
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          usePointStyle: true,
          padding: 20,
          color: isDarkMode ? "#d1d5db" : "#374151",
        },
      },
    },
    cutout: "70%",
  };

  return (
    <div
      className={`p-6 rounded-xl shadow-sm ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3
            className={`text-lg font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            Sales Distribution
          </h3>
          <p
            className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            Sales by category
          </p>
        </div>
        <select
          className={`text-sm border rounded-lg px-3 py-2 ${isDarkMode ? "bg-gray-700 border-gray-600 text-gray-300" : "border-gray-200 bg-white"}`}
        >
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
          { label: "Prescription", value: "₦1.2M", percentage: "45%" },
          { label: "OTC", value: "₦800K", percentage: "30%" },
          { label: "Supplies", value: "₦600K", percentage: "25%" },
        ].map((item, index) => (
          <div key={index} className="text-center">
            <p
              className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
            >
              {item.label}
            </p>
            <p
              className={`text-lg font-semibold mt-1 ${isDarkMode ? "text-white" : "text-gray-900"}`}
            >
              {item.value}
            </p>
            <p
              className={`text-xs ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}
            >
              {item.percentage}
            </p>
          </div>
        ))}
              <Link
        to="/sales"
        className="text-sm text-green-600 hover:text-green-700 font-medium text-center"
      >
        View More
      </Link>
      </div>
    </div>
  );
}

export default memo(SalesOverview);
