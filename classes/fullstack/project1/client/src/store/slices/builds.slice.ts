import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Build, BuildCountWeekly } from "../../types"
import { Pagination } from "../../types/pagination"

type BuildState = {
  buildsPage: Build[],
  pagination: Pagination,
  buildsPerWeek: BuildCountWeekly,
}

const initialState: BuildState = {
  buildsPage: [],
  pagination: {
    page: 0,
    limit: 0,
    sort: ''
  },
  buildsPerWeek: {},
}

const buildSlice = createSlice({
  name: 'build',
  initialState,
  reducers: {
    setBuilds(state, action: PayloadAction<Omit<BuildState, 'buildsPerWeek'>>) {
      state.buildsPage = action.payload.buildsPage
      state.pagination = action.payload.pagination
    },
    setBuildsPerWeek(state, action: PayloadAction<BuildCountWeekly>) {
      state.buildsPerWeek = action.payload
    }
  }
})

export const { setBuilds, setBuildsPerWeek } = buildSlice.actions
export default buildSlice.reducer