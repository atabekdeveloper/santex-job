import { message } from 'antd';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { fetchGetBannerPositions, fetchSortBannerPosition } from './banner-positions.services';

const useGetBannerPositionsQuery = () =>
  // eslint-disable-next-line implicit-arrow-linebreak
  useQuery({
    queryFn: fetchGetBannerPositions,
    queryKey: ['banner-position'],
  });

const useSortBannerPositionMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchSortBannerPosition,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['banner'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

export { useGetBannerPositionsQuery, useSortBannerPositionMutation };
