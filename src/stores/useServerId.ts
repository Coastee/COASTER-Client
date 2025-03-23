import { create } from "zustand";

type ServerStore = {
  serverId: number;
  actions: {
    setServerId: (id: number | null) => void;
  };
};

const useServerIdStore = create<ServerStore>((set) => ({
  serverId: 0,

  actions: {
    setServerId: (serverId: number | null) =>
      set({
        serverId: serverId ?? 0,
      }),
  },
}));

export const useServerId = () => useServerIdStore((state) => state.serverId);
export const useServerIdAction = () => useServerIdStore((state) => state.actions);
