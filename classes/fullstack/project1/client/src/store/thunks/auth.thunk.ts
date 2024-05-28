import { attemptLogin } from "../../http/index";
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Admin } from "../../types";

// a thunk using attemptLogin

export const loginThunk = createAsyncThunk<
  Admin,
  { username: string, password: string },
  { rejectValue: Error }>(
    'auth/login',
    async ({ username, password }) => {
      return await attemptLogin(username, password)
    })
