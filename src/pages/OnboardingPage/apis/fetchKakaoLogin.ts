import { instance } from "@/apis/instance";
import type { LoginResponseTypes } from "@/pages/OnboardingPage/types";

export const fetchKakaoLogin = async (code: string) => {
  const response = await instance.get<LoginResponseTypes>(`api/v1/login/kakao-callback?code=${code}`).json();

  return response;
};
