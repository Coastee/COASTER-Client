import { useMyServerList } from "@/components/ServerHeader/hooks/useServerList";
import { PATH } from "@/constants/path";
import { useServerId, useServerIdAction } from "@/stores/useServerId";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useInitializeServerId = () => {
  const serverId = useServerId();
  const { setServerId } = useServerIdAction();

  const navigate = useNavigate();

  const { data, isSuccess } = useMyServerList();

  useEffect(() => {
    if (isSuccess) {
      if (data.result.serverList.length === 0) {
        navigate(PATH.ONBOARDING);

        return;
      }
      const serverId = data.result.serverList[0].id;

      setServerId(serverId);
    } else if (!isSuccess) {
      navigate(PATH.ONBOARDING);
    }
  });

  return serverId;
};
