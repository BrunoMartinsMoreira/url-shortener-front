import { useCallback, useContext, useEffect } from 'react';
import { UrlContext } from '../../contexts/Urls/UrlsContext';
import { formatDate } from '../../helpers/dateHelper';
import copy from 'copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    toast.success('Url copiada!', {
      position: 'top-right',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    getUrlItems();
  }, [urls]); // urls

  return (
    <>
      <ToastContainer />
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
                    className="py-4 px-3 pl-10 font-medium text-gray-900 whitespace-nowrap dark:text-white flex flex-center justify-between"
                  >
                    {url.short_url}
                    <button onClick={() => handleCopy(url.short_url)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        width="24"
                      >
                        <path d="M5 22q-.825 0-1.413-.587Q3 20.825 3 20V6h2v14h11v2Zm4-4q-.825 0-1.412-.587Q7 16.825 7 16V4q0-.825.588-1.413Q8.175 2 9 2h9q.825 0 1.413.587Q20 3.175 20 4v12q0 .825-.587 1.413Q18.825 18 18 18Zm0-2h9V4H9v12Zm0 0V4v12Z" />
                      </svg>
                    </button>
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
    </>
  );
};
