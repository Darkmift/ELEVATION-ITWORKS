import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AdminRegister, FetchStatusState, Role } from "../../types"
import { loginThunk } from '../thunks/auth.thunk'

type AuthState = {
  admin: Omit<AdminRegister, 'role'> & { role: Role | null }
}

const initialState: AuthState & FetchStatusState = {
  admin: {
    username: '',
    firstName: '',
    lastName: '',
    role: null
  },
  loading: false,
  error: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAdmin(state, action: PayloadAction<AdminRegister>) {
      state.admin = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.loading = true
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.admin = action.payload
        state.loading = false
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.error = action.error.message || 'An error occurred'
        state.loading = false
      })
  }
})

export default authSlice.reducer
export const { setAdmin } = authSlice.actions;


//LOGIN FORM
// dispatch loginThunk->attemptLogin->fetch->login middleware->login controller->login service->login model
