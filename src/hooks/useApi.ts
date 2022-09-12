/* eslint-disable @typescript-eslint/explicit-function-return-type */
import axios from 'axios';
import { loginResponse, validateTokenResponse } from '../types/User';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export const useApi = () => ({
  createAccount: async (name: string, email: string, password: string) => {
    const response = await api.post('/users', { name, email, password });
    return response.data;
  },

  signin: async (email: string, password: string): Promise<loginResponse> => {
    try {
      const response = await api.post('/users/auth', { email, password });
      return {
        status: response.status,
        data: response.data,
      };
    } catch (error: any) {
      const response = error.response;
      return {
        data: response.data.message,
        status: response.status,
      };
    }
  },

  validateToken: async (token: string): Promise<validateTokenResponse> => {
    try {
      const response = await api.post(
        '/users/validate-token',
        {},
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      );
      return {
        user: response.data,
      };
    } catch (error: any) {
      return error;
    }
  },
});
