import { useGoogleLogin } from "@/pages/OnboardingPage/hooks/useGoogleLogin";
import { useRedirectToFirstServer } from "@/pages/OnboardingPage/hooks/useRedirectToFirstServer";
import { useEffect } from "react";

const GoogleLogin = () => {
  const code = new URL(window.location.href).searchParams.get("code") || "";

  const { data, isSuccess } = useGoogleLogin(code);

  const handleRedirect = useRedirectToFirstServer();

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

export default GoogleLogin;
