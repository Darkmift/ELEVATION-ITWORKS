import React, { useEffect, useState } from 'react';
import { fetchUserService } from '../service/users';
import { useNavigate } from 'react-router-dom';
import UiButton from '../components/UiButton';
import { login } from '../store/slices/auth';
import { useAppDispatch, useAppSelector } from '../store';
export type Props = null;

function Login() {
  const [errMsg, setErrMsg] = useState('');
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const submitFormHandler = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();
    // const submitFormHandler = (event: React.FormEvent<LoginFormElement>): void => {
    const formData = new FormData(event.target as HTMLFormElement);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;
    if (!username?.length || !password?.length) {
      setErrMsg('Please fill in all fields');
      return;
    }

    try {
      const resultUser = await fetchUserService(username, password);
      setErrMsg('');
      dispatch(login(resultUser));
    } catch (error) {
      const typedError = error as Error;
      console.error(typedError);
      setErrMsg(typedError.message);
    }
  };

  return (
    <>
      <form onSubmit={submitFormHandler}>
        <input type="text" placeholder="Username" name="username" />
        <input type="password" placeholder="Password" name="password" />
        <UiButton style={{ backgroundColor: 'green' }} onClick={undefined} type="submit" text="Login" />
      </form>
      {errMsg?.length ? <p>{errMsg}</p> : ''}
    </>
  );
}

export default Login;
