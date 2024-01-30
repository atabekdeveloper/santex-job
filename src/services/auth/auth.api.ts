import { message } from 'antd';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { fetchAuthLogin, fetchAuthLogout, fetchGetAuth } from './auth.services';

const useGetAuthUserQuery = () =>
  // eslint-disable-next-line implicit-arrow-linebreak
  useQuery({
    queryFn: fetchGetAuth,
    queryKey: ['auth'],
  });

const useAuthLoginMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchAuthLogin,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['auth'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useAuthLogoutMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchAuthLogout,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['auth'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

export { useAuthLoginMutation, useAuthLogoutMutation, useGetAuthUserQuery };
