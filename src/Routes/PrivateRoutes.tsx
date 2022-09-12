import { useContext } from 'react';
import { AuthContext } from '../contexts/Auth/AuthContext';
import { Home } from '../pages/HomePage';

export const PrivateRoutes = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const auth = useContext(AuthContext);

  if (auth.user == null) {
    return <Home />;
  }

  return children;
};
