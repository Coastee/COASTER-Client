import SideMenuBar from "@/components/SideMenuBar/SideMenuBar";
import ChatEmptyPanel from "@/pages/ChatPage/components/ChatEmptyPanel/ChatEmptyPanel";
import ChatInfoList from "@/pages/ChatPage/components/ChatInfoList/ChatInfoList";
import ChatRoom from "@/pages/ChatPage/components/ChatRoom/ChatRoom";
import { useFetchSideChatList } from "@/pages/ChatPage/hooks/useSideChatList";
import type { ChatRoomTypes } from "@/pages/ChatPage/types";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import * as s from "./ChatPage.styles";

const ChatPage = ({ type }: { type: "groups" | "meetings" }) => {
  const { state, pathname } = useLocation();
  const [selectedRoom, setSelectedRoom] = useState<ChatRoomTypes | null>(null);

  const param = useParams();
  const serverId = Number(param.serverId);

  const { data: ownerList } = useFetchSideChatList(Number(serverId), type, "owner");
  const { data: joinedList } = useFetchSideChatList(Number(serverId), type, "joined");

  useEffect(() => {
    const roomId = Number(state?.roomId);

    const allRooms = [...(ownerList?.chatRoomList ?? []), ...(joinedList?.chatRoomList ?? [])];
    const room = allRooms.find((room) => room.id === roomId);

    if (room) {
      setSelectedRoom(room);
    }
  }, [state?.roomId, ownerList, joinedList]);

  const menu = pathname.split("/")[2];

  return (
    <div css={s.layoutStyle}>
      <ChatInfoList menu={menu} ownerList={ownerList} joinedList={joinedList} setSelectedRoom={setSelectedRoom} />
      {selectedRoom?.id ? (
        <div css={s.backgroundStyle}>
          <ChatRoom type={type} serverId={serverId} selectedRoomId={selectedRoom.id} title={selectedRoom.title} />
          <SideMenuBar
            serverId={serverId}
            chatRoomType={type}
            selectedItemId={selectedRoom.id}
            setSelectedRoom={setSelectedRoom}
          />
        </div>
      ) : (
        <ChatEmptyPanel />
      )}
    </div>
  );
};

export default ChatPage;
