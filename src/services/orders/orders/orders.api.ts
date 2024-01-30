import { TGetParamsChange } from 'src/services/index.types';

import { useQuery } from '@tanstack/react-query';

import { fetchGetOrders } from './orders.services';

const useGetOrdersQuery = (params: TGetParamsChange) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  useQuery({
    queryFn: () => fetchGetOrders(params),
    queryKey: ['order', ...Object.values(params)],
  });

export { useGetOrdersQuery };
