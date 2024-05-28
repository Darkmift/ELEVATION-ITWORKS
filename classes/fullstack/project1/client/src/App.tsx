import { useEffect } from 'react';
import './App.css';
import GroupedBuildsGraph from './components/Graph/GroupedBuildsGraph';
import Title, { TitleSize } from './components/Title/Title';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { TBody, TD, TH, THeader, TR, Table } from './components/Table/Table';

import { fetchBuildsPaginatedThunk } from './store/thunks/builds';

function App() {
  const dispatch = useAppDispatch();
  const builds = useAppSelector((state) => state.buildReducer.buildsPage);
  const isLoading = useAppSelector((state) => state.buildReducer.loading);
  const errorBuildFetch = useAppSelector((state) => state.buildReducer.error);

  const getPagintedBuilds = (page: number, limit: number, sort: 'asc' | 'desc') => {
    dispatch(fetchBuildsPaginatedThunk({ page, limit, sort }));
  };

  useEffect(() => {
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
      <GroupedBuildsGraph />
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
