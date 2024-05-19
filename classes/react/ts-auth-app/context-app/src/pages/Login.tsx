import React, { useContext, useState } from 'react';
import { fetchUserService } from '../service/users';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';
import UiButton from '../components/UiButton';
export type Props = null;

// interface LoginFormElements extends HTMLFormControlsCollection {
//   username: HTMLInputElement;
//   password: HTMLInputElement;
// }

// interface LoginFormElement extends HTMLFormElement {
//   readonly elements: LoginFormElements;
// }

/**
 * This is a Login component
 * @remark This is a remark
 * @param {Props} submitFormHandler - This is a submitFormHandler
 * @returns JSX.Elements
 */
function Login() {
  const [errMsg, setErrMsg] = useState('');

  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

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
      const result = await fetchUserService(username, password);
      setErrMsg('');
      authCtx.login(result);
      navigate('/');
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
        <UiButton
          style={{ backgroundColor: 'green' }}
          onClick={undefined}
          type="submit"
          text="Login"
        />
      </form>
      {errMsg?.length ? <p>{errMsg}</p> : ''}
    </>
  );
}

export default Login;
