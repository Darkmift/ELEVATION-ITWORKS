import { FC, FormEvent, useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Login: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await login(username, password);
    } catch (e) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded-md">
        <div>
          <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-700">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          />
        </div>
        {error && <p className="mb-4 text-red-600">{error}</p>}
        <button type="submit" className="w-full p-2 text-white bg-blue-600 rounded-md">Login</button>
      </form>
    </div>
  );
};

export default Login;
