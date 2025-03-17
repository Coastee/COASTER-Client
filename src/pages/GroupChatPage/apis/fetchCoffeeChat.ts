import { tokenInstance } from "@/apis/instance";
import type { ChatListTypes } from "@/pages/GroupChatPage/types";

export const fetchCoffeeChat = async (serverId: number) => {
  const response = await tokenInstance
    .get<ChatListTypes>(`api/v1/servers/${serverId}/meetings?page=0&sort=name&scope=owner`)
    .json();

  return response.result;
};
