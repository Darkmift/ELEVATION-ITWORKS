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

  return (
    <>
      <Title text="Vite + React" size={TitleSize.H1} className="text-nowrap" />
      <GroupedBuildsGraph />
      <Table>
        <THeader>
          <TR rowType="header">
            {Object.keys(builds[0]).map((key) => {
              return <TH key={key}>{key}</TH>;
            })}
          </TR>
        </THeader>
        <TBody>
          {builds.map((build) => {
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
          })}
        </TBody>
      </Table>
    </>
  );
}

export default App;
