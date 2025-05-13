import { tokenInstance } from "@/apis/instance";

import type { ChatMemberResponseTypes } from "@/pages/ChatPage/types/groupChatLogTypes";
import type { ChatRoom } from "@/types";

// [GET] 채팅 멤버 조회
export const fetchChatMembers = async (
  serverId: number,
  type: ChatRoom,
  roomId: number
): Promise<ChatMemberResponseTypes> => {
  try {
    const response: ChatMemberResponseTypes = await tokenInstance(
      `api/v1/servers/${serverId}/${type}/${roomId}/users`
    ).json();

    return response;
  } catch (error) {
    console.error("그룹챗 채팅 멤버 조회 실패:", error);

    throw error;
  }
};
