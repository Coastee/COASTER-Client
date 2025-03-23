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

    if (!accessToken || !refreshToken || userId == null) return;

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("userId", userId.toString());

    console.log(newUser);

    if (newUser) {
      navigate(PATH.SIGNUP);
    } else {
      if (serverId) {
        console.log(serverId);
        navigate(PATH.HOME.replace(":serverId", serverId.toString()));
      }
      console.log(serverId);
    }
  }, [data, isSuccess, serverId]);

  return <div>로딩 중</div>;
};

export default KakaoLogin;
