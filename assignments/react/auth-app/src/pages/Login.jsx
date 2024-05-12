/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUserService } from '../service/users';
import { AuthContext } from '../context';

export default function Login() {
  const { login } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');

    try {
      const user = await fetchUserService(username, password);
      if (user.name === 'bob') {
        login(user);
        navigate('/');
      }
    } catch (error) {
      console.error('??', error);
      setErrorMessage(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" name="username" />
        <input type="password" placeholder="Password" name="password" />
        <button type="submit">Login</button>
      </form>
      {errorMessage ? <p>{errorMessage}</p> : ''}
    </div>
  );
}
