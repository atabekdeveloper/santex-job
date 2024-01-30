import { api } from 'src/api';
// eslint-disable-next-line object-curly-newline
import { SR, SRO, TGetParamsChange, TMessage } from 'src/services/index.types';

import { TBannerChange, TBannerItem } from './banners.types';

export const fetchGetBanners = async (params: TGetParamsChange): Promise<SR<TBannerItem>> => {
  const res = await api.get('/admin/banners', {
    params: { limit: 10, page: params.page },
  });
  return res.data;
};
export const fetchCreateBanner = async (values: TBannerChange): Promise<SRO<TBannerItem>> => {
  const res = await api.post('/admin/banners', values, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return res.data;
};
export const fetchEditBanner = async (values: TBannerChange): Promise<SRO<TBannerItem>> => {
  const res = await api.post(
    `/admin/banners/${values.id}`,
    { ...values, _method: 'PUT' },
    {
      headers: { 'Content-Type': 'multipart/form-data' },
    },
  );
  return res.data;
};
export const fetchDeleteBanner = async (id: number): Promise<TMessage> => {
  const res = await api.delete(`/admin/banners/${id}`);
  return res.data;
};
