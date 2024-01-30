import { message } from 'antd';
import { TGetParamsChange, TRoleItemTypes } from 'src/services/index.types';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

// eslint-disable-next-line object-curly-newline
import { fetchCreateUser, fetchDeleteUser, fetchEditUser, fetchGetUsers } from './users.services';

const useGetUsersQuery = (role: TRoleItemTypes, params: TGetParamsChange) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  useQuery({
    queryFn: () => fetchGetUsers(role, params),
    queryKey: ['user', role, ...Object.values(params)],
  });

const useCreateUserMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchCreateUser,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['user'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useEditUserMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchEditUser,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['user'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useDeleteUserMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchDeleteUser,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['user'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

// eslint-disable-next-line object-curly-newline
export { useCreateUserMutation, useDeleteUserMutation, useEditUserMutation, useGetUsersQuery };
