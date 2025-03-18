import ChatEmptyPanel from "@/pages/GroupChatPage/components/ChatEmptyPanel/ChatEmptyPanel";
import ChatInfoList from "@/pages/GroupChatPage/components/ChatInfoList/ChatInfoList";
import ChatRoom from "@/pages/GroupChatPage/components/ChatRoom/ChatRoom";
import { useFetchGroupChat } from "@/pages/GroupChatPage/hooks/useFetchGroupChat";
import type { ChatRoomTypes } from "@/pages/GroupChatPage/types";
import type {} from "@/pages/GroupChatPage/types/groupChatLogTypes";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const GroupChatPage = () => {
  const [selectedRoom, setSelectedRoom] = useState<ChatRoomTypes | null>(null);

  const { pathname } = useLocation();
  const serverId = Number(pathname.split("/")[1]);

  const { data: ownerList } = useFetchGroupChat(serverId, "owner");
  const { data: joinedList } = useFetchGroupChat(serverId, "joined");

  return (
    <div css={{ width: "100%", display: "flex" }}>
      <ChatInfoList name="남다은" ownerList={ownerList} joinedList={joinedList} setSelectedRoom={setSelectedRoom} />
      {selectedRoom?.id ? <ChatRoom selectedRoomId={selectedRoom.id} title={selectedRoom.title} /> : <ChatEmptyPanel />}
    </div>
  );
};

export default GroupChatPage;
