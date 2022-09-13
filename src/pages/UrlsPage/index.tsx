import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateShortUrlForm } from '../../components/CreateShorUrlForm/Index';
import { UrlsTable } from '../../components/Urls/UrlTable';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { UrlProvider } from '../../contexts/Urls/UrlProvider';

export const UrlsPage = (): JSX.Element => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = (): void => {
    auth.logout();
    navigate('/');
  };

  return (
    <UrlProvider>
      <div className="w-[100vw]">
        <div className="flex justify-around items-center px-3 py-5  m-auto bg-gray-800 mb-5">
          <h3 className="text-slate-100">Olá {auth.user?.name} </h3>
          <button
            className="text-slate-100 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-6 rounded"
            onClick={handleLogout}
          >
            Sair
          </button>
        </div>
        <div className="w-[100vw]">
          <CreateShortUrlForm />
        </div>
        <UrlsTable />
      </div>
    </UrlProvider>
  );
};
