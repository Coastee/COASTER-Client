import type { GlobalMenuTypes } from "@/constants/serverInfo";
import { create } from "zustand";

interface GlobalMenuState {
  globalMenu: GlobalMenuTypes | null;
  actions: {
    setGlobalMenu: (menu: GlobalMenuTypes | null) => void;
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
