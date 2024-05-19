import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type User = { name: string };

type AuthContext = {
  user: User;
  isAuthenticated: boolean;
  login: ({ name }: User) => void;
  logout: () => void;
};

const initialContext: AuthContext = {
  user: { name: '' },
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
};

export const AuthContext = createContext<AuthContext>(initialContext);

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(initialContext.user);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const loginHandler = (user: User) => {
    setIsAuthenticated(true);
    setUser(user);
  };

  const logoutHandler = () => {
    setIsAuthenticated(false);
    setUser(initialContext.user);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login: loginHandler as () => void, logout: logoutHandler }}>
      {children}
    </AuthContext.Provider>
  );
}
