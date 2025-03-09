import { ExitIcon, SendIcon } from "@/assets/svg";
import { Divider, Input } from "@/components";
import ChatPanel from "@/components/ChatPanel/ChatPanel";

import { DM_MESSAGES } from "@/pages/DMPage/constants/dummy";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as s from "./GlobalChatRoom.styles";

const GlobalChatRoom = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  return (
    <section css={s.wrapperStyle}>
      <header css={s.headerStyle}>
        <div css={s.titleStyle}>
          <h1>뷰티/케어</h1>
          <h2>서버 전체 채팅</h2>
        </div>
        <ExitIcon
          width={23}
          height={23}
          css={s.iconStyle}
          onClick={() => {
            navigate("../home");
          }}
        />
      </header>
      <Divider />
      <div css={s.scrollStyle} ref={scrollRef}>
        {DM_MESSAGES.map((chat, index) => (
          <div key={`${index}-${chat.time}`} css={s.layoutStyle}>
            {!chat.isUser && <p> {chat.userName}</p>}

            <div css={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              <ChatPanel isUser={chat.isUser} message={chat.message} time={chat.time} isDM={true} />
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
