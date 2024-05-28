import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchBuildsPaginatedThunk } from '../../store/thunks/builds';
import { TBody, TD, TH, THeader, TR, Table } from '../Table/Table';

export default function BuildsTable() {
  const dispatch = useAppDispatch();
  const builds = useAppSelector((state) => state.buildReducer.buildsPage);

  const getPagintedBuilds = (page: number, limit: number, sort: 'asc' | 'desc') => {
    dispatch(fetchBuildsPaginatedThunk({ page, limit, sort }));
  };

  useEffect(() => {
    getPagintedBuilds(1, 10, 'asc');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const tableColumns = [
    {
      displayName: 'Status',
      dbName: 'status',
      width: '136px',
    },
    { displayName: 'Build Id', dbName: 'buildId', width: '160px' },
    { displayName: 'Caption', dbName: 'caption', width: '364px' },
    { displayName: 'Command', dbName: 'command', width: '364px' },
    { displayName: 'Start Time', dbName: 'startTime', width: '144px' },
    { displayName: 'End Time', dbName: 'endTime', width: '144px' },
    { displayName: 'Errors Number', dbName: 'errorsNumber', width: '144px' },
    { displayName: 'Warnings Number', dbName: 'warningsNumber', width: '168px' },
  ];

  return (
    <Table>
      <THeader>
        <TR rowType="header">
          {tableColumns.map((column) => {
            return (
              <TH key={column.dbName} classNames={`w-[${column.width}]`}>
                {column.displayName}
              </TH>
            );
          })}
        </TR>
      </THeader>
      <TBody>
        {builds.length === 0 ? (
          <TR>
            <td colSpan={builds.length}>Loading Table...</td>
          </TR>
        ) : (
          builds.map((build) => {
            return (
              <TR key={build.buildId}>
                {tableColumns.map((column) => {
                  return (
                    <TD
                      key={build.buildId + column.dbName}
                      classNames={`w-[${column.width}]`}
                      status={column.dbName === 'status' ? build.status : ''}
                    >
                      {build[column.dbName as keyof typeof build]}
                    </TD>
                  );
                })}
              </TR>
            );
          })
        )}
      </TBody>
    </Table>
  );
}
