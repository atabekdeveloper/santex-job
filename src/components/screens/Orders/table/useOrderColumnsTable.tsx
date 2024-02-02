import { Rate, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import clsx from 'clsx';
import { TOrdersItem } from 'src/services/orders/orders/orders.types';
import { formatEmptyValue } from 'src/utils';

export const useOrderColumnsTable = () => {
  const columns: ColumnsType<TOrdersItem> = [
    {
      title: 'Телефон (Клиент)',
      dataIndex: 'phone',
      key: 'phone',
      ellipsis: true,
      render: (_, r) => formatEmptyValue(r.client?.phone),
    },
    {
      title: 'Работник',
      dataIndex: 'worker',
      key: 'worker',
      ellipsis: true,
      render: (_, r) => formatEmptyValue(r.worker?.name),
    },
    {
      title: 'Сервис',
      dataIndex: 'service',
      key: 'service',
      ellipsis: true,
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
      width: '170px',
      render: (value: number) => <Rate value={value} disabled />,
    },
    {
      title: 'Создано',
      dataIndex: 'created_at',
      key: 'created_at',
      ellipsis: true,
    },
    {
      title: 'Принято',
      dataIndex: 'started_at',
      key: 'started_at',
      ellipsis: true,
      render: (value) => formatEmptyValue(value),
    },
    {
      title: 'Закончено',
      dataIndex: 'finished_at',
      key: 'finished_at',
      ellipsis: true,
      render: (value) => formatEmptyValue(value),
    },
  ];
  return columns;
};
