import { tokenInstance } from "@/apis/instance";
import type { FetchServersResponse } from "@/pages/SignupPage/types/server";

export const fetchServers = async () => {
  // 필수로 하나 이상의 서버를 선택하기 때문에 query param 고정
  const response = await tokenInstance.get<FetchServersResponse>("api/v1/servers?scope=all").json();

  return response;
};
