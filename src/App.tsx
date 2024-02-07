import React from 'react';
// eslint-disable-next-line object-curly-newline
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Layout } from 'src/components/layout/Layout';
import { AuthLogin } from 'src/components/screens/Auth/AuthLogin';
import { Privacy } from 'src/components/screens/Privacy/Privacy';
import { routes } from 'src/routes';

import { useAuthPersistStore } from './store';

import 'src/assets/styles/App.scss';

const App: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const token = useAuthPersistStore((state) => state.accessToken);

  React.useEffect(() => {
    if (token && pathname === '/login') {
      navigate('/');
    }
  }, [navigate, pathname, token]);
  return (
    <Routes>
      <Route path="/login" element={<AuthLogin />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/" element={<Layout />}>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  );
};

export { App };
