import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SeverityChart = () => {
  const data = {
    labels: ['Severity'],
    datasets: [
      {
        label: 'Severity Level',
        data: [2],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'category',
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-gray-800 p-4 rounded">
      <h2 className="text-center mb-4">Severity Distribution</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default SeverityChart;
