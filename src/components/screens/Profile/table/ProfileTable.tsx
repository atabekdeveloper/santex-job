import React from 'react';
import { HeadTable } from 'src/components/shareds';
import { UiTable } from 'src/components/ui';
import { useGetAuthUserQuery } from 'src/services/index.api';

import { useProfileColumnsTable } from './useProfileColumnsTable';

const ProfileTable: React.FC = () => {
  const { data: profile, isLoading } = useGetAuthUserQuery();
  const columns = useProfileColumnsTable();
  return (
    <UiTable
      dataSource={[profile?.data]}
      columns={columns}
      loading={isLoading}
      title={() => <HeadTable title="Профиль" />}
      pagination={false}
    />
  );
};

export { ProfileTable };
