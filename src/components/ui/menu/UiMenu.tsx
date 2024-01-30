import { ConfigProvider, Menu, MenuProps } from 'antd';
import React from 'react';

const UiMenu: React.FC<MenuProps> = (_props) => (
  <ConfigProvider
    theme={{
      components: {
        Menu: {
          groupTitleColor: '#121926',
          itemHoverBg: '#EDE7F6',
          itemSelectedColor: '#08A1F7',
          subMenuItemBg: '#fff',
          colorPrimary: '#08A1F7',
          controlItemBgActive: '#EDE7F6',
          groupTitleFontSize: 14,
        },
      },
    }}
  >
    <Menu {..._props} />
  </ConfigProvider>
);

export { UiMenu };
