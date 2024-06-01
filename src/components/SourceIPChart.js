import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SourceIPChart = () => {
  const data = {
    labels: ['8.42.77.171'],
    datasets: [
      {
        label: 'Source IP Activity',
        data: [1],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
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
      <h2 className="text-center mb-4">Most Active Source IPs</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default SourceIPChart;
