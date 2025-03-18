import { fetchCoffeeChatList } from "@/pages/CoffeeChatListPage/apis/fetchGroupChatList";
import { useQuery } from "@tanstack/react-query";

export const useFetchCoffeeChatList = (serverId: number) => {
  return useQuery({
    queryKey: ["coffeeChatList", serverId],
    queryFn: () => fetchCoffeeChatList(serverId),
    enabled: !!serverId,
  });
};
