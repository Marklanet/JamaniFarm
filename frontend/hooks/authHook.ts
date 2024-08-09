import { useState, useEffect } from 'react';
import { loginUser, registerUser, getCurrentUser, logoutUser } from '../lib/appauth';

interface AuthState {
  isLogged: boolean;
  user: any;
  loading: boolean;
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    isLogged: false,
    user: null,
    loading: true,
  });

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await getCurrentUser();
        setAuthState({ isLogged: !!user, user, loading: false });
      } catch (error) {
        console.error('Error checking authentication:', error);
        setAuthState({ isLogged: false, user: null, loading: false });
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const user = await loginUser(email, password);
      setAuthState({ isLogged: true, user, loading: false });
      return user;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };

  const register = async (email: string, password: string, username: string) => {
    try {
      const user = await registerUser(email, password, username);
      setAuthState({ isLogged: true, user, loading: false });
      return user;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };

  const logout = async () => {
    await logoutUser();
    setAuthState({ isLogged: false, user: null, loading: false });
  };

  return { authState, login, register, logout };
};
