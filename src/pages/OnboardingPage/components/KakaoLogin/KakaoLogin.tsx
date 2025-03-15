import { fetchMyServers } from "@/components/ServerHeader/apis/server";
import { PATH } from "@/constants/path";
import { useKakaoLogin } from "@/pages/OnboardingPage/hooks/useKakaoLogin";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const KakaoLogin = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code") || "";

  const { data, isSuccess } = useKakaoLogin(code);

  const redirectToFirstServer = useCallback(async () => {
    try {
      const myServers = await fetchMyServers();

      if (myServers?.result.count > 0) {
        const firstServerId = myServers.result.serverList[0].id;
        navigate(PATH.HOME.replace(":serverId", String(firstServerId)));
      } else {
        navigate(PATH.SIGNUP);
      }
    } catch (error) {
      navigate(PATH.SIGNUP);
    }
  }, [navigate]);

  useEffect(() => {
    if (isSuccess && data) {
      localStorage.setItem("accessToken", data.result.accessToken);
      localStorage.setItem("refreshToken", data.result.refreshToken);

      localStorage.setItem("userId", data.result.userId.toString());

      redirectToFirstServer();
    }
  }, [data, isSuccess, redirectToFirstServer]);

  return <div>로딩 중</div>;
};

export default KakaoLogin;
