import ChatRoom from "@/pages/DMPage/components/ChatRoom/ChatRoom";
import DMList from "@/pages/DMPage/components/DMList/DMList";
import EmptyPanel from "@/pages/DMPage/components/EmptyPanel/EmptyPanel";
import { useDmList } from "@/pages/DMPage/hooks/useDm";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const DMPage = () => {
  const { state } = useLocation();
  const { userId: memberUserId, dmRoomId, nickname, expYears, job, profileImage } = state ?? {};
  const receivedRoomId = state ? dmRoomId ?? -1 : null;

  const [roomId, setRoomId] = useState<number | null>(receivedRoomId);
  const [userId, setUserId] = useState<number | null>(memberUserId);

  const { data } = useDmList();
  const dmList = data?.result.dmRoomList || [];

  console.log("roomId", roomId);

  return (
    <>
      <DMList dmList={dmList} setRoomId={setRoomId} setUserId={setUserId} />
      {roomId === null ? (
        <EmptyPanel onClick={() => setRoomId(dmList[0]?.id || null)} />
      ) : (
        <ChatRoom
          dmList={dmList}
          userId={userId}
          roomId={roomId}
          setRoomId={setRoomId}
          nickname={nickname}
          expYears={expYears}
          job={job}
          profileImage={profileImage}
        />
      )}
    </>
  );
};

export default DMPage;
