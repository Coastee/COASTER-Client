import { fetchGroupChat } from "@/pages/GroupChatPage/apis/fetchGroupChat";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export const useFetchGroupChat = () => {
  const { serverId } = useParams();

  return useSuspenseQuery({
    queryKey: ["fetchGroupChatList"],
    queryFn: () => fetchGroupChat(Number(serverId)),
  });
};
