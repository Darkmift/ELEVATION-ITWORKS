import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { login } from '../utils/login-service';
import { setAdmin } from '../store/slices/auth.slice';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { admin } = useAppSelector((state) => state.authReducer);

  useEffect(() => {
    if (admin.username) {
      navigate('/home');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [admin.username]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const admin = await login(username, password);
    if (!admin?.username) {
      setError('user name or password is not correct');
      return;
    }
    dispatch(setAdmin(admin));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-darkBackground">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-darkCard p-6 rounded shadow-md w-80">
        <h2 className="text-2xl mb-4 text-gray-900 dark:text-darkText">Login</h2>
        <div className="mb-4">
          <label htmlFor='username' className="block text-gray-700 dark:text-darkText">username</label>
          <input
            data-testid='username'
            name='username'
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-1 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
            />
        </div>
        <div className="mb-4">
          <label htmlFor='password' className="block text-gray-700 dark:text-darkText">password</label>
          <input
            data-testid='password'
            name='password'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-1 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          />
        </div>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
