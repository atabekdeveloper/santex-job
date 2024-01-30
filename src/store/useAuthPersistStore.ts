import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ITokens {
  accessToken: string | null;
}

interface IAuthPerisistState {
  accessToken: ITokens['accessToken'];
  signIn: (tokens: { accessToken: string }) => void;
  signOut: () => void;
}

export const useAuthPersistStore = create(
  persist<IAuthPerisistState>(
    (set) => ({
      accessToken: null,
      signIn: ({ accessToken }) => set({ accessToken }),
      signOut: () => set({ accessToken: null }),
    }),
    {
      name: 'token',
    },
  ),
);
