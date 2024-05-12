/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context';

export default function RouteGuard({ element }) {
  const authCtx = useContext(AuthContext);
  if (authCtx.isAuthenticated) {
    return element;
  }

  return <Navigate to="/login" />;
}
