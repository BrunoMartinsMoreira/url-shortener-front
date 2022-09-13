import { createContext } from 'react';
import { UrlType } from '../../types/Url';

export interface UrlContextType {
  urls: UrlType[];
  setUrls: React.Dispatch<React.SetStateAction<UrlType[]>>;
  createUrl: (url: string, token: string) => Promise<UrlType>;
  getUserUrls: (token: string) => Promise<UrlType[]>;
}

export const UrlContext = createContext<UrlContextType>(null!);
