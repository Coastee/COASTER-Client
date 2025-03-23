import { useKakaoLogin } from "@/pages/OnboardingPage/hooks/useKakaoLogin";
import { useRedirectToServer } from "@/pages/OnboardingPage/hooks/useRedirectToServer";
import { useUserId, useUserIdAction } from "@/stores/useUserId";
import { useEffect } from "react";

const KakaoLogin = () => {
  const code = new URL(window.location.href).searchParams.get("code") || "";

  const { data, isSuccess } = useKakaoLogin(code);
  const { setUserId } = useUserIdAction();
  const userId = useUserId();

  const handleRedirect = useRedirectToServer();

  useEffect(() => {
    if (isSuccess && data) {
      localStorage.setItem("accessToken", data.result.accessToken);
      localStorage.setItem("refreshToken", data.result.refreshToken);

      if (data.result.userId) {
        setUserId(data.result.userId);
      }

      handleRedirect();
    }
  }, [data, isSuccess, handleRedirect, setUserId]);

  return <div>로딩 중</div>;
};

export default KakaoLogin;
