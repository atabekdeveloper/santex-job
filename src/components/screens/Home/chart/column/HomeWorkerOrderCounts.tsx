import ReactECharts from 'echarts-for-react';
import React from 'react';
import { useGetStatisticsWorkersQuery } from 'src/services/statistics';

const HomeWorkerOrderCounts: React.FC = () => {
  const { data: workers } = useGetStatisticsWorkersQuery();
  const sortedWorkers = workers?.data
    .filter((worker) => worker.orders_count)
    .sort((a, b) => b.orders_count - a.orders_count);

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: sortedWorkers?.map((value) => value.name),
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'Количество',
        type: 'bar',
        barWidth: '60%',
        data: sortedWorkers?.map((value) => value.orders_count),
      },
    ],
  };
  return <ReactECharts option={option} />;
};

export { HomeWorkerOrderCounts };
