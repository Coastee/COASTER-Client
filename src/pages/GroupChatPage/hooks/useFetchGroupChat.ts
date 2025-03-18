import { fetchGroupChat } from "@/pages/GroupChatPage/apis/fetchSideGroupChatList";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useFetchGroupChat = (serverId: number, scope: string) => {
  return useSuspenseQuery({
    queryKey: ["fetchGroupChatList", serverId, scope],
    queryFn: () => fetchGroupChat(serverId, scope),
  });
};
