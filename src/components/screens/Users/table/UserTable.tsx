import { Select, Tooltip } from 'antd';
import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { HeadTable } from 'src/components/shareds';
import { UiButton, UiTable } from 'src/components/ui';
import { useGetRolesQuery, useGetUsersQuery } from 'src/services/index.api';
import { TRoleItemTypes } from 'src/services/index.types';
import { useFormStorageStore, useNumericStringVault } from 'src/store';

import { useUserColumnsTable } from './useUserColumnsTable';

const UserTable: React.FC = () => {
  const [role, setRole] = React.useState<TRoleItemTypes>('admin');
  const [currentPage, setCurrentPage] = React.useState(1);

  const { data: roles, isSuccess } = useGetRolesQuery();
  const { data: users, isLoading } = useGetUsersQuery(role, {
    limit: 10,
    page: currentPage,
  });

  const toggleDrawer = useFormStorageStore((state) => state.toggleDrawer);
  const setNumericStringVault = useNumericStringVault((state) => state.setNumericStringVault);

  const columns = useUserColumnsTable({ users: users?.data });

  React.useEffect(() => {
    if (isSuccess) {
      const findId = roles.data.find((roleName) => roleName.name === role);
      setNumericStringVault(Number(findId?.id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, role]);
  return (
    <UiTable
      dataSource={users?.data}
      columns={columns}
      loading={isLoading}
      title={() => (
        <HeadTable
          title="Пользователи"
          childs={[
            <Select
              value={role}
              onSelect={(value) => setRole(value)}
              style={{ width: 150 }}
              options={roles?.data.map(({ name, default_name }) => ({
                value: name,
                label: default_name,
              }))}
            />,
            <Tooltip title="Добавить">
              <UiButton icon={<AiOutlinePlus />} onClick={toggleDrawer} aria-label="Add" />
            </Tooltip>,
          ]}
        />
      )}
      pagination={{
        total: users?.total,
        current: currentPage,
        onChange: (value) => setCurrentPage(value),
      }}
    />
  );
};

export { UserTable };
