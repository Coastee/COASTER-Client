import { useMyServerList } from "@/components/ServerHeader/hooks/useServerList";
import { create } from "zustand";

type ServerStore = {
  serverId: number | null;
  actions: {
    setServerId: (id: number | null) => void;
  };
};

const server = useMyServerList();

const useServerIdStore = create<ServerStore>((set) => ({
  serverId: Number(server.data?.result.serverList[0].id),

  actions: {
    setServerId: (serverId: number | null) =>
      set({
        serverId,
      }),
  },
}));

export const useServerId = () => useServerIdStore((state) => state.serverId);
export const useServerIdAction = () => useServerIdStore((state) => state.actions);
