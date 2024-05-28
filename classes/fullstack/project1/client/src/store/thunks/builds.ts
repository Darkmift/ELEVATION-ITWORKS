import { createAsyncThunk } from '@reduxjs/toolkit';
import { Pagination } from '../../types/pagination';
import { getBuildGroupedByWeek, getBuildsPaginated } from '../../http';
import { Build, BuildCountWeekly } from '../../types';

export const fetchBuildsPaginatedThunk = createAsyncThunk<
  Build[],
  Pagination, // Update the type of the argument here
  { rejectValue: Error }
>('builds/fetchBuildsPaginated', async ({ limit, page, sort }: Pagination) => {
  return await getBuildsPaginated({ limit, page, sort });
});

export const fetchBuildGroupedByWeekThunk = createAsyncThunk<BuildCountWeekly, { rejectValue: Error }>(
  'builds/fetchBuildGroupedByWeek',
  async () => {
    const result = await getBuildGroupedByWeek();
    console.log("getBuildGroupedByWeek", result);

    return result;
  }
);
