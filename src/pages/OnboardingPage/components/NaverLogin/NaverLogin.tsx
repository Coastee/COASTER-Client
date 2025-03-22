import { useNaverLogin } from "@/pages/OnboardingPage/hooks/useNaverLogin";
import { useRedirectToServer } from "@/pages/OnboardingPage/hooks/useRedirectToServer";
import { useEffect } from "react";

const NaverLogin = () => {
  const code = new URL(window.location.href).searchParams.get("code") || "";

  const { data, isSuccess } = useNaverLogin(code);

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

export default NaverLogin;
