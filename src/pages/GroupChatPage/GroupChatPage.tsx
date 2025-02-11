import ChatPanel from "@/components/ChatPanel/ChatPanel";
import ChatInfoList from "@/pages/GroupChatPage/components/ChatInfoList/ChatInfoList";
import { DUMMY_CHAT_MESSAGES } from "@/pages/GroupChatPage/constants/dummy";

const GroupChatPage = () => {
  return (
    <div css={{ width: "100%" }}>
      <ChatInfoList name="남다은" />
      {DUMMY_CHAT_MESSAGES.map((chat, index) => (
        <ChatPanel
          key={`${index}-${chat.time}`}
          isUser={chat.isUser}
          message={chat.message}
          time={chat.time}
          isDM={false}
        />
      ))}
    </div>
  );
};

export default GroupChatPage;
