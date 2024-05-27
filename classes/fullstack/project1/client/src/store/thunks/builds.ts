import { createAsyncThunk } from '@reduxjs/toolkit'
import { Pagination } from '../../types/pagination'
import { getBuildsPaginated } from '../../http'
import { Build } from '../../types'

export const fetchBuildsPaginatedThunk = createAsyncThunk<
  Build[],
  Pagination, // Update the type of the argument here
  { rejectValue: Error }
>(
  'builds/fetchBuildsPaginated',
  async ({ limit, page, sort }: Pagination) => {
    return await getBuildsPaginated({ limit, page, sort })
  }
)