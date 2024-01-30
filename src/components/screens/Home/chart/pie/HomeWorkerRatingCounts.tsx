import ReactECharts from 'echarts-for-react';
import React from 'react';
import { useGetStatisticsWorkersQuery } from 'src/services/statistics';

const HomeWorkerRatingCounts: React.FC = () => {
  const { data: workers } = useGetStatisticsWorkersQuery();
  const sortedWorkers = workers?.data
    .filter((el) => el.rating_count)
    .map((worker) => ({
      value: worker.rating_count,
      name: worker.name,
    }));
  const option = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    series: [
      {
        name: 'Рейтинг',
        type: 'pie',
        radius: '50%',
        data: sortedWorkers,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };
  return <ReactECharts option={option} />;
};

export { HomeWorkerRatingCounts };
