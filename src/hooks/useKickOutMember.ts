import { kickOutMember } from "@/apis";
import type { ChatRoom } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface UseKickoutMember {
  serverId: number;
  chatRoomType: ChatRoom;
  groupId: number;
  userId: number;
}

export const useKickoutMember = ({
  serverId,
  chatRoomType,
  groupId,
  userId,
}: UseKickoutMember) => {
  const queryClient = useQueryClient();
  const identifier =
    chatRoomType === "groups"
      ? "fetchSideGroupChatList"
      : chatRoomType === "meetings"
      ? "fetchSideCoffeeChatList"
      : undefined;

  return useMutation({
    mutationFn: () => kickOutMember(serverId, chatRoomType, groupId, userId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["chatMembers", serverId, groupId],
      });
    },
    onError: (error) => console.error("멤버 강퇴 실패", error),
  });
};
