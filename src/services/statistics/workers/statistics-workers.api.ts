import { useQuery } from '@tanstack/react-query';

import { fetchGetStatisticsWorkers } from './statistics-workers.services';

const useGetStatisticsWorkersQuery = () =>
  // eslint-disable-next-line implicit-arrow-linebreak
  useQuery({
    queryFn: fetchGetStatisticsWorkers,
    queryKey: ['statistics-workers'],
  });

export { useGetStatisticsWorkersQuery };
