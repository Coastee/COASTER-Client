import { PATH } from "@/constants/path";
import { useUserId, useUserIdAction } from "@/stores/useUserId";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useInitializeUserId = () => {
  const navigate = useNavigate();

  const userId = useUserId();
  const { setUserId } = useUserIdAction();

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      console.warn("userId 없음");
      navigate(PATH.ONBOARDING);
    } else {
      setUserId(+userId);
    }
  }, [navigate, setUserId]);

  return userId;
};
