import { enterChatRoom } from "@/components/DetailModal/apis/enterChatRoom";
import { useMutation } from "@tanstack/react-query";

export const useEnterChatRoom = () => {
  return useMutation({
    mutationFn: ({ serverId, chatRoomType, groupId }: { serverId: number; chatRoomType: string; groupId: number }) =>
      enterChatRoom(serverId, chatRoomType, groupId),
  });
};
