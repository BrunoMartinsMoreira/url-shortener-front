/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import axios from 'axios';
import { UrlType } from '../types/Url';
import {
  createAccount,
  error,
  loginResponse,
  validateTokenResponse,
} from '../types/User';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export const useApi = () => ({
  createAccount: async (
    name: string,
    email: string,
    password: string,
  ): Promise<createAccount | error> => {
    try {
      const res = await api.post('/users', { name, email, password });
      return {
        status: res.status,
      };
    } catch (error: any) {
      const res = error.response;
      return {
        status: res.status,
        message: res.data.message,
      };
    }
  },

  signin: async (email: string, password: string): Promise<loginResponse> => {
    try {
      const res = await api.post('/users/auth', { email, password });
      return {
        status: res.status,
        data: res.data,
      };
    } catch (error: any) {
      const res = error.response;
      return {
        data: res.data.message,
        status: res.status,
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

  createUrl: async (original_url: string, token: string): Promise<UrlType> => {
    try {
      const res = await api.post(
        '/urls',
        { original_url },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      );

      return res.data;
    } catch (error: any) {
      return error.response;
    }
  },

  getUserUrls: async (token: string): Promise<UrlType[]> => {
    try {
      const res = await api.get('/urls', {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error: any) {
      const res = error.response;
      console.log(res);
      return res;
    }
  },
});
