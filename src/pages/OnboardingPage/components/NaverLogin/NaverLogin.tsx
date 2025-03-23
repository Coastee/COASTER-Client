import { useNaverLogin } from "@/pages/OnboardingPage/hooks/useNaverLogin";
import { useRedirectToServer } from "@/pages/OnboardingPage/hooks/useRedirectToServer";
import { useUserIdAction } from "@/stores/useUserId";
import { useEffect } from "react";

const NaverLogin = () => {
  const code = new URL(window.location.href).searchParams.get("code") || "";

  const { data, isSuccess } = useNaverLogin(code);

  const { setUserId } = useUserIdAction();

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

export default NaverLogin;
