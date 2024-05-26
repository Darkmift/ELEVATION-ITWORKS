import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AdminRegister, Role } from "../../types"

type AuthState = {
  admin: Omit<AdminRegister, 'role'> & { role: Role | null }
}

const initialState: AuthState = {
  admin: {
    username: '',
    firstName: '',
    lastName: '',
    role: null
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