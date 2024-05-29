import { createAsyncThunk } from '@reduxjs/toolkit';
import { BuildCountWeekly } from '../../types';
import { getBuildGroupedByWeek } from '../../http';

export const fetchBuildGroupedByWeekThunk = createAsyncThunk<BuildCountWeekly, void, { rejectValue: Error }>(
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
