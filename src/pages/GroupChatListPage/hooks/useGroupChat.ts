import { fetchGroupChatRoomList } from "@/pages/GroupChatListPage/components/apis/groupChat";
import { useQuery } from "@tanstack/react-query";

export const useGroupChatListAll = (serverId: number) => {
  return useQuery({
    queryKey: ["groupChatList", serverId],
    queryFn: () => fetchGroupChatRoomList(serverId),
    enabled: !!serverId,
  });
};
