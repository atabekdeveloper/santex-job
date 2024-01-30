import { message } from 'antd';
import React from 'react';
import { useAuthPersistStore } from 'src/store';

interface IUseErrorNotification {
  isError: boolean;
  desc: string;
}
export const useErrorNotification = ({ desc, isError }: IUseErrorNotification) => {
  const signOut = useAuthPersistStore((state) => state.signOut);
  React.useEffect(() => {
    if (isError) {
      message.error(desc);
      signOut();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError]);
};
