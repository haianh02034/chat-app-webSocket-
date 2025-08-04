import React, { createContext, useState, useContext, useEffect, useCallback } from 'react'; // Import useCallback
import authApi from '../api/auth';

interface AuthContextType {
  isLoggedIn: boolean;
  user: any | null;
  login: () => void;
  logout: () => void;
  checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<any | null>(null);

  const login = () => {
    console.log('AuthContext: User logged in.');
    setIsLoggedIn(true);
    // Optionally fetch user details here if not included in login response
  };

  const logout = async () => {
    console.log('AuthContext: Attempting to log out...');
    try {
      await authApi.post('/logout'); // Assuming a logout endpoint exists
      console.log('AuthContext: Backend logout successful.');
    } catch (error) {
      console.error('AuthContext: Logout failed:', error);
    }
    setIsLoggedIn(false);
    setUser(null);
    console.log('AuthContext: isLoggedIn set to false, user set to null.');
  };

  const checkAuth = useCallback(async () => { // Memoize checkAuth with useCallback
    console.log('AuthContext: Running checkAuth...');
    try {
      const response = await authApi.get('/me');
      if (response.status === 200 && response.data) {
        setIsLoggedIn(true);
        setUser(response.data);
        console.log('AuthContext: checkAuth successful, user is logged in.');
      } else {
        setIsLoggedIn(false);
        setUser(null);
        console.log('AuthContext: checkAuth failed, user is NOT logged in.');
      }
    } catch (error) {
      setIsLoggedIn(false);
      setUser(null);
      console.error('AuthContext: Authentication check failed:', error);
      console.log('AuthContext: checkAuth failed, user is NOT logged in (due to error).');
    }
  }, []); // Empty dependency array for useCallback, as it only depends on state setters

  useEffect(() => {
    console.log('AuthContext: useEffect triggered. Calling checkAuth.');
    checkAuth();
  }, [checkAuth]); // Now checkAuth is stable, so this won't loop

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
