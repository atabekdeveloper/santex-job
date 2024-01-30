import { TGetParamItem } from 'src/services/index.types';

export type TOrdersItem = {
  id: number;
  service: TGetParamItem;
  status: TGetParamItem;
  worker: TOrderInfo;
  client: TOrderInfo;
  rating: number;
  created_at: string;
  updated_at: string;
};
export type TOrderInfo = {
  id: number;
  name: string;
  phone: string;
};
