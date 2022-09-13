import { useCallback, useContext, useEffect } from 'react';
import { UrlContext } from '../../contexts/Urls/UrlsContext';
import copy from 'copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UrlItem } from './UrlItem';
import { TaBleHeader } from './TableHeader';

export const UrlsTable = (): JSX.Element => {
  const { getUserUrls, setUrls, urls } = useContext(UrlContext);

  const getUrlItems = useCallback(async (): Promise<void> => {
    const token = localStorage.getItem('authToken');
    if (token) {
      const data = await getUserUrls(token);
      setUrls(data);
    }
  }, []);

  const handleCopy = (url: string): void => {
    copy(url);
    toast.success('Url copiada!');
  };

  useEffect(() => {
    getUrlItems();
  }, [urls]);

  return (
    <>
      <ToastContainer />
      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <TaBleHeader />
          <tbody>
            {urls.length > 0 &&
              urls.map((url) => (
                <UrlItem
                  key={url.id}
                  short_url={url.short_url}
                  original_url={url.original_url}
                  created_at={url.created_at}
                  clicks={url.clicks}
                  last_click_date={url.last_click_date}
                  onClickHandle={handleCopy}
                />
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
