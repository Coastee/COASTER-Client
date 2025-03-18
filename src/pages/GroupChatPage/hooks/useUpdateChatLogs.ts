import { useFetchGroupChatLogs } from "@/pages/GroupChatPage/hooks/useFetchGroupChatLogs";
import type { ChatTypes } from "@/pages/GroupChatPage/types/groupChatLogTypes";

import { type Dispatch, type SetStateAction, useEffect } from "react";

// 채팅 로그 상태 관리 훅
export const useUpdateChatLogs = (serverId: number, roomId: number, setGlobalChatLogs: Dispatch<SetStateAction<ChatTypes[]>>) => {
  const { data } = useFetchGroupChatLogs(serverId, roomId);

  useEffect(() => {
    if (data?.result.chatList) {
      setGlobalChatLogs(data.result.chatList);
    }
  }, [data, setGlobalChatLogs]);
};
