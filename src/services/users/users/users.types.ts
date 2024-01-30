import { TRoleItemTypes } from 'src/services/index.types';

export type TUserItem = {
  id: number;
  name: string;
  phone: string;
  role_id: number;
  role_name: TRoleItemTypes;
  description: null | string;
};
export type TUserChange = {
  id?: number;
  name: string;
  phone: string;
  role_id: number;
  password: string;
  description: string;
};
