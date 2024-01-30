import clsx from 'clsx';
import React from 'react';
import { ReactSortable } from 'react-sortablejs';
import { UiButton } from 'src/components/ui';
import { useSortBannerPositionMutation } from 'src/services/index.api';
import { TBannerPositionItem } from 'src/services/services/banners/positions/banner-positions.types';

import s from './table.module.scss';

interface TSortableOption {
  lists: TBannerPositionItem[];
  setList: React.Dispatch<React.SetStateAction<TBannerPositionItem[]>>;
}

const BannerSortablePosition: React.FC<TSortableOption> = ({ lists, setList }) => {
  const [listIndex, setListIndex] = React.useState<null | number>(null);
  const { mutate: editSortBanner, isPending } = useSortBannerPositionMutation();

  const onEditSortBanner = () => editSortBanner({ banners: lists.map((list) => list.id) });
  return (
    <>
      <ReactSortable
        className={s.items}
        filter=".addImageButtonContainer"
        dragClass="sortableDrag"
        list={lists}
        setList={setList}
        onStart={(e) => setListIndex(Number(e.oldIndex))}
        onEnd={() => setListIndex(null)}
        animation={200}
        easing="ease-out"
      >
        {lists?.map((list, i) => (
          <div key={list.id} className={clsx(s.item, listIndex === i && s.active)}>
            {`${i + 1}. ${list.title}`}
          </div>
        ))}
      </ReactSortable>
      <UiButton block onClick={onEditSortBanner} loading={isPending} aria-label="Save">
        Сохранить
      </UiButton>
    </>
  );
};

export { BannerSortablePosition };
