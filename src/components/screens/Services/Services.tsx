import React from 'react';

import { ServiceForm } from './form/ServiceForm';
import { ServiceTable } from './table/ServiceTable';

const Services: React.FC = () => (
  <>
    <ServiceForm />
    <ServiceTable />
  </>
);

export default Services;
