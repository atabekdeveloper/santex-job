// eslint-disable-next-line object-curly-newline
import { Image, Space, Tag, Tooltip } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { BiSolidEdit } from 'react-icons/bi';
import { RiDeleteBinLine } from 'react-icons/ri';
import { ApproveCheck, GlobalPopconfirm } from 'src/components/shareds';
import { UiButton } from 'src/components/ui';
import { useDeleteBannerMutation } from 'src/services/index.api';
import { TBannerItem } from 'src/services/services/banners/banners.types';
import { useFormStorageStore } from 'src/store';

interface TColumnsTable {
  banners?: TBannerItem[];
}

export const useBannerColumnsTable = (_props: TColumnsTable) => {
  const { banners } = _props;

  const { mutate: deleteBanner } = useDeleteBannerMutation();

  const setParamsForm = useFormStorageStore((state) => state.setParamsForm);

  const onEditBanner = (id: number) => {
    const findItem = banners?.find((service) => service.id === id);
    setParamsForm(findItem);
  };

  const columns: ColumnsType<TBannerItem> = [
    {
      title: 'Позиция',
      dataIndex: 'position',
      key: 'position',
      render: (value) => <Tag>{value + 1}</Tag>,
    },
    {
      title: 'Название',
      dataIndex: 'title',
      key: 'title',
      ellipsis: true,
    },
    {
      title: 'Описание',
      dataIndex: 'description',
      key: 'description',
      ellipsis: true,
    },
    {
      title: 'Сервис',
      dataIndex: 'service_name',
      key: 'service_name',
      ellipsis: true,
    },
    {
      title: 'Общественный',
      dataIndex: 'is_public',
      key: 'is_public',
      ellipsis: true,
      render: (value: boolean) => <ApproveCheck isValue={value} />,
    },
    {
      title: 'Изображение',
      dataIndex: 'image_url',
      key: 'image_url',
      ellipsis: true,
      render: (value) => <Image src={value} width={64} height={64} />,
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
              onClick={() => onEditBanner(r.id)}
              aria-label="Edit"
            />
          </Tooltip>
          <GlobalPopconfirm onConfirm={() => deleteBanner(r.id)} title={r.title}>
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
