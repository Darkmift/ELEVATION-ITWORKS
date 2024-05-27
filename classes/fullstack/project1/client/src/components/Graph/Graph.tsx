import { Bar } from 'react-chartjs-2';
import './Graph.css';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { ChartData, ChartOptions } from '../../types/chartTypes';
import Container from '../Container/Container';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type GraphProps<T> = {
  options: ChartOptions;
  classNames?: string;
  data: ChartData<T>;
};

const Graph = <T,>({ options, classNames = '', data }: GraphProps<T>) => {
  return (
    <Container className={`graph-container ${classNames}`}>
      <div className="vertical-text">Builds</div>
      <Bar options={options} data={data} />
    </Container>
  );
};

export default Graph;
