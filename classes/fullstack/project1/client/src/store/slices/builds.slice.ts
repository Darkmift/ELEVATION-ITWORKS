import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Build, FetchStatusState } from '../../types';
import { Pagination } from '../../types/pagination';
import { fetchBuildsPaginatedThunk } from '../thunks/builds';

type BuildState = {
  buildsPage: Build[];
  pagination: Pagination;
};

const initialState: BuildState & FetchStatusState = {
  buildsPage: [],
  pagination: {
    page: 0,
    limit: 0,
    sort: '',
  },
  loading: false,
  error: null,
};

const buildSlice = createSlice({
  name: 'build',
  initialState,
  reducers: {
    setBuilds(state, action: PayloadAction<BuildState>) {
      state.buildsPage = action.payload.buildsPage;
      state.pagination = action.payload.pagination;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchBuildsPaginatedThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBuildsPaginatedThunk.fulfilled, (state, action) => {
        state.buildsPage = action.payload;
        state.loading = false;
      })
      .addCase(fetchBuildsPaginatedThunk.rejected, (state, action) => {
        console.log('🚀 ~ builder.addCase ~ action:', action);
        state.error = action.error.message || 'An error occurred';
        state.loading = false;
      });
  },
});

export const { setBuilds } = buildSlice.actions;
export default buildSlice.reducer;
