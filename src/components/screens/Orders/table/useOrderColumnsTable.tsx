import { Rate, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import clsx from 'clsx';
import { TOrdersItem } from 'src/services/orders/orders/orders.types';
import { formatEmptyValue } from 'src/utils';

export const useOrderColumnsTable = () => {
  const columns: ColumnsType<TOrdersItem> = [
    {
      title: 'Работник',
      dataIndex: 'worker',
      key: 'worker',
      render: (_, r) => formatEmptyValue(r.worker?.name),
    },
    {
      title: 'Сервис',
      dataIndex: 'service',
      key: 'service',
      render: (_, r) => r.service?.name,
    },
    {
      title: 'Статус',
      dataIndex: 'status',
      key: 'status',
      render: (_, r) => (
        <Tag
          color={clsx(
            r.status.name === 'активный' && 'blue',
            r.status.name === 'в процессе' && 'orange',
            r.status.name === 'завершенный' && 'green',
          )}
        >
          {r.status?.name}
        </Tag>
      ),
    },
    {
      title: 'Оценка',
      dataIndex: 'rating',
      key: 'rating',
      render: (value: number) => <Rate value={value} disabled />,
    },
  ];
  return columns;
};
