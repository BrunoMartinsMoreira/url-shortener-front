import { createContext } from 'react';
import { createAccount, loginResponse, UserLogin } from '../../types/User';

export interface AuthContextType {
  user: UserLogin | null;
  createAccount: (
    name: string,
    email: string,
    password: string,
  ) => Promise<createAccount>;
  login: (email: string, password: string) => Promise<loginResponse>;
  logout: () => void;
  validateToken: (token: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>(null!);
