import clsx from 'clsx';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthPersistStore, useToggleStore } from 'src/store';

import { Header } from './Header/Header';
import { Navbar } from './Navbar/Navbar';

import s from './layout.module.scss';

const Layout: React.FC = () => {
  const token = useAuthPersistStore((state) => state.accessToken);
  const { isDrawer, isCollapsed } = useToggleStore();
  return (
    <div className={clsx(s.layout, !isDrawer && s.activeDrawer, isCollapsed && s.activeCollapsed)}>
      <Header />
      <Navbar />
      <main>{token ? <Outlet /> : <Navigate to="/login" />}</main>
    </div>
  );
};

export { Layout };
