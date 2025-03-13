import ChatRoom from "@/pages/DMPage/components/ChatRoom/ChatRoom";
import DMList from "@/pages/DMPage/components/DMList/DMList";
import EmptyPanel from "@/pages/DMPage/components/EmptyPanel/EmptyPanel";
import { useDmList } from "@/pages/DMPage/hooks/useDm";
import { useState } from "react";

const DMPage = () => {
  const [roomId, setRoomId] = useState<number | null>(null);
  const [userId, setUserId] = useState<number | null>(null);

  const { data } = useDmList();
  const dmList = data?.result.dmRoomList || [];
  return (
    <>
      <DMList dmList={dmList} setRoomId={setRoomId} setUserId={setUserId} />
      {roomId ? <ChatRoom roomId={roomId} dmList={dmList} /> : <EmptyPanel onClick={() => setRoomId(dmList[0].id)} />}
    </>
  );
};

export default DMPage;
