import { exitChatRoom } from "@/components/DetailModal/apis/exitChatRoom";
import { useMutation } from "@tanstack/react-query";

export const useExitChatRoom = () => {
  return useMutation({
    mutationFn: ({ serverId, chatRoomType, groupId }: { serverId: number; chatRoomType: string; groupId: number }) =>
      exitChatRoom(serverId, chatRoomType, groupId),
  });
};
