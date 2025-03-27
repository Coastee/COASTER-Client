import { ArrowDownIcon, PinIcon, SendIcon } from "@/assets/svg";
import { Divider, Input } from "@/components";
import ChatPanel from "@/components/ChatPanel/ChatPanel";
import { useScrollToBottom } from "@/hooks/useScroll";

import { useChatScroll } from "@/pages/GlobalChatPage/hooks/useChatScroll";
import { useGlobalChatStompClient } from "@/pages/GlobalChatPage/hooks/useGlobalChatStompClient";
import { useUpdateChatLogs } from "@/pages/GlobalChatPage/hooks/useUpdateChatLogs";
import type { ChatTypes } from "@/pages/GlobalChatPage/types/globalChatTypes";
import { globalChatFormatTime } from "@/pages/GlobalChatPage/utils/globalChatFormatTime";
import { CHAT_NOTICE_DEFAULT } from "@/pages/HomePage/constants/noticeDummy";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import * as s from "./GlobalChatRoom.styles";

const GlobalChatRoom = () => {
  const [globalChatLogs, setGlobalChatLogs] = useState<ChatTypes[]>([]);
  const [input, setInput] = useState("");
  const [isNoticeOpened, setIsNoticeOpened] = useState(false);

  const { pathname } = useLocation();
  const serverId = Number(pathname.split("/")[1]);
  const roomId = serverId;
  const myId = Number(localStorage.getItem("userId"));

  const stompClient = useGlobalChatStompClient(roomId, setGlobalChatLogs);
  const scrollRef = useScrollToBottom();

  useUpdateChatLogs(serverId, setGlobalChatLogs);
  useChatScroll(scrollRef, globalChatLogs);

  const handleSendMessage = () => {
    if (!stompClient || !stompClient.sendMessage || input.trim() === "") return;
    stompClient.sendMessage(input);
    setInput("");
  };

  const reversedChatLogs = [...globalChatLogs].reverse();

  return (
    <section css={s.wrapperStyle}>
      <div css={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <header css={s.headerStyle}>
          <div css={s.titleStyle}>
            <h1>서버 전체 채팅</h1>
            <div css={s.serverNameStyle}>{"모빌리티"}</div>
          </div>

          <div css={s.noticeButtonStyle}>
            <div
              css={s.noticeTitleStyle}
              onClick={() => setIsNoticeOpened(!isNoticeOpened)}
              onKeyDown={() => setIsNoticeOpened(!isNoticeOpened)}
            >
              <PinIcon width={11} height={15} />
              <p>공지</p>
              <ArrowDownIcon width={14} height={7} css={{ transform: isNoticeOpened ? "rotate(180deg)" : "" }} />
            </div>
          </div>
          {isNoticeOpened && <div css={s.noticeContentStyle}>{CHAT_NOTICE_DEFAULT}</div>}
        </header>
        <Divider />
      </div>

      <div css={s.scrollStyle} ref={scrollRef}>
        {reversedChatLogs.map((chat) => (
          <div key={chat.id} css={s.layoutStyle(chat.user.id === myId)}>
            <p>{chat.user.nickname}</p>
            <div css={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              <ChatPanel
                isUser={chat.user.id === myId}
                message={chat.content}
                time={globalChatFormatTime(chat.createdDate)}
                isDM
              />
            </div>
          </div>
        ))}
      </div>

      <Input
        placeholder="채팅을 입력해주세요 (상대방을 향한 비방, 욕설글은 정지 대상이 될 수 있습니다.)"
        rightIcon={<SendIcon width={14} height={14} />}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") handleSendMessage();
        }}
      />
    </section>
  );
};

export default GlobalChatRoom;
