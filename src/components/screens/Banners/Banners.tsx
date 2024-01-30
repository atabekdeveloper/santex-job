import React from 'react';

import { BannerForm } from './form/BannerForm';
import { BannerTable } from './table/BannerTable';

const Banners: React.FC = () => (
  <>
    <BannerForm />
    <BannerTable />
  </>
);

export default Banners;
