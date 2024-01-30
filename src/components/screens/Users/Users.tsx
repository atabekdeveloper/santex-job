import React from 'react';

import { UserForm } from './form/UserForm';
import { UserTable } from './table/UserTable';

const Users: React.FC = () => (
  <>
    <UserForm />
    <UserTable />
  </>
);

export default Users;
