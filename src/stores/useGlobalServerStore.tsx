import type { ServerInfoTypes } from "@/constants/serverInfo";
import { create } from "zustand";

interface GlobalServerState {
  globalServer: ServerInfoTypes | null;
  actions: {
    setGlobalServer: (menu: ServerInfoTypes | null) => void;
    resetGlobalServer: () => void;
  };
}

const useGlobalServerStore = create<GlobalServerState>((set) => ({
  globalServer: null,
  actions: {
    setGlobalServer: (server) => set({ globalServer: server }),
    resetGlobalServer: () => set({ globalServer: null }),
  },
}));

export const useGlobalServer = () => useGlobalServerStore((state) => state.globalServer);
export const useGlobalServerAction = () => useGlobalServerStore((state) => state.actions);
