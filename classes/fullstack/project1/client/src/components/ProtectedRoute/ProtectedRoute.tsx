import { Navigate } from 'react-router';
import { useAppSelector } from '../../store/hooks';
import { Outlet } from 'react-router-dom';

type ProtectedRouteProps = {
  redirectPath: string,
}

function ProtectedRoute({ redirectPath }: ProtectedRouteProps) {
  const { admin } = useAppSelector(state => state.authReducer)

  if (!admin.username) return <Navigate to={redirectPath} />;

  return <Outlet/>
}

export default ProtectedRoute;
