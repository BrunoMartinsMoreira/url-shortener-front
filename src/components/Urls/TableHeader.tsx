export const TaBleHeader = (): JSX.Element => {
  return (
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
  );
};
