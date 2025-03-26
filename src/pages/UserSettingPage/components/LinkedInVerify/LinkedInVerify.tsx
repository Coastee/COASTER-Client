import { useVerifyLinkedIn } from "@/pages/UserSettingPage/hooks/useVerifyLinkedIn";
import { useEffect } from "react";
const LinkedInVerify = () => {
  const code = new URL(window.location.href).searchParams.get("code") || "";

  const { data, isSuccess } = useVerifyLinkedIn(code);

  useEffect(() => {
    if (isSuccess && data) {
      console.log(data);
    }
  }, [data, isSuccess]);

  return <div>로딩 중</div>;
};

export default LinkedInVerify;
