import { ArrowDownIcon, ExitIcon, PinIcon, SendIcon } from "@/assets/svg";
import { Divider, Input } from "@/components";

import ChatPanel from "@/components/ChatPanel/ChatPanel";
import { PATH } from "@/constants/path";
import { useScrollToBottom } from "@/hooks/useScroll";
import { useGlobalChatLogs } from "@/pages/GlobalChatPage/hooks/useGlobalChat";
import type { ChatTypes } from "@/pages/GlobalChatPage/types/globalChatTypes";
import type { HomeDataTypes } from "@/pages/HomePage/types/homeDataTypes";
import { parseDateArray } from "@/utils/dateTime";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as s from "./GlobalChatRoom.styles";

interface GlobalChatRoomProps {
  chat: HomeDataTypes["chat"];
}

const GlobalChatRoom = ({ chat }: GlobalChatRoomProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const serverId = Number(pathname.split("/")[1]);

  const { data } = useGlobalChatLogs(serverId);
  const [globalChatLogs, setGlobalChatLogs] = useState<ChatTypes[]>([]);
  const myId = Number(localStorage.getItem("userId"));

  const scrollRef = useScrollToBottom();

  const [isNoticeOpened, setIsNoticeOpened] = useState(false);

  const formatParsedDate = (dateArray: number[]) => {
    const { hour, minute, meridiem } = parseDateArray(dateArray);
    return `${meridiem} ${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
  };

  console.log("chat: ", chat);
  console.log("data: ", data);
  console.log("globalChatLogs: ", globalChatLogs);

  useEffect(() => {
    if (data?.result.chatList) {
      setGlobalChatLogs(data.result.chatList);
    }
  }, [data]);

  return (
    <section css={s.wrapperStyle}>
      <header css={s.headerStyle}>
        <div css={{ display: "flex", gap: "2rem" }}>
          <div css={s.titleStyle}>
            <h1>뷰티/케어</h1>
            <h2>서버 전체 채팅</h2>
          </div>
          <div css={{ position: "relative" }}>
            <div css={s.noticeButtonStyle(isNoticeOpened)}>
              <div
                css={s.noticeTitleStyle}
                onClick={() => setIsNoticeOpened(!isNoticeOpened)}
                onKeyDown={() => setIsNoticeOpened(!isNoticeOpened)}
              >
                <PinIcon width={11} height={15} />
                <p>공지</p>
                <ArrowDownIcon width={14} height={7} />
              </div>
              {isNoticeOpened && (
                <div css={s.noticeContentStyle}>
                  처음 오신 분들은 공지를 꼭 읽어주시길 바랍니다. 상대방을 향한 비방, 욕설글은 정지 대상이 될 수
                  있습니다. 이 점 유의하여 올바른 서비스 사용을 해주 시길 바랍니다. 모든 유저가 행복한 채팅 환경을 조
                  성해주시길 바랍니다.
                </div>
              )}
            </div>
          </div>
        </div>

        <ExitIcon
          width={23}
          height={23}
          css={s.iconStyle}
          onClick={() => {
            navigate(PATH.HOME_RELATIVE);
          }}
        />
      </header>
      <Divider />
      <div css={s.scrollStyle} ref={scrollRef}>
        {globalChatLogs &&
          globalChatLogs.length > 0 &&
          globalChatLogs.map((chat) => (
            <div key={chat.id} css={s.layoutStyle}>
              <p>{chat.user.nickname}</p>
              <div css={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                <ChatPanel
                  isUser={chat.user.id === myId}
                  message={chat.content}
                  time={formatParsedDate(chat.createdDate)}
                  isDM
                />
              </div>
            </div>
          ))}
      </div>

      <Input
        placeholder="채팅을 입력해주세요 (상대방을 향한 비방, 욕설글은 정지 대상이 될 수 있습니다.)"
        rightIcon={<SendIcon width={14} height={14} />}
      />
    </section>
  );
};

export default GlobalChatRoom;
