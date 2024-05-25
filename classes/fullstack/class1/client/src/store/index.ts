import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/auth'
import { usersSlice } from './slices/users'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    users: usersSlice.reducer
  },
})


export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();