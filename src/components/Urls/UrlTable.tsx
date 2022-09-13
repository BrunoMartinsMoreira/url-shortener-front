import { useCallback, useContext, useEffect } from 'react';
import { UrlContext } from '../../contexts/Urls/UrlsContext';
import { formatDate } from '../../helpers/dateHelper';

export const UrlsTable = (): JSX.Element => {
  const { getUserUrls, setUrls, urls } = useContext(UrlContext);

  const getUrlItems = useCallback(async (): Promise<void> => {
    const token = localStorage.getItem('authToken');
    if (token) {
      const data = await getUserUrls(token);
      setUrls(data);
    }
  }, []);

  useEffect(() => {
    getUrlItems();
  }, [urls]); // urls

  return (
    <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6 pl-10">
              Url encurtada
            </th>
            <th scope="col" className="py-3 px-6">
              Url original
            </th>
            <th scope="col" className="py-3 px-6">
              Data da Criação
            </th>
            <th scope="col" className="py-3 px-6">
              Numero de clicks
            </th>
            <th scope="col" className="py-3 px-6">
              Data do último click
            </th>
          </tr>
        </thead>
        <tbody>
          {urls.length > 0 &&
            urls.map((url) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={url.id}
              >
                <th
                  scope="row"
                  className="py-4 px-3 pl-10 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {url.short_url}
                </th>
                <td className="py-4 px-3">
                  {url.original_url.substring(0, 40)}...
                </td>
                <td className="py-4 px-3 text-center">
                  {formatDate(url.created_at)}
                </td>
                <td className="py-4 px-3 text-center">{url.clicks} </td>
                <td className="py-4 px-3 text-center">
                  {url.last_click_date != null
                    ? formatDate(url.last_click_date)
                    : '-'}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
