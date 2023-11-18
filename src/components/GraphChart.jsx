import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const GraphChart = (props) => {
  const data = {
    labels: props.labels,
    datasets: [
      {
        data: props.data,
        backgroundColor: ['rgba(233, 127, 49, 0.2)'],
        borderColor: ['rgba(233, 127, 49, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: 'y', // This will make the chart horizontal
    scales: {
      x: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false, // This line will hide the legend
      },
    },
  };

  return <Bar style={{ padding: '20px' }} data={data} options={options} />;
};

export default GraphChart;
