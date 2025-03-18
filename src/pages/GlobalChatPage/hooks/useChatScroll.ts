import type { ChatTypes } from "@/pages/GlobalChatPage/types/globalChatTypes";
import { type RefObject, useLayoutEffect } from "react";

export const useChatScroll = (scrollRef: RefObject<HTMLElement | null>, dependency: ChatTypes[]) => {
  // biome-ignore lint/correctness/useExhaustiveDependencies: Ignore unnecessary dependency warning
  useLayoutEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [dependency]);
};
