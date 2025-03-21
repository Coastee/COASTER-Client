import { fetchGoogleLogin } from "@/pages/OnboardingPage/apis/fetchGoogleLogin";
import { useQuery } from "@tanstack/react-query";

export const useGoogleLogin = (code: string) => {
  return useQuery({
    queryKey: ["google-login", code],
    queryFn: () => fetchGoogleLogin(code),
    enabled: !!code,
  });
};
