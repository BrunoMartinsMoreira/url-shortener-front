/* eslint-disable react/react-in-jsx-scope */
import { Route, Routes } from 'react-router-dom';
import { CreateAccount } from '../pages/CreateAccountPage';
import { Home } from '../pages/HomePage';
import { UrlsPage } from '../pages/UrlsPage';
import { PrivateRoutes } from './PrivateRoutes';

export const AppRoutes = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-accout" element={<CreateAccount />} />
        <Route
          path="/urls"
          element={
            <PrivateRoutes>
              <UrlsPage />
            </PrivateRoutes>
          }
        />
      </Routes>
    </>
  );
};
