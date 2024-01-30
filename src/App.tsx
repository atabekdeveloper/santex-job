import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'src/components/layout/Layout';
import { AuthLogin } from 'src/components/screens/Auth/AuthLogin';
import { Privacy } from 'src/components/screens/Privacy/Privacy';
import { routes } from 'src/routes';

import 'src/assets/styles/App.scss';

const App: React.FC = () => (
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

export { App };
