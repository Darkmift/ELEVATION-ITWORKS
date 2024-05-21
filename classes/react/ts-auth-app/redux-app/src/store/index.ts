import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slices/auth'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import themeSlice from './slices/theme';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    theme: themeSlice.reducer
  }
})

// store.subscribe(() => {

//   const { theme, isDarkMode } = store.getState().theme;
//   let bgColor = 'white';
//   if (theme === 'dark' || isDarkMode) {
//     bgColor = 'black';
//   }
//   const root = document.querySelector(':root');
//   root?.style.setProperty('background-color', bgColor)
// })

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();