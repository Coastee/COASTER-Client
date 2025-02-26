import type { GlobalMenuTypes } from "@/constants/serverInfo";
import { create } from "zustand";

interface GlobalMenuState {
  selectedGlobalMenu: GlobalMenuTypes | undefined;
  setSelectedGlobalMenu: (menu: GlobalMenuTypes | undefined) => void;
}

const useGlobalMenuStore = create<GlobalMenuState>((set) => ({
  selectedGlobalMenu: undefined,
  setSelectedGlobalMenu: (menu) => set({ selectedGlobalMenu: menu }),
}));

export default useGlobalMenuStore;
