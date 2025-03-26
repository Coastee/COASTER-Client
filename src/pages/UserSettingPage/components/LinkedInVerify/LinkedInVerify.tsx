import { PATH } from "@/constants/path";
import { useVerifyLinkedIn } from "@/pages/UserSettingPage/hooks/useVerifyLinkedIn";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LinkedInVerify = () => {
  const code = new URL(window.location.href).searchParams.get("code") || "";
  const navigate = useNavigate();

  const { data, isSuccess } = useVerifyLinkedIn(code);

  useEffect(() => {
    if (isSuccess && data) {
      navigate(PATH.PROFILE_EDIT);
    }
  }, [data, isSuccess, navigate]);

  return <div>로딩 중</div>;
};

export default LinkedInVerify;
