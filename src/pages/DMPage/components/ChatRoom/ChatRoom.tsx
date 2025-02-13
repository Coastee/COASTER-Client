import { ExitIcon, SendIcon } from "@/assets/svg";
import { Divider, Input, UserBox } from "@/components";
import ChatPanel from "@/components/ChatPanel/ChatPanel";

import { PLACEHOLDER } from "@/constants/placeholder";
import { DM_MESSAGES } from "@/pages/DMPage/constants/dummy";
import * as s from "@pages/DMPage/components/ChatRoom/ChatRoom.styles";
import { useEffect, useRef } from "react";

const ChatRoom = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  return (
    <section css={s.wrapperStyle}>
      <header css={s.headerStyle}>
        <div css={s.titleLayoutStyle}>
          {/* 임시 더미 */}
          <UserBox name="이영희" />
          <div css={s.infoLayoutStyle}>
            <h1>이영희</h1>
            <div css={{ display: "flex", gap: "0.8rem", alignItems: "center" }}>
              <p css={s.infoStyle}>2년차</p>
              <div css={s.circleStyle} />
              <p css={s.infoStyle}>웹 프론트엔드 개발자</p>
            </div>
          </div>
        </div>
        <ExitIcon width={23} height={23} css={s.iconStyle} onClick={() => {}} />
      </header>
      <Divider />
      <div css={s.scrollStyle} ref={scrollRef}>
        {DM_MESSAGES.map((chat, index) => (
          <div key={`${index}-${chat.time}`} css={s.layoutStyle(chat.isUser)}>
            {!chat.isUser && <UserBox name={chat.userName} size="medium" />}

            <div css={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              <ChatPanel isUser={chat.isUser} message={chat.message} time={chat.time} isDM={true} />
            </div>
          </div>
        ))}
      </div>
      <Input placeholder={PLACEHOLDER.CHAT} rightIcon={<SendIcon width={14} height={14} />} />
    </section>
  );
};

export default ChatRoom;
