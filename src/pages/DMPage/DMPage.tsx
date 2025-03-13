import ChatRoom from "@/pages/DMPage/components/ChatRoom/ChatRoom";
import DMList from "@/pages/DMPage/components/DMList/DMList";
import EmptyPanel from "@/pages/DMPage/components/EmptyPanel/EmptyPanel";
import { sendInitialMessage, sendMessageToRoom } from "@/sockets/\bstomp";
import { useEffect, useState } from "react";

const DMPage = () => {
  const [isChatting, setIsChatting] = useState(false);
  const [messages, setMessages] = useState<string[]>([]); // 메시지 목록 상태
  const [roomId, setRoomId] = useState<number | null>(null); // roomId 상태를 null로 초기화

  // DM을 생성하는 함수 (새로운 DM)
  const handleCreateDM = () => {
    const userId = 1; // 상대방 userId 예시
    const message = "my name is kimjunhee";

    if (!roomId) {
      // roomId가 없으면 새로운 DM 생성
      sendInitialMessage(userId, message);
    }
  };

  // 이미 대화가 존재하는 경우 메시지 전송하는 함수
  const handleSendMessage = () => {
    const message = "third message";

    if (roomId) {
      // roomId가 존재하면 이미 존재하는 DM에 메시지 전송
      sendMessageToRoom(roomId, message);
    } else {
      console.error("No active conversation (roomId is null)");
    }
  };

  useEffect(() => {
    console.log(roomId);
  }, [roomId])

  return (
    <>
      <button type="button" onClick={handleCreateDM} css={{ backgroundColor: "white" }}>
        User 1과의 DM 생성
      </button>
      <button type="button" onClick={handleSendMessage} css={{ backgroundColor: "white" }}>
        User 1과의 DM하기
      </button>
      <DMList setRoomId={setRoomId}/>
      {isChatting ? <ChatRoom /> : <EmptyPanel onClick={() => setIsChatting(true)} />}
    </>
  );
};

export default DMPage;
