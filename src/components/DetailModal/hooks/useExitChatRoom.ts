import { exitChatRoom } from "@/components/DetailModal/apis/exitChatRoom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useExitChatRoom = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ serverId, chatRoomType, groupId }: { serverId: number; chatRoomType: string; groupId: number }) =>
      exitChatRoom(serverId, chatRoomType, groupId),

    onSuccess: (_, { serverId, chatRoomType }) => {
      const identifier = chatRoomType === "groups" ? "fetchSideGroupChatList" : "fetchSideCoffeeChatList";
      queryClient.invalidateQueries({ queryKey: [identifier, serverId].filter(Boolean) });
      if (chatRoomType === "meetings") {
        queryClient.invalidateQueries({ queryKey: ["schedule"] });
      }
    },
    onError: (error) => {
      console.error("채팅방 나가기 실패:", error);
    },
  });
};
