import { SendIcon } from "@/assets/svg";
import { Input } from "@/components";
import ChatPanel from "@/components/ChatPanel/ChatPanel";
import TimeChip from "@/components/TimeChip/TimeChip";
import { PLACEHOLDER } from "@/constants/placeholder";
import UserBox from "@/pages/GroupChatPage/components/UserBox/UserBox";
import { DUMMY_CHAT_MESSAGES } from "@/pages/GroupChatPage/constants/dummy";
import * as s from "@pages/GroupChatPage/components/ChatRoom/ChatRoom.styles";

const ChatRoom = () => {
  return (
    <div css={s.wrapperStyle}>
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
      <Input placeholder={PLACEHOLDER.CHAT} rightIcon={<SendIcon width={14} height={14} />} />
    </div>
  );
};

export default ChatRoom;
