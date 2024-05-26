import React from 'react';
import { Bar } from 'react-chartjs-2';
import './Graph.css'; 
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/store';
import { ChartData, ChartOptions } from '../../types/chartTypes'; 

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options: ChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      display: true, 
      grid: {
        display: false,
      },
      ticks: {
        color: 'rgba(7, 17, 44, 0.6)', 
        font: {
          size: 10,
          family: 'Gordita',
        },
      },

    },
    y: {
      beginAtZero: true,
      grid: {
        drawBorder: false, 
        color: 'rgba(210, 212, 218, 1)', 
        borderDash: [8, 4],
        drawTicks: false,
      },
      ticks: {
        stepSize: 100,
        color: 'rgba(7, 17, 44, 0.6)', 
        font: {
          size: 10,
          family: 'Gordita',
        },
        padding: 10,
      },
      border: {
        color: 'rgba(255, 255, 255, 255)' 
      }
    },
  },
};

const Graph: React.FC = () => {
  const buildsPerWeek = useAppSelector((state: RootState) => state.buildReducer.buildsPerWeek);

  const data: ChartData = {
    labels: Object.keys(buildsPerWeek),
    datasets: [
      {
        label: 'Total Builds',
        data: Object.values(buildsPerWeek),
        backgroundColor: 'rgba(53, 204, 208, 1)',
        maxBarThickness: 56,
      },
    ],
  };

  return (
    <div className="graph-container">
      <div className="vertical-text">Builds</div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default Graph;
