import { Popover, Tooltip } from 'antd';
import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { TbArrowsSort } from 'react-icons/tb';
import { HeadTable } from 'src/components/shareds';
import { UiButton, UiTable } from 'src/components/ui';
import { useGetBannerPositionsQuery, useGetBannersQuery } from 'src/services/index.api';
import { TBannerPositionItem } from 'src/services/services/banners/positions/banner-positions.types';
import { useFormStorageStore } from 'src/store';

import { BannerSortablePosition } from './BannerSortablePosition';
import { useBannerColumnsTable } from './useBannerColumnsTable';

const BannerTable: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const { data: banners, isLoading } = useGetBannersQuery({
    limit: 10,
    page: currentPage,
  });
  const { data: bannerPositions, isSuccess, isRefetching } = useGetBannerPositionsQuery();

  const [bannerList, setBannerList] = React.useState<TBannerPositionItem[]>([]);

  const toggleDrawer = useFormStorageStore((state) => state.toggleDrawer);
  const columns = useBannerColumnsTable({ banners: banners?.data });

  React.useEffect(() => {
    if (isSuccess) setBannerList(bannerPositions.data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isRefetching]);
  return (
    <UiTable
      dataSource={banners?.data}
      columns={columns}
      loading={isLoading}
      title={() => (
        <HeadTable
          childs={[
            <Tooltip title="Сортировать">
              <Popover
                trigger="click"
                placement="bottomRight"
                arrow={false}
                content={
                  // eslint-disable-next-line react/jsx-wrap-multilines
                  <BannerSortablePosition lists={bannerList} setList={setBannerList} />
                }
              >
                <UiButton color="#FF9D08" icon={<TbArrowsSort />} aria-label="Sort" />
              </Popover>
            </Tooltip>,
            <Tooltip title="Добавить">
              <UiButton icon={<AiOutlinePlus />} onClick={toggleDrawer} aria-label="Add" />
            </Tooltip>,
          ]}
        />
      )}
      pagination={{
        total: banners?.total,
        current: currentPage,
        onChange: (value) => setCurrentPage(value),
      }}
    />
  );
};

export { BannerTable };
