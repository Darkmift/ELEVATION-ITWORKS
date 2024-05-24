import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Admin } from "../../types"

type InitialState = Pick<Admin, 'username'>

const initialState: InitialState = {
  username: ''
}

const authSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setAdmin(state, action: PayloadAction<Admin>) {
      state.username = action.payload.username
    }
  }
})

export default authSlice.reducer
export const { setAdmin } = authSlice.actions;