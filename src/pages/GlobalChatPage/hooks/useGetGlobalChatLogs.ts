import { fetchGlobalChatLogs } from "@/pages/GlobalChatPage/apis/globalChat";
import { useQuery } from "@tanstack/react-query";

// 채팅 로그 조회 API 훅
export const useGetGlobalChatLogs = (serverId: number | null) => {
  return useQuery({
    queryKey: ["dmLogs", serverId],
    queryFn: () => (serverId !== null ? fetchGlobalChatLogs(serverId) : Promise.reject("serverId is null")),
    enabled: !!serverId,
  });
};
