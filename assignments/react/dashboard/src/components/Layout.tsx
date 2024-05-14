import  { FC, ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="dashboard-layout">
      <nav className="p-4 bg-gray-800 text-white">
        <Link to="/view-users" className="mr-4">View Users</Link>
        <Link to="/create-user" className="mr-4">Create User</Link>
        {isAuthenticated && <button onClick={handleLogout} className="bg-red-500 p-2 rounded">Logout</button>}
      </nav>
      <main className="p-4">{children}</main>
    </div>
  );
};

export default Layout;
