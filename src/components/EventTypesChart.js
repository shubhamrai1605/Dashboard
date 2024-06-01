import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const EventTypesChart = () => {
  const data = {
    labels: ['Alert'],
    datasets: [
      {
        label: 'Event Types',
        data: [1],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
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
      <h2 className="text-center mb-4">Event Types Over Time</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default EventTypesChart;
