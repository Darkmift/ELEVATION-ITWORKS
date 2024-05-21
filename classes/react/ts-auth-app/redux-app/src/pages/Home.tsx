import UiButton from '../components/UiButton';
import UiTitle from '../components/UiTitle';
import { useAppDispatch, useAppSelector } from '../store';
import { logout } from '../store/slices/auth';
import { setTheme, toggleDarkMode } from '../store/slices/theme';

function Home() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const theme = useAppSelector((state) => state.theme.theme);

  const logoutHandler = () => {
    dispatch(logout());
  };

  const toggleThemeHandler = (theme: string) => {
    dispatch(setTheme(theme));
  };

  const toggleDarkModeHandler = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div>
      {theme === 'dark' ? (
        <UiButton text="set light" onClick={() => toggleThemeHandler('light')} />
      ) : (
        <UiButton text="set dark" onClick={() => toggleThemeHandler('dark')} />
      )}
      <UiButton text="toggle dark mode" onClick={toggleDarkModeHandler} />
      <UiTitle>Home</UiTitle>
      <UiTitle>{'Hello ' + user.name}</UiTitle>
      <UiButton style={{ backgroundColor: 'green' }} onClick={logoutHandler} text="Logout" />
    </div>
  );
}

export default Home;

// calls http server get login result
// function makeLoginHttpCall(username: string, password: string) {}

// const dispatch = (foo: any) => {};
// const login = (any: any) => {};
// export const submitLoginFormHanlder = async (username: string, password: string) => {
//   const result = await makeLoginHttpCall(username, password);
//   dispatch(login(result));
// };
// export const submitLoginFormHanlderWithThunk = (username: string, password: string) => {
//   dispatch(login({ username, password }));
// };
