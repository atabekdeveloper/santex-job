import { api } from 'src/api';
import { SR, TGetParamsChange } from 'src/services/index.types';

import { TOrdersItem } from './orders.types';

export const fetchGetOrders = async (params: TGetParamsChange): Promise<SR<TOrdersItem>> => {
  const res = await api.get('/admin/orders', {
    params: { limit: 10, page: params.page },
  });
  return res.data;
};
