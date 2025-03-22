import { fetchGroupChatList } from "@/pages/GroupChatListPage/apis/fetchGroupChatList";
import { useQuery } from "@tanstack/react-query";

export const useFetchGroupChatList = (serverId: number) => {
  return useQuery({
    queryKey: ["groupChatList", serverId],
    queryFn: () => fetchGroupChatList(serverId),
    enabled: !!serverId,
  });
};
