import { useEffect } from 'react';
import './App.css';
import Graph from './components/Graph/Graph';
import Title, { TitleSize } from './components/Title/Title';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { setBuildsPerWeek } from './store/slices/builds.slice';
import { ChartData, ChartOptions } from 'chart.js';
import { TBody, TD, TH, THeader, TR, Table } from './components/Table/Table';

import { fetchBuildsPaginatedThunk } from './store/thunks/builds';

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

  const getPagintedBuilds = (page: number, limit: number, sort: 'asc' | 'desc') => {
    dispatch(fetchBuildsPaginatedThunk({ page, limit, sort }));
  };

  useEffect(() => {
    dispatch(
      setBuildsPerWeek({
        'Week 1': 100,
        'Week 2': 200,
        'Week 3': 150,
        'Week 4': 220,
        'Week 5': 300,
        'Week 6': 230,
        'Week 7': 400,
      })
    );

    getPagintedBuilds(1, 10, 'asc');

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

  const tableColumns = [{
    displayName: "Status",
    dbName: "status",
    width: "136px"
    },
    {displayName: "Build Id",
    dbName: "buildId",
    width: "160px"
    },
    {displayName: "Caption",
    dbName: "caption",
    width: "364px"
    },
    {displayName: "Command",
    dbName: "command",
    width: "364px"
    },
    {displayName: "Start Time",
    dbName: "startTime",
    width: "144px"
    },
    {displayName: "End Time",
    dbName: "endTime",
    width: "144px"
    },
    {displayName: "Errors Number",
    dbName: "errorsNumber",
    width: "144px"
    },
    {displayName: "Warnings Number",
    dbName: "warningsNumber",
    width: "168px"
    },
  ]

  return (
    <>
      <Title text="Vite + React" size={TitleSize.H1} className="text-nowrap" />
      <Graph data={data} options={options} classNames="h-[300px] mb-5" />
      <Table>
        <THeader>
          <TR rowType="header">
            {tableColumns.map((column) => {
              return <TH key={column.dbName} classNames={`w-[${column.width}]`}>{column.displayName}</TH>;
            })}
          </TR>
        </THeader>
        <TBody>
          {builds.map((build) => {
            return (
              <TR key={build.buildId}>
                {tableColumns.map((column) => {
                  return (
                    <TD
                      key={build.buildId + column}
                      classNames={`w-[${column.width}]`}
                      status={column.dbName === 'status' ? build.status : ''}
                    >
                      {build[column.dbName as keyof typeof build]}
                    </TD>
                  );
                })}
              </TR>
            );
          })}
        </TBody>
      </Table>
    </>
  );
}

export default App;
