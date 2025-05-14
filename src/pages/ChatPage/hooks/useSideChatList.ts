import { fetchSideChatList } from "@/pages/ChatPage/apis/fetchSideChatList";
import type { ChatRoom } from "@/types";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useFetchSideChatList = (
  serverId: number,
  type: ChatRoom,
  scope: string
) => {
  const identifier =
    type === "groups"
      ? "fetchSideGroupChatList"
      : type === "meetings"
      ? "fetchSideCoffeeChatList"
      : undefined;

  return useSuspenseQuery({
    queryKey: [identifier, serverId, type, scope],
    queryFn: () => fetchSideChatList(serverId, type, scope),
  });
};
