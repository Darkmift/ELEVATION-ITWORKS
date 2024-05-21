import { createSlice } from "@reduxjs/toolkit";

function setThemeVars(theme: 'dark' | 'light') {
  let bgColor = 'white';
  if (theme === 'dark') {
    bgColor = 'black';
  }
  const root = document.querySelector(':root') as HTMLElement;
  root?.style.setProperty('background-color', bgColor);
}

type ThemeState = {
  isDarkMode: boolean;
  theme: 'dark' | 'light';
};

const initialState: ThemeState = {
  isDarkMode: false,
  theme: 'dark',
};

setThemeVars(initialState.theme);

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
      setThemeVars(state.isDarkMode ? 'dark' : 'light');
    },
    setTheme(state, action) {
      state.theme = action.payload;
      setThemeVars(action.payload);
    }
  }
});

// dispatch(setTheme('light'))
// dispatch(setTheme('dark'))

export const {
  toggleDarkMode,
  setTheme
} = themeSlice.actions;

export default themeSlice;