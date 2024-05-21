import { createSlice } from "@reduxjs/toolkit";

type User = { name: string };

type AuthState = {
  user: User;
  isAuthenticated: boolean;

};

const initialState: AuthState = {
  user: { name: '' },
  isAuthenticated: false,

};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = { name: '' };
    },
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice;