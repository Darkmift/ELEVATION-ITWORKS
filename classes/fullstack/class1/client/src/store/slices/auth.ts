import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { LoggedAdmin } from '../../types/Admin';

type AuthState = {
  isAuthenticated: boolean;
  admin: LoggedAdmin
}
const initialState: AuthState = {
  isAuthenticated: false,
  admin: {
    username: '',
    id: ''
  }
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAdmin(state: AuthState, action: PayloadAction<LoggedAdmin>) {
      state.admin = action.payload
      state.isAuthenticated = true
    },
    logout(state) {
      Object.assign(state, initialState)
    }
  },
})

// Action creators are generated for each case reducer function
export const { setAdmin, logout,
  //login
} = authSlice.actions

export default authSlice
