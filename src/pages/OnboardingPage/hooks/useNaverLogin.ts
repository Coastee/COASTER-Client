import { fetchNaverLogin } from "@/pages/OnboardingPage/apis/fetchNaverLogin";
import { useQuery } from "@tanstack/react-query";

export const useNaverLogin = (code: string) => {
  return useQuery({
    queryKey: ["naver-login", code],
    queryFn: () => fetchNaverLogin(code),
    enabled: !!code,
  });
};
