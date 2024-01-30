import { message } from 'antd';
import { TGetParamsChange } from 'src/services/index.types';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  fetchCreateService,
  fetchDeleteService,
  fetchEditService,
  fetchGetServices,
} from './services.services';

const useGetServicesQuery = (params?: TGetParamsChange) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  useQuery({
    queryFn: () => fetchGetServices(params),
    queryKey: ['service', params?.page],
  });

const useCreateServiceMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchCreateService,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['service'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useEditServiceMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchEditService,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['service'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useDeleteServiceMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchDeleteService,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['service'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

export {
  useCreateServiceMutation,
  useDeleteServiceMutation,
  useEditServiceMutation,
  useGetServicesQuery,
};
