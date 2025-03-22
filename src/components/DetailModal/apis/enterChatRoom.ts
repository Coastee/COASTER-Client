import { tokenInstance } from "@/apis/instance";

export const enterChatRoom = async (serverId: number, chatRoomType: string, groupId: number) => {
  try {
    const response = await tokenInstance.post(`api/v1/servers/${serverId}/${chatRoomType}/${groupId}`).json();
    return response;
  } catch (error) {
    console.error(`${chatRoomType}타입 ${serverId}번 채팅룸 입장 실패:`, error);
  }
};
