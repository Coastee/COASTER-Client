import bgImg from "@/assets/img/timeBackgroundImg.png";
import { HamburgerIcon, RotateLogoIcon, RotateWhiteLogoIcon, SendIcon } from "@/assets/svg";
import { Input, UserBox } from "@/components";
import ChatPanel from "@/components/ChatPanel/ChatPanel";
import TimeChip from "@/components/TimeChip/TimeChip";
import { PLACEHOLDER } from "@/constants/placeholder";
import { useScrollToBottom } from "@/hooks/useScroll";
import { useFetchChatMembers } from "@/pages/ChatPage/hooks/useChatMembers";
import { useChatScroll } from "@/pages/ChatPage/hooks/useChatScroll";
import { useFetchChatLogs } from "@/pages/ChatPage/hooks/useFetchChatLogs";
import { useChatStompClient } from "@/pages/ChatPage/hooks/useGroupChatStompClient";
import { useUpdateChatLogs } from "@/pages/ChatPage/hooks/useUpdateChatLogs";
import type { ChatTypes } from "@/pages/ChatPage/types/groupChatLogTypes";
import { useMenuBarAction, useMenuBarIsOpen } from "@/stores/useMenuBarStore";
import { chatFormatTime, parseDateArray } from "@/utils/dateTime";
import * as s from "@pages/ChatPage/components/ChatRoom/ChatRoom.styles";
import { useEffect, useState } from "react";

interface ChatRoomProps {
  type: "groups" | "meetings";
  serverId: number;
  selectedRoomId: number;
  title: string;
  startDate: number[] | null;
}

const ChatRoom = ({ type, serverId, selectedRoomId, title, startDate }: ChatRoomProps) => {
  const [logs, setLogs] = useState<ChatTypes[]>([]);
  const [input, setInput] = useState("");

  const dateArray = startDate ? [...startDate, 0, 0] : [0, 0, 0, 0, 0, 0, 0];
  const { month, day, defaultHour, minute, dayOfWeek } = parseDateArray(dateArray);

  const myId = Number(localStorage.getItem("userId")) || null;

  const isOpen = useMenuBarIsOpen();
  const { openMenuBar } = useMenuBarAction();

  const stompClient = useChatStompClient(selectedRoomId, setLogs);

  useUpdateChatLogs(serverId, type, selectedRoomId, setLogs);

  const scrollRef = useScrollToBottom();
  useChatScroll(scrollRef, logs);

  const { data } = useFetchChatLogs(serverId, type, selectedRoomId);
  const { data: members } = useFetchChatMembers(serverId, type, selectedRoomId);

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

  const handleHamburgerClick = () => {
    if (!members?.result.userList) {
      return;
    }

    const formattedMembers = members.result.userList.map((member) => ({
      ...member,
      user: member,
    }));
    openMenuBar(formattedMembers);
  };

  return (
    <section css={s.wrapperStyle(isOpen)}>
      <header css={s.headerLayoutStyle}>
        <div css={s.titleLayoutStyle}>
          <RotateLogoIcon width={25} height={22} />
          <h1 css={s.titleStyle}>{title}</h1>
          {type === "meetings" && startDate && (
            <div css={s.timeStyle}>
              {month}/{day} ({dayOfWeek}) {String(defaultHour).padStart(2, "0")}:{String(minute).padStart(2, "0")}
            </div>
          )}
        </div>
        {!isOpen && <HamburgerIcon width={23} height={15} css={s.iconStyle} onClick={handleHamburgerClick} />}
      </header>

      <div css={s.scrollStyle} ref={scrollRef}>
        {type === "meetings" && (
          <div css={s.timeNoticeStyle(bgImg)}>
            <RotateWhiteLogoIcon width={33} height={30} css={{ flexShrink: "0" }} />
            <div css={s.timeNoticeTextStyle}>
              <h1>
                <span>
                  {month}월 {day}일 {dayOfWeek}요일 {defaultHour}시 {minute === 0 ? "정각" : `${minute}분`}
                </span>
                에 티타임이 예정되어 있습니다.
              </h1>
              <p>채팅방에 참여한 사람들과 소통해보세요.</p>
            </div>
          </div>
        )}
        {reversedChatLogs.map((chat, index) => {
          const isUser = chat.user.id === myId;
          return (
            <div key={`${index}-${chat.id}`} css={s.layoutStyle(isUser)}>
              {!isUser && <UserBox name={chat.user.nickname} profileImage={chat.user.profileImage} />}
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
      <div css={{ marginTop: "auto" }}>
        <Input
          placeholder={PLACEHOLDER.CHAT}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") handleSendMessage();
          }}
          rightIcon={<SendIcon width={14} height={14} />}
          css={{ minWidth: "28rem" }}
        />
      </div>
    </section>
  );
};

export default ChatRoom;
