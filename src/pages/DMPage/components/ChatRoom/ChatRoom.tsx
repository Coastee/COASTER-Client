import { ExitIcon, SendIcon } from "@/assets/svg";
import { Divider, Input, UserBox } from "@/components";
import ChatPanel from "@/components/ChatPanel/ChatPanel";

import { PLACEHOLDER } from "@/constants/placeholder";
import { useScrollToBottom } from "@/hooks/useScroll";
import { DM_MESSAGES } from "@/pages/DMPage/constants/dummy";
import { useDmLogs } from "@/pages/DMPage/hooks/useDm";
import type { DMRoomTypes } from "@/pages/DMPage/types/dmTypes";
import * as s from "@pages/DMPage/components/ChatRoom/ChatRoom.styles";
import { useEffect } from "react";

interface ChatRoomProps {
  roomId: number;
  userId: number;
  dmList: DMRoomTypes[];
}

const ChatRoom = ({ roomId, userId }: ChatRoomProps) => {
  const scrollRef = useScrollToBottom();
  const { data } = useDmLogs(roomId);
  const myId = 19;

  const dmLogs = data?.result?.dmList ?? [];

  useEffect(() => {
    console.log("dmLogs: ", dmLogs);
  }, [dmLogs]);

  if (!data) return <p>Loading...</p>;
  return (
    <section css={s.wrapperStyle}>
      <header css={s.headerStyle}>
        <div css={s.titleLayoutStyle}>
          {/* 임시 더미 */}
          <UserBox name={dmLogs[0].user.nickname} />
          <div css={s.infoLayoutStyle}>
            <h1>{dmLogs[0].user.nickname} </h1>
            <div css={{ display: "flex", gap: "0.8rem", alignItems: "center" }}>
              <p css={s.infoStyle}>{dmLogs[0].user.userIntro.expYears}년차</p>
              <div css={s.circleStyle} />
              <p css={s.infoStyle}>{dmLogs[0].user.userIntro.job}</p>
            </div>
          </div>
        </div>
        <ExitIcon width={23} height={23} css={s.iconStyle} onClick={() => {}} />
      </header>
      <Divider />
      <div css={s.scrollStyle} ref={scrollRef}>
        {dmLogs.map((chat, index) => (
          <div key={`${index}-${chat.id}`} css={s.layoutStyle(chat.user.id === myId)}>
            {!(chat.user.id === myId) && <UserBox name={chat.user.nickname} size="medium" />}

            <div css={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              <ChatPanel isUser={chat.user.id === myId} message={chat.content} time={chat.createdDate.toString()} isDM={true} />
            </div>
          </div>
        ))}
      </div>
      <Input placeholder={PLACEHOLDER.CHAT} rightIcon={<SendIcon width={14} height={14} />} />
    </section>
  );
};

export default ChatRoom;
