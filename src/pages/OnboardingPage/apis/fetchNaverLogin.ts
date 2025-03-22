import { instance } from "@/apis/instance";
import type { LoginResponseTypes } from "@/pages/OnboardingPage/types";

export const fetchNaverLogin = async (code: string) => {
  const response = await instance.get<LoginResponseTypes>(`api/v1/login/naver-callback?code=${code}`).json();

  return response;
};
