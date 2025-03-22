import { tokenInstance } from "@/apis/instance";
import type { ChatListTypes } from "@/pages/ChatPage/types";

// 사이드 바 - 참여한/개설한 채팅방 리스트 조회
export const fetchSideChatList = async (serverId: number, type: "groups" | "meetings", scope: string) => {
  const response = await tokenInstance
    .get<ChatListTypes>(`api/v1/servers/${serverId}/${type}?page=0&sort=name&scope=${scope}`)
    .json();

  return response.result;
};
