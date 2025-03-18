import { fetchGroupChatLogs } from "@/pages/GroupChatPage/apis/fetchGroupChatLogs";
import { useQuery } from "@tanstack/react-query";

// 채팅 로그 조회 API 훅
export const useFetchGroupChatLogs = (serverId: number | null, roomId: number) => {
  return useQuery({
    queryKey: ["groupChatLogs", serverId, roomId],
    queryFn: () => (serverId !== null ? fetchGroupChatLogs(serverId, roomId) : Promise.reject("serverId is null")),
    enabled: !!serverId,
  });
};
