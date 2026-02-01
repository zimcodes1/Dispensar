import React, { useEffect, useRef, memo } from 'react';
import { useDarkMode } from '../../utils/useDarkMode';
import {
  Chart,
  LineController, // <-- IMPORT THE CONTROLLER
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  Filler, // Import Filler for area charts
} from 'chart.js';

// Register the necessary components for Chart.js
Chart.register(
  LineController, // <-- ADD THE CONTROLLER
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  Filler // Register the Filler plugin
);

/**
 * SalesOverviewChart Component
 * * This component renders a responsive area chart displaying
 * monthly sales data using Chart.js in a React/TypeScript environment.
 * * To use this component, you will need to install chart.js:
 * npm install chart.js
 * or
 * yarn add chart.js
 */
const SalesOverviewChart: React.FC = () => {
  const { isDarkMode } = useDarkMode() as { isDarkMode: boolean }
  // Create a ref to store the canvas element
  const chartRef = useRef<HTMLCanvasElement>(null);
  // Create a ref to store the chart instance
  const chartInstanceRef = useRef<Chart | null>(null);

  // Dummy monthly sales data
  const salesData = {
    labels: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ],
    datasets: [
      {
        label: 'Monthly Sales (USD)',
        data: [
          12000, 19000, 15000, 21000, 18000, 24000,
          22000, 26000, 23000, 28000, 30000, 35000
        ],
        fill: true, // This creates the area chart
        backgroundColor: 'rgba(16, 185, 129, 0.1)', // Light blue fill
        borderColor: '#10b981', // Solid blue line
        tension: 0.4, // Makes the line smooth
        pointBackgroundColor: '#10b981',
        pointRadius: 4,
        pointHoverRadius: 8,
      },
    ],
  };

  useEffect(() => {
    // Ensure we have a canvas context
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (!ctx) {
        return;
      }

      // FIX: Destroy any existing chart instance attached to this canvas.
      // This is more robust than relying on our React ref, especially
      // in development with React Strict Mode or Fast Refresh.
      const existingChart = Chart.getChart(chartRef.current);
      if (existingChart) {
        existingChart.destroy();
      }

      // Create the new chart instance
      chartInstanceRef.current = new Chart(ctx, {
        type: 'line', // Line chart is the base for an area chart
        data: salesData,
        options: {
          responsive: true,
          maintainAspectRatio: false, // Allows custom sizing via the wrapper
          plugins: {
            legend: {
              position: 'top' as const,
              labels: {
                font: {
                  size: 14,
                  family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                },
                color: isDarkMode ? '#d1d5db' : '#333',
              },
            },
            title: {
              display: true,
              text: 'Monthly Sales Overview',
              font: {
                size: 18,
                weight: 'bold',
                family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
              },
              color: isDarkMode ? '#f3f4f6' : '#222',
              padding: {
                top: 10,
                bottom: 20,
              },
            },
            tooltip: {
              enabled: true,
              mode: 'index',
              intersect: false,
              backgroundColor: isDarkMode ? 'rgba(55, 65, 81, 0.9)' : 'rgba(0, 0, 0, 0.8)',
              titleColor: isDarkMode ? '#f3f4f6' : '#fff',
              bodyColor: isDarkMode ? '#f3f4f6' : '#fff',
              borderColor: isDarkMode ? '#4b5563' : '#999',
              borderWidth: 1,
              callbacks: {
                label: function (context) {
                  let label = context.dataset.label || '';
                  if (label) {
                    label += ': ';
                  }
                  if (context.parsed.y !== null) {
                    label += new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    }).format(context.parsed.y);
                  }
                  return label;
                },
              },
            },
          },
          scales: {
            x: {
              grid: {
                display: false, // Hide x-axis grid lines
                color: isDarkMode ? 'rgba(107, 114, 128, 0.1)' : 'rgba(0, 0, 0, 0.1)',
              },
              ticks: {
                color: isDarkMode ? '#d1d5db' : '#555',
              }
            },
            y: {
              grid: {
                display: false, // hide y-axis grid lines
                color: isDarkMode ? 'rgba(107, 114, 128, 0.1)' : 'rgba(0, 0, 0, 0.1)',
              },
              ticks: {
                color: isDarkMode ? '#d1d5db' : '#555',
                // Format y-axis labels as currency
                callback: function (value) {
                  if (typeof value === 'number') {
                    return '$' + (value / 1000) + 'k';
                  }
                  return value;
                },
              },
            },
          },
          interaction: {
            mode: 'nearest',
            axis: 'x',
            intersect: false,
          },
        },
      });
    }

    // Cleanup function to destroy the chart when the component unmounts
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, [salesData, isDarkMode]); // Re-run effect if salesData or isDarkMode changes

  return (
    <div className="p-4 rounded-lg h-full w-full">
      <canvas ref={chartRef} />
    </div>
  );
};

export default memo(SalesOverviewChart);