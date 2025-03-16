import { tokenInstance } from "@/apis/instance";
import type { ChatListResponseTypes } from "@/pages/GlobalChatPage/types/globalChatTypes";

// [GET] 전체 채팅 로그 조회
export const fetchGlobalChatLogs = async (serverId: number): Promise<ChatListResponseTypes> => {
  try {
    const response: ChatListResponseTypes = await tokenInstance(`api/v1/servers/${serverId}/groups/${serverId}`).json();
    return response;
  } catch (error) {
    console.error("전체 채팅 로그 조회 실패:", error);
    throw error;
  }
};
