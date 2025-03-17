import { fetchCoffeeChat } from "@/pages/GroupChatPage/apis/fetchCoffeeChat";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export const useFetchCoffeeChat = () => {
  const { serverId } = useParams();

  return useSuspenseQuery({
    queryKey: ["fetchCoffeeChatList"],
    queryFn: () => fetchCoffeeChat(Number(serverId)),
  });
};
