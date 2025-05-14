import { useNaverLogin } from "@/pages/OnboardingPage/hooks/useNaverLogin";
import { useEffect } from "react";
import { useRedirectToFirstServer } from "@/pages/OnboardingPage/hooks/useRedirectToFirstServer";

const NaverLogin = () => {
  const code = new URL(window.location.href).searchParams.get("code") || "";

  const { data, isSuccess } = useNaverLogin(code);
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

export default NaverLogin;
