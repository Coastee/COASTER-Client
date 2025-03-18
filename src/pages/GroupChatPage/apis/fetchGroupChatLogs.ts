import { tokenInstance } from "@/apis/instance";
import type { ChatListResponseTypes } from "@/pages/GroupChatPage/types/groupChatLogTypes";

// [GET] 그룹챗 채팅 로그 조회
export const fetchGroupChatLogs = async (serverId: number, roomId: number): Promise<ChatListResponseTypes> => {
  try {
    const response: ChatListResponseTypes = await tokenInstance(`api/v1/servers/${serverId}/groups/${roomId}`).json();
    return response;
  } catch (error) {
    console.error("그룹챗 채팅 로그 조회 실패:", error);
    throw error;
  }
};
