import React from 'react';
import { Bar } from 'react-chartjs-2';
import './Graph.css';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { ChartData, ChartOptions } from '../../types/chartTypes';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type GraphProps = {
  options: ChartOptions;
  classNames?: string;
  data: ChartData<Record<string, number>>;
};

const Graph: React.FC<GraphProps> = ({ options, classNames, data }) => {
  return (
    <div className={`graph-container ${classNames}`}>
      <div className="vertical-text">Builds</div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default Graph;
