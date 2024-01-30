import { api } from 'src/api';
// eslint-disable-next-line object-curly-newline
import { SR, SRO, TGetParamsChange, TMessage } from 'src/services/index.types';

import { TServiceChange, TServiceItem } from './services.types';

export const fetchGetServices = async (params?: TGetParamsChange): Promise<SR<TServiceItem>> => {
  const res = await api.get('/admin/services', {
    params: { limit: 10, page: params?.page },
  });
  return res.data;
};
export const fetchCreateService = async (values: TServiceChange): Promise<SRO<TServiceItem>> => {
  const res = await api.post('/admin/services', values);
  return res.data;
};
export const fetchEditService = async (values: TServiceChange): Promise<SRO<TServiceItem>> => {
  const res = await api.put(`/admin/services/${values.id}`, values);
  return res.data;
};
export const fetchDeleteService = async (id: number): Promise<TMessage> => {
  const res = await api.delete(`/admin/services/${id}`);
  return res.data;
};
