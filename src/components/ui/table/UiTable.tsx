import { ConfigProvider, Table, TableProps } from 'antd';
import React from 'react';
import uniqid from 'uniqid';

const UiTable: React.FC<TableProps<any>> = (_props) => (
  <ConfigProvider theme={{ components: { Table: { headerBg: '#fff' } } }}>
    <Table
      rowKey={() => uniqid()}
      scroll={{ x: 1000 }}
      pagination={{ position: ['bottomCenter'] }}
      {..._props}
    />
  </ConfigProvider>
);

export { UiTable };
