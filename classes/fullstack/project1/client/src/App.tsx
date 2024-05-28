import { useEffect } from 'react';
import './App.css';
import Graph from './components/Graph/Graph';
import Title, { TitleSize } from './components/Title/Title';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { setBuildsPerWeek } from './store/slices/builds.slice';
import { ChartData, ChartOptions } from 'chart.js';
import { TBody, TD, TH, THeader, TR, Table } from './components/Table/Table';

import { fetchBuildGroupedByWeekThunk, fetchBuildsPaginatedThunk } from './store/thunks/builds';

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

function App() {
  const dispatch = useAppDispatch();
  const buildsPerWeek = useAppSelector((state) => state.buildReducer.buildsPerWeek);
  const builds = useAppSelector((state) => state.buildReducer.buildsPage);
  const isLoading = useAppSelector((state) => state.buildReducer.loading);
  const errorBuildFetch = useAppSelector((state) => state.buildReducer.error);
  const isBuildGroupedLoading = useAppSelector((state) => state.buildReducer.groupedLoading);
  const errorBuildGrouped = useAppSelector((state) => state.buildReducer.groupedError);

  const getPagintedBuilds = (page: number, limit: number, sort: 'asc' | 'desc') => {
    dispatch(fetchBuildsPaginatedThunk({ page, limit, sort }));
  };

  useEffect(() => {
    getPagintedBuilds(1, 10, 'asc');

    dispatch(fetchBuildGroupedByWeekThunk());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (errorBuildFetch) {
    return <div>Error fetching builds: {errorBuildFetch}</div>;
  }

  if (builds.length === 0) {
    return <div>Loading...</div>;
  }

  const { data, options } = chartDataProvider(buildsPerWeek);

  return (
    <>
      <Title text="Vite + React" size={TitleSize.H1} className="text-nowrap" />
      {isBuildGroupedLoading ? (
        <div>Chart Data Is Loading</div>
      ) : (
        <Graph data={data} options={options} classNames="h-[300px] mb-5" />
      )}
      <Table>
        <THeader>
          <TR rowType="header">
            {Object.keys(builds[0]).map((key) => {
              return <TH key={key}>{key}</TH>;
            })}
          </TR>
        </THeader>
        <TBody>
          {/* {builds.map((build) => {
            return (
              <TR rowType={build.status} key={build.buildId}>
                {Object.keys(build).map((key) => {
                  return (
                    <TD
                      key={build.buildId + key}
                      classNames={key === 'status' ? 'w-[136px]' : ''}
                      status={key === 'status' ? build.status : ''}
                    >
                      {build[key as keyof typeof build]}
                    </TD>
                  );
                })}
              </TR>
            );
          })} */}
        </TBody>
      </Table>
    </>
  );
}

export default App;
