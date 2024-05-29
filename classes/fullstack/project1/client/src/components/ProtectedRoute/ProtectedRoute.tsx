import { Navigate } from 'react-router';
import { useAppSelector } from '../../store/hooks';
import { Outlet } from 'react-router-dom';

type ProtectedRouteProps = {
  redirectPath: string,
}

function ProtectedRoute({ redirectPath }: ProtectedRouteProps) {
  const username  = useAppSelector(state => state.authReducer.admin.username)

  if (!username?.length) return <Navigate to={redirectPath} />;

  return <Outlet/>
}

export default ProtectedRoute;
