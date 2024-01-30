import { api } from 'src/api';
import { SR, TGetParamsChange } from 'src/services/index.types';

import { TStatusesItem } from './statuses.types';

export const fetchGetStatuses = async (params: TGetParamsChange): Promise<SR<TStatusesItem>> => {
  const res = await api.get('/admin/statuses', {
    params: { limit: 10, page: params.page },
  });
  return res.data;
};
