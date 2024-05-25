import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AdminRegister, Role } from "../../types"

type AuthState = {
  admin: AdminRegister
}

const initialState: AuthState = {
  admin: {
    username: '',
    firstName: '',
    lastName: '',
    role: Role.THREE,
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAdmin(state, action: PayloadAction<AdminRegister>) {
      state.admin = action.payload
    }
  }
})

export default authSlice.reducer
export const { setAdmin } = authSlice.actions;