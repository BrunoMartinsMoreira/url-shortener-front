import { formatDate } from '../../helpers/dateHelper';

/* eslint-disable @typescript-eslint/naming-convention */
interface UrlItemProps {
  short_url: string;
  original_url: string;
  created_at: string;
  clicks: string | number;
  last_click_date: string;
  onClickHandle: (url: string) => void;
}

export const UrlItem = ({
  short_url,
  original_url,
  created_at,
  clicks,
  last_click_date,
  onClickHandle,
}: UrlItemProps): JSX.Element => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="py-4 px-3 pl-10 font-medium text-gray-900 whitespace-nowrap dark:text-white flex flex-center justify-between"
      >
        {short_url}
        <button onClick={() => onClickHandle(short_url)}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
            <path d="M5 22q-.825 0-1.413-.587Q3 20.825 3 20V6h2v14h11v2Zm4-4q-.825 0-1.412-.587Q7 16.825 7 16V4q0-.825.588-1.413Q8.175 2 9 2h9q.825 0 1.413.587Q20 3.175 20 4v12q0 .825-.587 1.413Q18.825 18 18 18Zm0-2h9V4H9v12Zm0 0V4v12Z" />
          </svg>
        </button>
      </th>
      <td className="py-4 px-3">{original_url.substring(0, 40)}...</td>
      <td className="py-4 px-3 text-center">{formatDate(created_at)}</td>
      <td className="py-4 px-3 text-center">{clicks} </td>
      <td className="py-4 px-3 text-center">
        {last_click_date ? formatDate(last_click_date) : '-'}
      </td>
    </tr>
  );
};
