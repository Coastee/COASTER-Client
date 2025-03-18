import type { StompClientStateTypes } from "@/pages/DMPage/types/dmTypes";
import type { ChatTypes } from "@/pages/GroupChatPage/types/groupChatLogTypes";
import { createStompClient } from "@/sockets/chatSocketClient";
import { type Dispatch, type SetStateAction, useEffect, useState } from "react";

// STOMP 클라이언트 설정 훅
export const useGroupChatStompClient = (roomId: number, setGroupChatLogs: Dispatch<SetStateAction<ChatTypes[]>>) => {
  const [stompClient, setStompClient] = useState<StompClientStateTypes | null>(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: Ignore unnecessary dependency warning
  useEffect(() => {
    if (roomId) {
      const stomp = createStompClient(roomId, (messageContent: string) => {
        const messageData = JSON.parse(messageContent);

        setGroupChatLogs((prevLogs) => {
          if (!prevLogs.find((msg) => msg.id === messageData.id)) {
            return [messageData, ...prevLogs];
          }
          return prevLogs;
        });
      });

      if (stomp.client && typeof stomp.sendMessage === "function") {
        setStompClient(stomp);
      }
    }

    return () => {
      if (stompClient?.client) {
        stompClient.client.deactivate();
      }
    };
  }, [roomId]);

  return stompClient;
};
