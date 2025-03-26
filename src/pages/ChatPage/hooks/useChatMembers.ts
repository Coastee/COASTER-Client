import { fetchChatMembers } from "@/pages/ChatPage/apis/fetchChatMembers";
import { useQuery } from "@tanstack/react-query";

// 채팅 멤버 조회 API 훅
export const useFetchChatMembers = (serverId: number | null, type: "groups" | "meetings", roomId: number) => {
  return useQuery({
    queryKey: ["chatMembers", serverId, roomId],
    queryFn: () => (serverId !== null ? fetchChatMembers(serverId, type, roomId) : Promise.reject("serverId is null")),
    enabled: !!serverId,
  });
};
