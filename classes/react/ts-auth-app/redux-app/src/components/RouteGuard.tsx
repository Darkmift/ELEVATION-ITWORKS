import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../store';

export default function RouteGuard({ element }: { element: JSX.Element }) {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  if (isAuthenticated) {
    return element;
  }

  return <Navigate to="/login" />;
}
