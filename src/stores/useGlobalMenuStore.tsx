import type { MenuTypes } from "@/constants/menu";
import { create } from "zustand";

interface GlobalMenuState {
  globalMenu: MenuTypes | null;
  actions: {
    setGlobalMenu: (menu: MenuTypes | null) => void;
    resetGlobalMenu: () => void;
  };
}

const useGlobalMenuStore = create<GlobalMenuState>((set) => ({
  globalMenu: null,
  actions: {
    setGlobalMenu: (menu) => set({ globalMenu: menu }),
    resetGlobalMenu: () => set({ globalMenu: null }),
  },
}));

export const useGlobalMenu = () => useGlobalMenuStore((state) => state.globalMenu);
export const useGlobalMenuAction = () => useGlobalMenuStore((state) => state.actions);
