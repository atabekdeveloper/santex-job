import { message } from 'antd';
import { TGetParamsChange } from 'src/services/index.types';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  fetchCreateBanner,
  fetchDeleteBanner,
  fetchEditBanner,
  fetchGetBanners,
} from './banners.services';

const useGetBannersQuery = (params: TGetParamsChange) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  useQuery({
    queryFn: () => fetchGetBanners(params),
    queryKey: ['banner', ...Object.values(params)],
  });

const useCreateBannerMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchCreateBanner,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['banner'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useEditBannerMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchEditBanner,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['banner'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useDeleteBannerMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchDeleteBanner,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['banner'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

export {
  useCreateBannerMutation,
  useDeleteBannerMutation,
  useEditBannerMutation,
  useGetBannersQuery,
};
