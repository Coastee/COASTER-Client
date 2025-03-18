import { tokenInstance } from "@/apis/instance";

// [GET] 커피챗 리스트 조회
export const fetchCoffeeChatList = async (serverId: number) => {
  try {
    const response = await tokenInstance(`api/v1/servers/${serverId}/meetings`).json();
    return response;
  } catch (error) {
    console.error("커피챗 리스트 조회 실패:", error);
  }
};
