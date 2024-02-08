import React from 'react';
import { HeadTable } from 'src/components/shareds';
import { UiTable } from 'src/components/ui';
import { useGetOrdersQuery } from 'src/services/index.api';

import { useOrderColumnsTable } from './useOrderColumnsTable';

const OrderTable: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const { data: orders, isLoading } = useGetOrdersQuery({
    limit: 10,
    page: currentPage,
  });

  const columns = useOrderColumnsTable();
  return (
    <UiTable
      dataSource={orders?.data}
      columns={columns}
      loading={isLoading}
      title={() => <HeadTable title="Заказы" />}
      pagination={{
        total: orders?.total,
        current: currentPage,
        onChange: (value) => setCurrentPage(value),
      }}
    />
  );
};

export { OrderTable };
