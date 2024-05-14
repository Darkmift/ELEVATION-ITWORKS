import { FC, ReactNode } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Login from './components/Login';
import ViewUsers from './pages/ViewUsers';
import CreateUser from './pages/CreateUser';
import EditUser from './pages/EditUser';

const PrivateRoute: FC<{ children: ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/view-users" element={<PrivateRoute><ViewUsers /></PrivateRoute>} />
      <Route path="/create-user" element={<PrivateRoute><CreateUser /></PrivateRoute>} />
      <Route path="/edit-user/:id" element={<PrivateRoute><EditUser /></PrivateRoute>} />
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRoutes;
