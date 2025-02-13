import { HamburgerIcon, RotateLogoIcon, SendIcon } from "@/assets/svg";
import { Input, UserBox } from "@/components";
import ChatPanel from "@/components/ChatPanel/ChatPanel";
import TimeChip from "@/components/TimeChip/TimeChip";

import { PLACEHOLDER } from "@/constants/placeholder";
import { DUMMY_CHAT_MESSAGES } from "@/pages/GroupChatPage/constants/dummy";
import * as s from "@pages/GroupChatPage/components/ChatRoom/ChatRoom.styles";
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
      <header css={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div css={s.titleLayoutStyle}>
          <RotateLogoIcon width={25} height={22} />
          {/* 임시 더미 */}
          <h1 css={s.titleStyle}>강남 오프라인</h1>
          <TimeChip size="large" time="11/2 (월) 18:30" />
        </div>
        <HamburgerIcon width={23} height={15} style={{ cursor: "pointer" }} onClick={() => {}} />
      </header>
      <div css={s.scrollStyle} ref={scrollRef}>
        {DUMMY_CHAT_MESSAGES.map((chat, index) => (
          <div key={`${index}-${chat.time}`} css={s.layoutStyle(chat.isUser)}>
            {!chat.isUser && <UserBox name={chat.userName} />}

            <div css={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              <div css={s.nameBoxStyle(chat.isUser)}>
                {chat.userName}
                <TimeChip time={chat.time} />
              </div>
              <ChatPanel isUser={chat.isUser} message={chat.message} time={chat.time} isDM={false} />
            </div>
          </div>
        ))}
      </div>
      <Input placeholder={PLACEHOLDER.CHAT} rightIcon={<SendIcon width={14} height={14} />} />
    </section>
  );
};

export default ChatRoom;
