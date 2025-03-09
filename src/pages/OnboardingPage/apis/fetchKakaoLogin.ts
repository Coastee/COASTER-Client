import { instance } from "@/apis/instance";
import type { LoginResponse } from "@/pages/OnboardingPage/types";

export const fetchKakaoLogin = async (code: string) => {
  const response = await instance.get<LoginResponse>(`api/v1/login/kakao-callback?code=${code}`).json();

  console.log(response);

  return response;
};
