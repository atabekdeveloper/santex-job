import { TGetParamsChange } from 'src/services/index.types';

import { useQuery } from '@tanstack/react-query';

import { fetchGetStatuses } from './statuses.services';

const useGetStatusesQuery = (params: TGetParamsChange) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  useQuery({
    queryFn: () => fetchGetStatuses(params),
    queryKey: ['status', ...Object.values(params)],
  });

export { useGetStatusesQuery };
