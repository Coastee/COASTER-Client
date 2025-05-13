import { fetchMyServers } from "@/components/ServerHeader/apis/server";
import { PATH } from "@/constants/path";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useRedirectToFirstServer = () => {
  const navigate = useNavigate();

  const handleRedirect = useCallback(async () => {
    try {
      const myServers = await fetchMyServers();

      if (!myServers) return;

      if (myServers.result.count > 0) {
        const firstServerId = myServers.result.serverList[0].id;
        navigate(PATH.HOME.replace(":serverId", String(firstServerId)));
      } else {
        navigate(PATH.SIGNUP);
      }
    } catch (error) {
      navigate(PATH.SIGNUP);
    }
  }, [navigate]);

  return handleRedirect;
};
