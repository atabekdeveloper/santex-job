import { create } from 'zustand';

interface IToggleState {
  isDrawer: boolean;
  isModal: boolean;
  isNavbar: boolean;
  isCollapsed: boolean;
  isMenu: boolean;
  toggleDrawer: () => void;
  toggleModal: () => void;
  toggleNavbar: () => void;
  toggleMenu: () => void;
  toggleCollapsed: () => void;
}

export const useToggleStore = create<IToggleState>((set) => ({
  isDrawer: true,
  isCollapsed: false,
  isModal: false,
  isMenu: false,
  isNavbar: false,
  toggleDrawer: () => set((state) => ({ isDrawer: !state.isDrawer })),
  toggleModal: () => set((state) => ({ isModal: !state.isModal })),
  toggleNavbar: () => set((state) => ({ isNavbar: !state.isNavbar })),
  toggleMenu: () => set((state) => ({ isMenu: !state.isMenu })),
  toggleCollapsed: () => set((state) => ({ isCollapsed: !state.isCollapsed })),
}));
