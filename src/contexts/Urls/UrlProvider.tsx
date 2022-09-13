import { useState } from 'react';
import { useApi } from '../../hooks/useApi';
import { UrlType } from '../../types/Url';
import { UrlContext } from './UrlsContext';

export const UrlProvider = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const [urls, setUrls] = useState<UrlType[]>([]);
  const api = useApi();

  const createUrl = async (url: string, token: string): Promise<UrlType> => {
    try {
      const res = await api.createUrl(url, token);
      return res;
    } catch (error) {
      return error;
    }
  };

  const getUserUrls = async (token: string): Promise<UrlType[]> => {
    try {
      const res = await api.getUserUrls(token);
      return res;
    } catch (error) {}
  };

  return (
    <UrlContext.Provider value={{ createUrl, getUserUrls, setUrls, urls }}>
      {children}
    </UrlContext.Provider>
  );
};
