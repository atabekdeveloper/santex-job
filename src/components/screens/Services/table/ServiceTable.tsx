import { Tooltip } from 'antd';
import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { HeadTable } from 'src/components/shareds';
import { UiButton, UiTable } from 'src/components/ui';
import { useGetServicesQuery } from 'src/services/index.api';
import { useFormStorageStore } from 'src/store';

import { useServiceColumnsTable } from './useServiceColumnsTable';

const ServiceTable: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const { data: services, isLoading } = useGetServicesQuery({
    limit: 10,
    page: currentPage,
  });

  const toggleDrawer = useFormStorageStore((state) => state.toggleDrawer);
  const columns = useServiceColumnsTable({ services: services?.data });
  return (
    <UiTable
      dataSource={services?.data}
      columns={columns}
      loading={isLoading}
      title={() => (
        <HeadTable
          title="Сервисы"
          childs={[
            <Tooltip title="Добавить">
              <UiButton icon={<AiOutlinePlus />} onClick={toggleDrawer} aria-label="Add" />
            </Tooltip>,
          ]}
        />
      )}
      pagination={{
        total: services?.total,
        current: currentPage,
        onChange: (value) => setCurrentPage(value),
      }}
    />
  );
};

export { ServiceTable };
