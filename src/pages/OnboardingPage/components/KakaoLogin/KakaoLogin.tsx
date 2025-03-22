import { useKakaoLogin } from "@/pages/OnboardingPage/hooks/useKakaoLogin";
import { useRedirectToServer } from "@/pages/OnboardingPage/hooks/useRedirectToServer";
import { useEffect } from "react";

const KakaoLogin = () => {
  const code = new URL(window.location.href).searchParams.get("code") || "";

  const { data, isSuccess } = useKakaoLogin(code);

  const handleRedirect = useRedirectToServer();

  useEffect(() => {
    if (isSuccess && data) {
      localStorage.setItem("accessToken", data.result.accessToken);
      localStorage.setItem("refreshToken", data.result.refreshToken);
      localStorage.setItem("userId", data.result.userId.toString());

      handleRedirect();
    }
  }, [data, isSuccess, handleRedirect]);

  return <div>로딩 중</div>;
};

export default KakaoLogin;
