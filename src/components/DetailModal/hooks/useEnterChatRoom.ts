import { enterChatRoom } from "@/components/DetailModal/apis/enterChatRoom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useEnterChatRoom = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ serverId, chatRoomType, groupId }: { serverId: number; chatRoomType: string; groupId: number }) =>
      enterChatRoom(serverId, chatRoomType, groupId),
    onSuccess: (_, { chatRoomType }) => {
      if (chatRoomType === "meetings") {
        queryClient.invalidateQueries({ queryKey: ["schedule"] });
      }
    },
  });
};
