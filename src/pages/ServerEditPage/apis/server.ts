import { tokenInstance } from "@/apis/instance";

export const enterServer = async (serverId: number) => {
  try {
    const response = await tokenInstance.post(`api/v1/servers/${serverId}`).json();
    return response;
  } catch (error) {
    console.error(`${serverId}번 서버 입장 실패:`, error);
  }
};

export const exitServer = async (serverId: number) => {
  try {
    const response = await tokenInstance.delete(`api/v1/servers/${serverId}`).json();
    return response;
  } catch (error) {
    console.error(`${serverId}번 서버 나가기 실패:`, error);
  }
};
