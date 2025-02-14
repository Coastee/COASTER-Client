import ChatInfoList from "@/pages/GroupChatPage/components/ChatInfoList/ChatInfoList";
import ChatRoom from "@/pages/GroupChatPage/components/ChatRoom/ChatRoom";

const GroupChatPage = () => {
  return (
    <div css={{ width: "100%", display: "flex" }}>
      {/* 임의 더미 넣어둠 */}
      <ChatInfoList name="남다은" />
      <ChatRoom />
    </div>
  );
};

export default GroupChatPage;
