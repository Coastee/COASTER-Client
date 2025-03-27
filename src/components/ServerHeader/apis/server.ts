import { tokenInstance } from "@/apis/instance";
import type { ServerResponseTypes } from "@/components/ServerHeader/types/serverTypes";
import type { HomeResponseTypes } from "@/pages/HomePage/types/homeDataTypes";

export const fetchAllServers = async () => {
  try {
    const response = await tokenInstance("api/v1/servers").json();
    return response;
  } catch (error) {
    console.error("전체 서버 받아오기 실패:", error);
  }
};

export const fetchMyServers = async (): Promise<ServerResponseTypes> => {
  try {
    const response = await tokenInstance("api/v1/servers?scope=joined").json();
    return response as ServerResponseTypes;
  } catch (error) {
    console.error("내 서버 받아오기 실패:", error);
    return Promise.reject(error);
  }
};

export const fetchServerHome = async (serverId: number, queryParam?: { keyword: string; tags: string[] }) => {
  const { keyword, tags } = queryParam || {};

  const queryParams = new URLSearchParams();

  if (keyword) queryParams.append("keyword", keyword);
  if (tags && tags.length > 0) {
    for (const tag of tags) {
      queryParams.append("tags", tag);
    }
  }

  try {
    const response: HomeResponseTypes = await tokenInstance
      .get(`api/v1/servers/${serverId}?${queryParams.toString()}`)
      .json();

    return response.result;
  } catch (error) {
    console.error(`홈 정보 받아오기 실패 (${serverId}번 서버):`, error);
    throw error;
  }
};
