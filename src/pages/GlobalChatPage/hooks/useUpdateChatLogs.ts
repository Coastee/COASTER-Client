import { useGetGlobalChatLogs } from "@/pages/GlobalChatPage/hooks/useGetGlobalChatLogs";
import type { ChatTypes } from "@/pages/GlobalChatPage/types/globalChatTypes";
import { type Dispatch, type SetStateAction, useEffect } from "react";

// 채팅 로그 상태 관리 훅
export const useUpdateChatLogs = (
  serverId: number | null,
  setGlobalChatLogs: Dispatch<SetStateAction<ChatTypes[]>>
) => {
  const { data } = useGetGlobalChatLogs(serverId);

  useEffect(() => {
    if (data?.result.chatList) {
      setGlobalChatLogs(data.result.chatList);
    }
  }, [data, setGlobalChatLogs]);
};
