import { createAsyncThunk } from '@reduxjs/toolkit';
import { getBuildGroupedByWeek } from '../../http';
import { BuildCountWeekly } from '../../types';

export const fetchBuildGroupedByWeekThunk = createAsyncThunk<BuildCountWeekly, { rejectValue: Error }>(
  'builds/fetchBuildGroupedByWeek',
  async () => {
    try {
      const result = await getBuildGroupedByWeek();
      return result;
    } catch (error) {
      console.log(error);
    }
    return {};
  }
);
