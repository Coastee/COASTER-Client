import { PATH } from "@/constants/path";
import { useInitializeServerId } from "@/hooks/useInitializeServerId";
import { useNaverLogin } from "@/pages/OnboardingPage/hooks/useNaverLogin";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const NaverLogin = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code") || "";

  const navigate = useNavigate();

  const { data, isSuccess } = useNaverLogin(code);
  const serverId = useInitializeServerId();

  useEffect(() => {
    if (!isSuccess && !data) return;

    const { accessToken, refreshToken, userId, newUser } = data.result;

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    localStorage.setItem("userId", userId.toString());

    if (newUser) {
      navigate(PATH.SIGNUP);
    } else {
      navigate(PATH.HOME.replace(":serverId", serverId.toString()));
    }
  }, [data, isSuccess, navigate, serverId]);

  return <div>로딩 중</div>;
};

export default NaverLogin;
