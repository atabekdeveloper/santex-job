import { Space } from 'antd';
import React from 'react';
import { useBreadcrumb } from 'src/hooks';

import s from './head.module.scss';

interface IHeadTable {
  title?: string;
  childs?: React.ReactNode[];
}

const HeadTable: React.FC<IHeadTable> = ({ childs, title }) => {
  const routes = useBreadcrumb();
  return (
    <div className={s.headTable}>
      <h3>{title || routes[routes.length - 1]?.label}</h3>
      <Space style={{ float: 'right' }}>
        {childs?.map((el, i) => (
          <div key={i}>{el}</div>
        ))}
      </Space>
    </div>
  );
};

export { HeadTable };
