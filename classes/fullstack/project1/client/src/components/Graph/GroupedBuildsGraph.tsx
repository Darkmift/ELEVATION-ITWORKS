import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchBuildGroupedByWeekThunk } from '../../store/thunks/groupedbuilds';
import Graph from './Graph';
import { ChartData, ChartOptions } from 'chart.js';

function chartDataProvider(rowData: Record<string, number>) {
  const options: ChartOptions<'bar'> = {
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
          // drawBorder: false,
          color: 'rgba(210, 212, 218, 1)',
          // borderDash: [8, 4],
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
          color: 'rgba(255, 255, 255, 255)',
        },
      },
    },
  };

  const data: ChartData<'bar', number[], string> = {
    labels: Object.keys(rowData),
    datasets: [
      {
        label: 'Total Builds',
        data: Object.values(rowData),
        backgroundColor: 'rgba(53, 204, 208, 1)',
        maxBarThickness: 56,
      },
    ],
  };

  return { options, data };
}

export default function GroupedBuildsGraph() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.groupedReducer.loading);
  const errorFetchingData = useAppSelector((state) => state.groupedReducer.error);
  const buildsPerWeek = useAppSelector((state) => state.groupedReducer.buildsPerWeek);

  useEffect(() => {
    dispatch(fetchBuildGroupedByWeekThunk());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { data, options } = chartDataProvider(buildsPerWeek);

  return (
    <>
      {isLoading ? (
        <div>Chart Data Is Loading</div>
      ) : (
        <Graph data={data} options={options} classNames="h-[300px] mb-5" />
      )}
      {errorFetchingData && <span>{errorFetchingData}</span>}
    </>
  );
}
