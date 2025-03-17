import ChatInfoList from "@/pages/GroupChatPage/components/ChatInfoList/ChatInfoList";
import ChatRoom from "@/pages/GroupChatPage/components/ChatRoom/ChatRoom";
import { useState } from "react";

const GroupChatPage = () => {
  const [selectedRoomId, setSelectedRoomId] = useState<number | null>(null);

  return (
    <div css={{ width: "100%", display: "flex" }}>
      <ChatInfoList name="남다은" setSelectedRoomId={setSelectedRoomId} />
      <ChatRoom />
    </div>
  );
};

export default GroupChatPage;
