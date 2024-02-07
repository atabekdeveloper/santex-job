import { TableLoader } from 'src/components/shareds';

import loadable from '@loadable/component';

const Home = loadable(() => import('src/components/screens/Home/Home'), {
  fallback: <TableLoader />,
});
const Profile = loadable(() => import('src/components/screens/Profile/Profile'), {
  fallback: <TableLoader />,
});
const Users = loadable(() => import('src/components/screens/Users/Users'), {
  fallback: <TableLoader />,
});
const Services = loadable(() => import('src/components/screens/Services/Services'), {
  fallback: <TableLoader />,
});
const Banners = loadable(() => import('src/components/screens/Banners/Banners'), {
  fallback: <TableLoader />,
});
const Orders = loadable(() => import('src/components/screens/Orders/Orders'), {
  fallback: <TableLoader />,
});
const NotFound = loadable(() => import('src/components/screens/404/NotFound'), {
  fallback: <TableLoader />,
});

const routes = [
  { path: '/', element: <Home /> },
  { path: '/profile', element: <Profile /> },
  { path: '/users', element: <Users /> },
  { path: '/services', element: <Services /> },
  { path: '/banners', element: <Banners /> },
  { path: '/orders', element: <Orders /> },
  { path: '*', element: <NotFound /> },
];

export { routes };
