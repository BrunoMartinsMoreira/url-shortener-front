import { useEffect, useState } from 'react';
import { useApi } from '../../hooks/useApi';
import {
  createAccount,
  error,
  loginResponse,
  UserLogin,
} from '../../types/User';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const [user, setUser] = useState<UserLogin | null>(null);
  const api = useApi();

  useEffect(() => {
    const getToken = async (): Promise<void> => {
      const token = localStorage.getItem('authToken');
      if (token != null) {
        await validateToken(token);
      }
    };
    getToken();
  }, []);

  const createAccount = async (
    name: string,
    email: string,
    password: string,
  ): Promise<createAccount | error> => {
    const res = await api.createAccount(name, email, password);
    return res;
  };

  const login = async (
    email: string,
    password: string,
  ): Promise<loginResponse> => {
    const res = await api.signin(email, password);
    const { user, token } = res.data;
    setUser(user);
    saveDataLocalStorage('authToken', token);
    return res;
  };

  const saveDataLocalStorage = (name: string, data: string): void => {
    localStorage.setItem(name, data);
  };

  const validateToken = async (token: string): Promise<void> => {
    const data = await api.validateToken(token);
    if (data.user != null) {
      setUser(data.user);
    }
  };

  const logout = (): void => {
    setUser(null);
    localStorage.removeItem('authToken');
  };

  return (
    <AuthContext.Provider
      value={{ user, createAccount, login, logout, validateToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};
