import { ConfigProvider } from 'antd';
import React from 'react';

const AntdProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ConfigProvider theme={{ token: { colorPrimary: '#7D5DFE' } }}>{children}</ConfigProvider>
);

export { AntdProvider };
