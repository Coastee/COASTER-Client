import { jsonKy } from "@/ky/ky";
import type { HomeResponseTypes } from "@/pages/HomePage/types/homeDataTypes";

// [GET] Find All Servers
export const fetchAllServers = async () => {
  try {
    const response = await jsonKy("api/v1/servers").json();
    console.log("fetchAllServers: ", response);
    return response;
  } catch (error) {
    console.error("전체 서버 받아오기 실패:", error);
  }
};

// [GET] Server Home
export const fetchServerHome = async (serverId: number) => {
  try {
    const response = await jsonKy(`api/v1/servers/${serverId}`).json<HomeResponseTypes>();
    console.log("fetchServerHome: ", response.result);
    return response.result;
  } catch (error) {
    console.error(`홈 서버 정보 받아오기 실패 (${serverId}번 서버):`, error);
    throw error;
  }
};

// [POST] Enter Server
export const enterServer = async (serverId: number) => {
  try {
    const response = await jsonKy.post(`api/v1/servers/${serverId}`).json();
    console.log("enterServer: ", response);
    return response;
  } catch (error) {
    console.error(`${serverId}번 서버 입장 실패:`, error);
  }
};

// [DELETE] Exit Server
export const exitServer = async (serverId: number) => {
  try {
    const response = await jsonKy.delete(`api/v1/servers/${serverId}`).json();
    console.log("exitServer: ", response);
    return response;
  } catch (error) {
    console.error(`${serverId}번 서버 나가기 실패:`, error);
  }
};
