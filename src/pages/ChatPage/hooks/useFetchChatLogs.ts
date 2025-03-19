import { fetchChatLogs } from "@/pages/ChatPage/apis/fetchChatLogs";
import { useQuery } from "@tanstack/react-query";

// 채팅 로그 조회 API 훅
export const useFetchChatLogs = (serverId: number | null, type: "groups" | "meetings", roomId: number) => {
  const identifier = type === "groups" ? "groupChatLogs" : type === "meetings" ? "coffeeChatLogs" : undefined;

  return useQuery({
    queryKey: [identifier, serverId, roomId],
    queryFn: () => (serverId !== null ? fetchChatLogs(serverId, type, roomId) : Promise.reject("serverId is null")),
    enabled: !!serverId,
  });
};
