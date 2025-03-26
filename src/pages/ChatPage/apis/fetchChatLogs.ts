import { tokenInstance } from "@/apis/instance";
import type { ChatListResponseTypes } from "@/pages/ChatPage/types/groupChatLogTypes";

// [GET] 채팅 로그 조회
export const fetchChatLogs = async (
  serverId: number,
  type: "groups" | "meetings",
  roomId: number,
): Promise<ChatListResponseTypes> => {
  try {
    const response: ChatListResponseTypes = await tokenInstance(`api/v1/servers/${serverId}/${type}/${roomId}`).json();
    return response;
  } catch (error) {
    console.error("그룹챗 채팅 로그 조회 실패:", error);
    throw error;
  }
};
