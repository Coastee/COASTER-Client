import { fetchKakaoLogin } from "@/pages/OnboardingPage/apis/fetchKakaoLogin";
import { useQuery } from "@tanstack/react-query";

export const useKakaoLogin = (code: string) => {
  return useQuery({
    queryKey: ["kakao-login", code],
    queryFn: () => fetchKakaoLogin(code),
    enabled: !!code,
  });
};
