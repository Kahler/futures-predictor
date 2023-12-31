import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './StyledLineChart.css';

const StyledLineChart = () => {
  const chartRef = useRef(null);
  const [delta, setDelta] = React.useState(2);

  React.useEffect(() => {
    document
      ?.getElementById('fileInput')
      ?.addEventListener('change', function (event) {
        console.log('updated doc');
        setDelta((prev) => (prev = prev + 1));
        // var fileName = event.target.files[0].name;
        // document.getElementById('fileInputLabel').textContent = 'File: ' + fileName;
      });
  });

  useEffect(() => {
    const chart = chartRef.current;

    if (chart) {
      // Create a gradient for the line fill
      const ctx = chart.ctx;
      const gradient = ctx.createLinearGradient(0, 0, 0, 200);
      gradient.addColorStop(0, 'rgba(233, 127, 49, 0.2)');
      gradient.addColorStop(1, 'rgba(233, 127, 49, 0)');

      chart.data.datasets[2].backgroundColor = gradient;
      chart.update();
    }
  }, []);

  const data = {
    labels: [
      'Dec',
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        label: 'Orange juice',
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
        data: [140, 137, 141, 138, 138, 141, 142, 141, 142, 145, 147, 149, 151],
        fill: true,
        backgroundColor: 'transparent', // Gradient will be added in the useEffect
        borderColor: '#4bc04d',
        pointBackgroundColor: '#FFFFFF',
        pointBorderColor: '#4bc04d',
        pointHoverBackgroundColor: '#4bc04d',
        pointHoverBorderColor: '#FFFFFF',
        tension: 0.2,
      },
      {
        label: 'Private predicted',
        data: [
          140,
          137,
          142,
          139,
          139,
          142,
          145,
          146,
          150,
          149 + delta / 2,
          151 + delta,
          151 + delta * 2,
          154 + delta * 2,
        ],
        fill: true,
        backgroundColor: 'transparent', // Gradient will be added in the useEffect
        borderColor: 'rgba(233, 127, 49, 1)',
        pointBackgroundColor: '#FFFFFF',
        pointBorderColor: 'rgba(233, 127, 49, 1)',
        pointHoverBackgroundColor: 'rgba(233, 127, 49, 1)',
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
