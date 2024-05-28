import { configureStore } from '@reduxjs/toolkit';

import buildReducer from './slices/builds.slice';
import authReducer from './slices/auth.slice';
import groupedReducer from './slices/groupedbuilds.slice';

const store = configureStore({
  reducer: {
    authReducer,
    buildReducer,
    groupedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
