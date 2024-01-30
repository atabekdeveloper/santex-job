import React from 'react';
import { useGetStatisticsWorkersQuery } from 'src/services/statistics';

import { Column } from '@ant-design/charts';

const HomeWorkerOrderCounts: React.FC = () => {
  const { data: workers } = useGetStatisticsWorkersQuery();
  const config = {
    data: workers?.data
      .sort((a, b) => b.orders_count - a.orders_count)
      .filter((worker) => worker.orders_count),
    xField: 'name',
    yField: 'orders_count',
    barWidthRatio: 0.8,
    label: {
      text: (d: any) => d.orders_count,
      textBaseline: 'bottom',
    },
    meta: {
      name: {
        alias: 'Имя',
      },
      orders_count: {
        alias: 'Заказы',
      },
    },
  };
  return <Column {...config} />;
};

export { HomeWorkerOrderCounts };
