import { CloseIcon, SendIcon } from "@/assets/svg";
import { Divider, Input, UserBox } from "@/components";
import ChatPanel from "@/components/ChatPanel/ChatPanel";

import { PLACEHOLDER } from "@/constants/placeholder";
import { useScrollToBottom } from "@/hooks/useScroll";
import { useDmLogs } from "@/pages/DMPage/hooks/useDm";
import type { ChatRoomProps, DMTypes, StompClientStateTypes } from "@/pages/DMPage/types/dmTypes";
import { createStompClient, sendMessage } from "@/sockets/dmSocketClient";
import { chatFormatTime } from "@/utils/dateTime";
import * as s from "@pages/DMPage/components/ChatRoom/ChatRoom.styles";
import { useEffect, useLayoutEffect, useState } from "react";

const ChatRoom = ({ dmList, userId, roomId, setRoomId, nickname, expYears, job, profileImage }: ChatRoomProps) => {
  const scrollRef = useScrollToBottom();
  const { data } = roomId !== -1 ? useDmLogs(roomId) : { data: null };

  const myId = Number(localStorage.getItem("userId"));

  const [input, setInput] = useState("");
  const [dmLogs, setDmLogs] = useState<DMTypes[]>([]);
  const [stompClient, setStompClient] = useState<StompClientStateTypes | null>(null); // STOMP 클라이언트 상태

  const userInfo = dmList.find((item) => item.id === roomId)?.user;

  const handleSendMessage = () => {
    if (roomId === -1) {
      if (input.trim() !== "") {
        sendMessage(null, userId, input);
        setInput("");
      }
    } else {
      if (!stompClient || !stompClient.sendMessage || input.trim() === "") return;

      stompClient.sendMessage(input);
      setInput("");
    }
  };

  // STOMP 클라이언트 연결 및 구독 설정
  // biome-ignore lint/correctness/useExhaustiveDependencies: Ignore unnecessary dependency warning
  useEffect(() => {
    if (roomId !== null && roomId !== -1) {
      const stomp = createStompClient(roomId, (messageContent: string) => {
        const messageData = JSON.parse(messageContent);

        setDmLogs((prevLogs) => {
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

  // 초기 로딩 후 불러온 메시지 처리
  useEffect(() => {
    if (data?.result?.dmList) {
      setDmLogs(data.result.dmList);
    }
  }, [data]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: Ignore unnecessary dependency warning
  useLayoutEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [dmLogs]);

  return (
    <section css={s.wrapperStyle}>
      <header css={s.headerStyle}>
        <div css={s.titleLayoutStyle}>
          <UserBox name={userInfo?.nickname || nickname || "사용자 없음"} />
          <div css={s.infoLayoutStyle}>
            <h1>{userInfo?.nickname || nickname || "사용자 없음"}</h1>
            <div css={{ display: "flex", gap: "0.8rem", alignItems: "center" }}>
              <p css={s.infoStyle}>{userInfo?.userIntro?.expYears || expYears || "N"}년차</p>
              <div css={s.circleStyle} />
              <p css={s.infoStyle}>{userInfo?.userIntro?.job || job || "직무 미제공"}</p>
            </div>
          </div>
        </div>

        <CloseIcon
          width={23}
          height={23}
          css={s.iconStyle}
          onClick={() => {
            setRoomId(null);
          }}
        />
      </header>
      <Divider />
      <div css={s.scrollStyle} ref={scrollRef}>
        {[...dmLogs].reverse().map((chat, index) => (
          <div key={`${index}-${chat.id}`} css={s.layoutStyle(chat.user.id === myId)}>
            {chat.user.id !== myId && <UserBox name={chat.user.nickname} size="medium" />}
            <div css={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              <ChatPanel
                isUser={chat.user.id === myId}
                message={chat.content}
                time={chatFormatTime(chat.createdDate)}
                isDM={true}
              />
            </div>
          </div>
        ))}
      </div>
      <div>
        <Input
          placeholder={roomId === -1 ? "상대에게 첫 DM을 보내보세요!" : PLACEHOLDER.CHAT}
          rightIcon={<SendIcon width={14} height={14} />}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") handleSendMessage();
          }}
        />
      </div>
    </section>
  );
};

export default ChatRoom;
