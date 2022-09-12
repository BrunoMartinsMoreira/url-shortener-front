import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';

export const UrlsPage = (): JSX.Element => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = (): void => {
    auth.logout();
    navigate('/');
  };

  return (
    <div>
      <h2>Urls page</h2>
      <h3>Olá {auth.user?.name} </h3>
      <button onClick={handleLogout}>sair</button>
    </div>
  );
};
