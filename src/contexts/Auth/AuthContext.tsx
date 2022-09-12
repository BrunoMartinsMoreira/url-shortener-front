/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createContext } from 'react';
import { loginResponse, UserLogin } from '../../types/User';

export interface AuthContextType {
  user: UserLogin | null;
  login: (email: string, password: string) => Promise<loginResponse>;
  logout: () => void;
  validateToken: (token: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>(null!);
