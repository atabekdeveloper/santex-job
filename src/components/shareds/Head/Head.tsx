import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { FiChevronRight } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { useBreadcrumb } from 'src/hooks';

import s from './head.module.scss';

const Head: React.FC = () => {
  const routes = useBreadcrumb();
  const navigate = useNavigate();
  return (
    <div className={s.head}>
      <h3>{routes[routes.length - 1]?.label}</h3>
      <div className={s.breadcrumb}>
        <AiFillHome className={s.home} onClick={() => navigate('/')} />
        <ul className={s.items}>
          <FiChevronRight className={s.arrow} />
          {routes?.map((route) => (
            <li key={route?.key} className={s.item}>
              <Link to={`${route?.key}`}>{route?.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { Head };
