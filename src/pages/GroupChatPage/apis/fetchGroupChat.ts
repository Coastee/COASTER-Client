import { tokenInstance } from "@/apis/instance";
import type { ChatListTypes } from "@/pages/GroupChatPage/types";

// 참여한 그룹챗 조회
export const fetchGroupChat = async (serverId: number) => {
  const response = await tokenInstance
    .get<ChatListTypes>(`api/v1/servers/${serverId}/groups?page=0&sort=name&scope=owner`)
    .json();

  return response.result;
};
