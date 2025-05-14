import { tokenInstance } from "@/apis/instance";
import type { ChatRoom } from "@/types";

/** 채팅방 멤버 강퇴 */
export const kickOutMember = async (
  serverId: number,
  chatRoomType: ChatRoom,
  groupId: number,
  userId: number
) => {
  const response = await tokenInstance.delete(
    `api/v1/servers/${serverId}/${chatRoomType}/${groupId}/users/${userId}`
  );

  return response.json();
};
