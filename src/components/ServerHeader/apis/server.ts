import { tokenInstance } from "@/apis/instance";
import type { ServerResponseTypes } from "@/components/ServerHeader/types/serverTypes";
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

// [GET] Find My Servers
export const fetchMyServers = async (): Promise<ServerResponseTypes> => {
  try {
    const response = await tokenInstance("api/v1/servers?scope=joined").json();
    return response as ServerResponseTypes; // 응답을 ServerResponseTypes로 명시적으로 변환
  } catch (error) {
    console.error("내 서버 받아오기 실패:", error);
    // 에러 발생 시 명확한 처리 (reject를 통해 에러를 던질 수 있음)
    return Promise.reject(error);
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
