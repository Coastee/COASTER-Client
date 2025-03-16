import { fetchGlobalChatLogs } from "@/pages/GlobalChatPage/apis/globalChat";
import { useQuery } from "@tanstack/react-query";

export const useGlobalChatLogs = (serverId: number | null) => {
  return useQuery({
    queryKey: ["dmLogs", serverId],
    queryFn: () => (serverId !== null ? fetchGlobalChatLogs(serverId) : Promise.reject("serverId is null")),
    enabled: !!serverId,
  });
};
