import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { BuildCountWeekly, FetchStatusState } from '../../types';
import { fetchBuildGroupedByWeekThunk } from '../thunks/groupedbuilds';

type BuildState = {
  buildsPerWeek: BuildCountWeekly;
};

const initialState: BuildState & FetchStatusState = {
  buildsPerWeek: {},
  loading: false,
  error: null,
};

const groupedBuildSlice = createSlice({
  name: 'groupedbuild',
  initialState,
  reducers: {
    setBuildsPerWeek(state, action: PayloadAction<BuildCountWeekly>) {
      state.buildsPerWeek = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchBuildGroupedByWeekThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBuildGroupedByWeekThunk.fulfilled, (state, action) => {
        state.buildsPerWeek = action.payload;
        state.loading = false;
      })
      .addCase(fetchBuildGroupedByWeekThunk.rejected, (state, action) => {
        state.error = action.error.message || 'An error occurred';
        state.loading = false;
      });
  },
});

export const { setBuildsPerWeek } = groupedBuildSlice.actions;
export default groupedBuildSlice.reducer;
