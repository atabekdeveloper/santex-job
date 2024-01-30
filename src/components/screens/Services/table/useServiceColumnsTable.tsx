import { Space, Tooltip } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { BiSolidEdit } from 'react-icons/bi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { GlobalPopconfirm } from 'src/components/shareds';
import { UiButton } from 'src/components/ui';
import { useDeleteServiceMutation } from 'src/services/index.api';
import { TServiceItem } from 'src/services/services/services/services.types';
import { useFormStorageStore } from 'src/store';

interface TColumnsTable {
  services?: TServiceItem[];
}

export const useServiceColumnsTable = (_props: TColumnsTable) => {
  const { services } = _props;

  const { mutate: deleteService } = useDeleteServiceMutation();

  const setParamsForm = useFormStorageStore((state) => state.setParamsForm);

  const onEditService = (id: number) => {
    const findItem = services?.find((service) => service.id === id);
    setParamsForm(findItem);
  };

  const columns: ColumnsType<TServiceItem> = [
    {
      title: 'Название',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Создано',
      dataIndex: 'created_at',
      key: 'created_at',
    },
    {
      title: 'Обновлено',
      dataIndex: 'updated_at',
      key: 'updated_at',
    },
    {
      fixed: 'right',
      key: 'action',
      align: 'end',
      width: 100,
      render: (_, r) => (
        <Space>
          <Tooltip title="Изменить">
            <UiButton
              color="#FFC108"
              icon={<BiSolidEdit />}
              onClick={() => onEditService(r.id)}
              aria-label="Edit"
            />
          </Tooltip>
          <GlobalPopconfirm onConfirm={() => deleteService(r.id)} title={r.name}>
            <Tooltip title="Удалить">
              <UiButton color="#FF5757" icon={<RiDeleteBinLine />} aria-label="Delete" />
            </Tooltip>
          </GlobalPopconfirm>
        </Space>
      ),
    },
  ];
  return columns;
};
