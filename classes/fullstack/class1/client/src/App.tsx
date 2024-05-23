import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import LoginForm from './components/LoginForm';
import DashboardPage from './pages/DashboardPage';
import ViewUsersPage from './pages/ViewUsersPage';
import CreateUserPage from './pages/CreateUserPage';
import EditUserPage from './pages/EditUserPage';
import './i18n';
import { useAppSelector } from './store';

interface GuardRouteProps {
  children: JSX.Element;
}

const GuardRoute: React.FC<GuardRouteProps> = ({ children }) => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App: React.FC = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route
            path="/"
            element={
              <GuardRoute>
                <DashboardPage />
              </GuardRoute>
            }
          >
            <Route path="view-users" element={<ViewUsersPage />} />
            <Route path="create-user" element={<CreateUserPage />} />
            <Route path="edit-user/:id" element={<EditUserPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
