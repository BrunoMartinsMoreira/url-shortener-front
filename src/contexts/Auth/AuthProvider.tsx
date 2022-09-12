import { useEffect, useState } from 'react';
import { useApi } from '../../hooks/useApi';
import { loginResponse, UserLogin } from '../../types/User';
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
      const storageData = localStorage.getItem('authToken');
      if (storageData != null) {
        const data = await api.validateToken(storageData);

        if (data.user != null) {
          setUser(data.user);
        }
      }
    };
    getToken();
  }, []);

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

  const logout = (): void => {
    setUser(null);
    localStorage.removeItem('authToken');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
