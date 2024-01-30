import { useLocation } from 'react-router-dom';
import { routes } from 'src/components/layout/routes';

export const useBreadcrumb = () => {
  const { pathname } = useLocation();
  return pathname
    .split('/')
    .filter((el) => el)
    .map((el) => `/${el}`)
    .map((el) => routes.find((route) => route.key === el))
    .filter((el) => el);
};
