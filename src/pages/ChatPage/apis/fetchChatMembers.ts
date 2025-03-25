import { tokenInstance } from "@/apis/instance";

import type { ChatMemberResponseTypes } from "@/pages/ChatPage/types/groupChatLogTypes";

// [GET] 채팅 멤버 조회
export const fetchChatMembers = async (
  serverId: number,
  type: "groups" | "meetings",
  roomId: number,
): Promise<ChatMemberResponseTypes> => {
  try {
    const response: ChatMemberResponseTypes = await tokenInstance(
      `api/v1/servers/${serverId}/${type}/${roomId}/users`,
    ).json();
    console.log(response);
    return response;
  } catch (error) {
    console.error("그룹챗 채팅 멤버 조회 실패:", error);
    throw error;
  }
};
