import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute: React.FC = () => {
  const { isLoggedIn, user, checkAuth } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyAuth = async () => {
      console.log('PrivateRoute: Verifying authentication...');
      await checkAuth();
      setLoading(false);
      console.log('PrivateRoute: Authentication verification complete. Loading set to false.');
    };
    verifyAuth();
  }, [checkAuth]);

  console.log('PrivateRoute: Rendered. isLoggedIn:', isLoggedIn, 'Loading:', loading);

  if (loading) {
    return <div>Loading authentication...</div>; // Or a more sophisticated loading spinner
  }

  if (!isLoggedIn) {
    console.log('PrivateRoute: User is not logged in. Redirecting to /login.');
  }

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
