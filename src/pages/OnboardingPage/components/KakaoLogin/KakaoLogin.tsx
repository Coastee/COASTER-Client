import { PATH } from "@/constants/path";
import { useInitializeServerId } from "@/hooks/useInitializeServerId";
import { useKakaoLogin } from "@/pages/OnboardingPage/hooks/useKakaoLogin";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const KakaoLogin = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code") || "";

  const { data, isSuccess } = useKakaoLogin(code);
  const serverId = useInitializeServerId();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (!isSuccess || !data) return;

    const { accessToken, refreshToken, userId, newUser } = data.result;

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    localStorage.setItem("userId", userId.toString());

    if (newUser) {
      navigate(PATH.SIGNUP);
    } else {
      if (serverId) {
        navigate(PATH.HOME.replace(":serverId", serverId.toString()));
      }
    }
  }, [data, isSuccess, serverId]);

  return <div>로딩 중</div>;
};

export default KakaoLogin;
