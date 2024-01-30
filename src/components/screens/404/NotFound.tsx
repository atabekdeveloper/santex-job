import { Result } from 'antd';
import React from 'react';
import berry from 'src/assets/images/santexnika.svg';

const NotFound: React.FC = () => (
  <Result
    title="Страница не найдена"
    style={{ margin: 'auto' }}
    icon={<img src={berry} alt="Logo" />}
  />
);

export default NotFound;
