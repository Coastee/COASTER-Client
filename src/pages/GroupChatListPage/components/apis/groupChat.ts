import { tokenInstance } from "@/apis/instance";

// [GET] 그룹챗 리스트 조회
export const fetchGroupChatRoomList = async (serverId: number) => {
  try {
    const response = await tokenInstance(`api/v1/servers/${serverId}/groups`).json();
    return response;
  } catch (error) {
    console.error("그룹챗 리스트 조회 실패:", error);
  }
};


