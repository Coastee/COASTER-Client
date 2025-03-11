import { tokenInstance } from "@/apis/instance";
import type { HomeResponseTypes } from "@/pages/HomePage/types/homeDataTypes";

// [GET] Find All Servers
export const fetchAllServers = async () => {
  try {
    const response = await tokenInstance("api/v1/servers").json();
    return response;
  } catch (error) {
    console.error("전체 서버 받아오기 실패:", error);
  }
};

// [GET] Server Home
export const fetchServerHome = async (serverId: number) => {
  try {
    const response = await tokenInstance(`api/v1/servers/${serverId}`).json<HomeResponseTypes>();
    return response.result;
  } catch (error) {
    console.error(`홈 서버 정보 받아오기 실패 (${serverId}번 서버):`, error);
  }
};

// [POST] Enter Server
export const enterServer = async (serverId: number) => {
  try {
    const response = await tokenInstance.post(`api/v1/servers/${serverId}`).json();
    return response;
  } catch (error) {
    console.error(`${serverId}번 서버 입장 실패:`, error);
  }
};

// [DELETE] Exit Server
export const exitServer = async (serverId: number) => {
  try {
    const response = await tokenInstance.delete(`api/v1/servers/${serverId}`).json();
    return response;
  } catch (error) {
    console.error(`${serverId}번 서버 나가기 실패:`, error);
  }
};
