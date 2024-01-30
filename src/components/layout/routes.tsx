import { FiShoppingCart, FiUsers } from 'react-icons/fi';
import { GoHome } from 'react-icons/go';
import { PiFlagBanner } from 'react-icons/pi';
import { TbSettingsBolt } from 'react-icons/tb';

export const routes = [
  {
    label: 'Home',
    type: 'group',
  },
  {
    key: '/',
    label: 'Главная',
    icon: <GoHome />,
  },
  {
    label: 'Users',
    type: 'group',
  },
  {
    key: '/users',
    label: 'Пользователи',
    icon: <FiUsers />,
  },
  {
    type: 'divider',
    style: { margin: '15px 0' },
  },
  {
    label: 'Services',
    type: 'group',
  },
  {
    key: '/services',
    label: 'Сервисы',
    icon: <TbSettingsBolt />,
  },
  {
    key: '/banners',
    label: 'Баннеры',
    icon: <PiFlagBanner />,
  },
  {
    label: 'Orders',
    type: 'group',
  },
  {
    key: '/orders',
    label: 'Заказы ',
    icon: <FiShoppingCart />,
  },
];
