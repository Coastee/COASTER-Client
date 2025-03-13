import ChatRoom from "@/pages/DMPage/components/ChatRoom/ChatRoom";
import DMList from "@/pages/DMPage/components/DMList/DMList";
import EmptyPanel from "@/pages/DMPage/components/EmptyPanel/EmptyPanel";
import { useDmList } from "@/pages/DMPage/hooks/useDm";
import { createStompClient, sendInitialMessage } from "@/sockets/\bstomp";

import { useEffect, useState } from "react";

const DMPage = () => {
  const [isChatting, setIsChatting] = useState(false);
  const [messages, setMessages] = useState<string[]>([]); // 메시지 목록 상태
  const [roomId, setRoomId] = useState<number | null>(null); // roomId 상태를 null로 초기화
  const [userId, setUserId] = useState<number | null>(null); // roomId 상태를 null로 초기화
  const [client, setClient] = useState<any>(null); // STOMP 클라이언트 상태 추가

  const { data } = useDmList();
  const dmList = data?.result.dmRoomList || [];

  useEffect(() => {
    console.log(dmList);
  }, [dmList]);

  // 선택한 roomId에 대해 STOMP 구독 설정
  useEffect(() => {
    if (roomId) {
      if (client) {
        client.client.deactivate(); // 기존 구독 해제
      }

      const { client: newClient, sendMessage } = createStompClient(roomId, (message) => {
        setMessages((prev) => [...prev, message]); // 메시지를 상태에 추가
      });

      setClient({ client: newClient, sendMessage }); // 새 STOMP 클라이언트 저장
    }
  }, [roomId]);

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

    if (roomId && client) {
      client.sendMessage(message);
    } else {
      console.error("No active conversation (roomId is null or client is not connected)");
    }
  };

  return (
    <>
      <button type="button" onClick={handleCreateDM} css={{ backgroundColor: "white" }}>
        User 1과의 DM 생성
      </button>
      <button type="button" onClick={handleSendMessage} css={{ backgroundColor: "white" }}>
        User 1과의 DM하기
      </button>
      <DMList dmList={dmList} setRoomId={setRoomId} setUserId={setUserId} setIsChatting={setIsChatting} />
      {isChatting ? (
        <ChatRoom roomId={roomId} userId={userId} dmList={dmList} />
      ) : (
        <EmptyPanel onClick={() => setIsChatting(true)} />
      )}
    </>
  );
};

export default DMPage;
