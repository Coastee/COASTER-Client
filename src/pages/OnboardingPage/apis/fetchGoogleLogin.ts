import { instance } from "@/apis/instance";
import type { LoginResponseTypes } from "@/pages/OnboardingPage/types";

export const fetchGoogleLogin = async (code: string) => {
  const response = await instance.get<LoginResponseTypes>(`api/v1/login/google-callback?code=${code}`).json();

  return response;
};
