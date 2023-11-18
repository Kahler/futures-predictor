import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './StyledLineChart.css';

const StyledLineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current;

    if (chart) {
      // Create a gradient for the line fill
      const ctx = chart.ctx;
      const gradient = ctx.createLinearGradient(0, 0, 0, 200);
      gradient.addColorStop(0, 'rgba(54, 154, 63, 0.2)');
      gradient.addColorStop(1, 'rgba(54, 154, 63, 0)');

      chart.data.datasets[1].backgroundColor = gradient;
      chart.update();
    }
  }, []);

  const data = {
    labels: [
      '12',
      '2',
      '4',
      '6',
      '8',
      '10',
      '12',
      '2',
      '4',
      '6',
      '8',
      '10',
      '12',
    ],
    datasets: [
      {
        label: 'Stock A',
        data: [140, 137, 141, 138, 137, 140, 142, 141, 144, 143, 145, 146, 148],
        fill: true,
        backgroundColor: 'transparent', // Gradient will be added in the useEffect
        borderColor: '#4BC0C0',
        pointBackgroundColor: '#FFFFFF',
        pointBorderColor: '#4BC0C0',
        pointHoverBackgroundColor: '#4BC0C0',
        pointHoverBorderColor: '#FFFFFF',
        tension: 0.2,
      },
      {
        label: 'Predicted',
        data: [140, 137, 142, 139, 139, 142, 145, 146, 150, 149, 151, 152, 155],
        fill: true,
        backgroundColor: 'transparent', // Gradient will be added in the useEffect
        borderColor: '#1f8522',
        pointBackgroundColor: '#FFFFFF',
        pointBorderColor: '#154e1f',
        pointHoverBackgroundColor: '#4bc053',
        pointHoverBorderColor: '#FFFFFF',
        tension: 0.2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleFont: {
          size: 10,
        },
        bodyFont: {
          size: 10,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: '#777777',
          font: {
            size: 10,
          },
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.2)',
          borderDash: [5, 5],
        },
        ticks: {
          color: '#777777',
          font: {
            size: 10,
          },
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <div className="styled-line-chart__wrapper">
      <Line
        className="styled-line-chart"
        ref={chartRef}
        data={data}
        options={options}
      />
    </div>
  );
};

export default StyledLineChart;
