import { Avatar, Popover } from 'antd';
import React from 'react';
import { FiSettings } from 'react-icons/fi';
import { useLocation, useNavigate } from 'react-router-dom';
import berry from 'src/assets/images/berry.svg';
import { UiMenu } from 'src/components/ui';
import { useAuthLogoutMutation, useGetAuthUserQuery } from 'src/services/index.api';
import { useAuthPersistStore } from 'src/store';

import { routes } from './routes';

import s from './header.module.scss';

const HeaderSetting: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const signOut = useAuthPersistStore((state) => state.signOut);
  const [open, setOpen] = React.useState(false);

  const { data: user } = useGetAuthUserQuery();
  const { mutate: logout } = useAuthLogoutMutation();

  const onLogout = () => {
    setTimeout(() => signOut(), 500);
    logout();
  };

  const onSelectMenuItem = (key: string) => {
    if (key === '/logout') {
      onLogout();
      return;
    }
    navigate(key);
    setOpen(false);
  };

  const content = (
    <div className={s.content}>
      <div className={s.title}>
        <h4>Доброе утро,</h4>
        <span>{user?.data.name}</span>
      </div>
      <h6>{user?.data.role_name}</h6>
      <div className={s.image}>
        <img src={berry} alt="Logo" />
      </div>
      <UiMenu
        mode="inline"
        items={routes}
        selectedKeys={[pathname]}
        onSelect={(e) => onSelectMenuItem(e.key)}
      />
    </div>
  );
  return (
    <Popover
      open={open}
      trigger="click"
      placement="bottomLeft"
      arrow={false}
      content={content}
      onOpenChange={setOpen}
    >
      <div className={s.setting}>
        <Avatar src={<img src={berry} alt="Logo" />} />
        <FiSettings />
      </div>
    </Popover>
  );
};

export { HeaderSetting };
