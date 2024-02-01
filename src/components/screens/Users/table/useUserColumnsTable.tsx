import { Space, Tooltip } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { BiSolidEdit } from 'react-icons/bi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { GlobalPopconfirm } from 'src/components/shareds';
import { UiButton } from 'src/components/ui';
import { useDeleteUserMutation } from 'src/services/index.api';
import { TUserItem } from 'src/services/users/users/users.types';
import { useFormStorageStore } from 'src/store';
import { formatEmptyValue } from 'src/utils';

interface TColumnsTable {
  users?: TUserItem[];
}

export const useUserColumnsTable = (_props: TColumnsTable) => {
  const { users } = _props;

  const { mutate: deleteUser } = useDeleteUserMutation();

  const setParamsForm = useFormStorageStore((state) => state.setParamsForm);

  const onEditUser = (id: number) => {
    const findItem = users?.find((user) => user.id === id);
    setParamsForm(findItem);
  };

  const columns: ColumnsType<TUserItem> = [
    {
      title: 'Ф.И.О',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Телефон',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Описание',
      dataIndex: 'description',
      key: 'description',
      render: formatEmptyValue,
    },
    {
      title: 'Создано',
      dataIndex: 'created_at',
      key: 'created_at',
      ellipsis: true,
    },
    {
      title: 'Обновлено',
      dataIndex: 'updated_at',
      key: 'updated_at',
      ellipsis: true,
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
              onClick={() => onEditUser(r.id)}
              aria-label="Edit"
            />
          </Tooltip>
          <GlobalPopconfirm onConfirm={() => deleteUser(r.id)} title={r.name}>
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
