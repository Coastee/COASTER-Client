import { useKakaoLogin } from "@/pages/OnboardingPage/hooks/useKakaoLogin";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const KakaoLogin = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code") || "";

  const { data, isSuccess } = useKakaoLogin(code);

  useEffect(() => {
    if (isSuccess && data) {
      localStorage.setItem("accessToken", data.result.accessToken);
      localStorage.setItem("refreshToken", data.result.refreshToken);

      navigate("/signup");
    }
  }, [data, isSuccess, navigate]);

  return <div>로딩 중</div>;
};

export default KakaoLogin;
