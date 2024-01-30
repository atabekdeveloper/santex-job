import { api } from 'src/api';
import { SR, SRO } from 'src/services/index.types';

import { TBannerPositionChange, TBannerPositionItem } from './banner-positions.types';

export const fetchGetBannerPositions = async (): Promise<SR<TBannerPositionItem>> => {
  const res = await api.get('/admin/position/banners');
  return res.data;
};
export const fetchSortBannerPosition = async (
  values: TBannerPositionChange,
): Promise<SRO<TBannerPositionItem>> => {
  const res = await api.post('/admin/position/banners', values);
  return res.data;
};
