import { api } from 'src/api';
import { SR } from 'src/services/index.types';

import { TStatisticsWorkerItem } from './statistics-workers.types';

export const fetchGetStatisticsWorkers = async (): Promise<SR<TStatisticsWorkerItem>> => {
  const res = await api.get('/admin/home');
  return res.data;
};
