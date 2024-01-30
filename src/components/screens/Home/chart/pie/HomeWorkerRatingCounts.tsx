import React from 'react';
import { useGetStatisticsWorkersQuery } from 'src/services/statistics';

import { Pie } from '@ant-design/charts';

const HomeWorkerRatingCounts: React.FC = () => {
  const { data: workers } = useGetStatisticsWorkersQuery();
  const config = {
    data: workers?.data.filter((worker) => worker.rating_count),
    angleField: 'rating_count',
    colorField: 'name',
    label: {
      text: 'rating_count',
      style: {
        fontWeight: 'bold',
      },
    },
    legend: {
      color: {
        title: false,
        position: 'right',
        rowPadding: 5,
      },
    },
  };
  return <Pie {...config} />;
};

export { HomeWorkerRatingCounts };
