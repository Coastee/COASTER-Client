import { HamburgerIcon, RotateLogoIcon, SendIcon } from "@/assets/svg";
import { Input, UserBox } from "@/components";
import ChatPanel from "@/components/ChatPanel/ChatPanel";
import TimeChip from "@/components/TimeChip/TimeChip";

import { PLACEHOLDER } from "@/constants/placeholder";
import { useScrollToBottom } from "@/hooks/useScroll";
import { useChatScroll } from "@/pages/ChatPage/hooks/useChatScroll";
import { useFetchChatLogs } from "@/pages/ChatPage/hooks/useFetchChatLogs";
import { useChatStompClient } from "@/pages/ChatPage/hooks/useGroupChatStompClient";
import { useUpdateChatLogs } from "@/pages/ChatPage/hooks/useUpdateChatLogs";
import type { ChatTypes } from "@/pages/ChatPage/types/groupChatLogTypes";
import { useMenuBarAction, useMenuBarIsOpen } from "@/stores/useMenuBarStore";
import { chatFormatTime } from "@/utils/dateTime";
import * as s from "@pages/ChatPage/components/ChatRoom/ChatRoom.styles";
import { useEffect, useState } from "react";

interface ChatRoomProps {
  type: "groups" | "meetings";
  serverId: number;
  selectedRoomId: number;
  title: string;
}

const ChatRoom = ({ type, serverId, selectedRoomId, title }: ChatRoomProps) => {
  const [logs, setLogs] = useState<ChatTypes[]>([]);
  const [input, setInput] = useState("");

  const myId = Number(localStorage.getItem("userId")) || null;

  const isOpen = useMenuBarIsOpen();
  const { openMenuBar } = useMenuBarAction();

  const stompClient = useChatStompClient(selectedRoomId, setLogs);

  useUpdateChatLogs(serverId, type, selectedRoomId, setLogs);

  const scrollRef = useScrollToBottom();
  useChatScroll(scrollRef, logs);

  const { data } = useFetchChatLogs(serverId, type, selectedRoomId);

  const handleSendMessage = () => {
    if (!stompClient || !stompClient.sendMessage || input.trim() === "") return;
    stompClient.sendMessage(input);
    setInput("");
  };

  const reversedChatLogs = [...logs].reverse();

  useEffect(() => {
    if (data?.result.chatList) {
      setLogs(data.result.chatList);
    }
  }, [data]);

  return (
    <section css={s.wrapperStyle(isOpen)}>
      <header css={s.headerLayoutStyle}>
        <div css={s.titleLayoutStyle}>
          <RotateLogoIcon width={25} height={22} />
          <h1 css={s.titleStyle}>{title}</h1>
        </div>
        <HamburgerIcon width={23} height={15} css={s.iconStyle} onClick={() => openMenuBar([])} />
      </header>
      <div css={s.scrollStyle} ref={scrollRef}>
        {reversedChatLogs.map((chat, index) => {
          const isUser = chat.user.id === myId;
          return (
            <div key={`${index}-${chat.id}`} css={s.layoutStyle(isUser)}>
              {!isUser && <UserBox name={chat.user.nickname} />}
              <div css={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                <div css={s.nameBoxStyle(isUser)}>
                  {chat.user.nickname}
                  <TimeChip time={chatFormatTime(chat.createdDate)} />
                </div>
                <ChatPanel
                  isUser={isUser}
                  message={chat.content}
                  time={chatFormatTime(chat.createdDate)}
                  isDM={false}
                />
              </div>
            </div>
          );
        })}
      </div>
      <Input
        placeholder={PLACEHOLDER.CHAT}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") handleSendMessage();
        }}
        rightIcon={<SendIcon width={14} height={14} />}
      />
    </section>
  );
};

export default ChatRoom;
