import { useFetchChatLogs } from "@/pages/ChatPage/hooks/useFetchChatLogs";
import type { ChatTypes } from "@/pages/ChatPage/types/groupChatLogTypes";

import { type Dispatch, type SetStateAction, useEffect } from "react";

// 채팅 로그 상태 관리 훅
export const useUpdateChatLogs = (
  serverId: number,
  type: "groups" | "meetings",
  roomId: number,
  setChatLogs: Dispatch<SetStateAction<ChatTypes[]>>
) => {
  const { data } = useFetchChatLogs(serverId, type, roomId);

  useEffect(() => {
    if (data?.result.chatList) {
      setChatLogs(data.result.chatList);
    }
  }, [data, setChatLogs]);
};
