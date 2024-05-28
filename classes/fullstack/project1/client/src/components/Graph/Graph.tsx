import { Bar } from 'react-chartjs-2';
import './Graph.css';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { ChartData, ChartOptions } from 'chart.js';
import Container from '../Container/Container';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type GraphProps = {
  options: ChartOptions<'bar'>;
  classNames?: string;
  data: ChartData<'bar', number[], string>;
};

const Graph = ({ options, classNames = '', data }: GraphProps) => {
  return (
    <Container className={`graph-container ${classNames}`}>
      <div className="vertical-text">Builds</div>
      <Bar options={options} data={data} />
    </Container>
  );
};

export default Graph;
