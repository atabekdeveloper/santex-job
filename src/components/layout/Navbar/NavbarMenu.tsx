import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UiMenu } from 'src/components/ui';
import { useResponsive } from 'src/hooks';
import { useToggleStore } from 'src/store';

import { routes } from '../routes';

import s from './navbar.module.scss';

const NavbarMenu: React.FC = () => {
  const { isCollapsed, toggleDrawer } = useToggleStore();
  const { isMobile } = useResponsive(900);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <UiMenu
      className={s.navbarMenu}
      mode="inline"
      inlineCollapsed={!isMobile && isCollapsed}
      selectedKeys={[pathname]}
      onSelect={(e) => navigate(e.key)}
      onClick={() => isMobile && toggleDrawer()}
      items={routes?.filter((item: any) => (isCollapsed ? !item.type : item)) as any}
    />
  );
};

export { NavbarMenu };
