import type { DMRoomTypes } from "@/pages/DMPage/types/dmTypes";
import { createClient } from "@/sockets/createClient";

const accessToken = localStorage.getItem("accessToken");

// 특정 DM 채팅방에 연결하여 실시간으로 메시지를 주고받는 STOMP 클라이언트 생성
export const createStompClient = (roomId: number, onMessageReceived: (message: string) => void) => {
  const client = createClient((client) => {
    console.log(`Connected to DM room ${roomId}`);

    client.subscribe(`/sub/dms/${roomId}`, (message) => {
      console.log("Received DM message: ", message.body);
      onMessageReceived(message.body);
    });
  });

  client.activate();

  // 현재 DM 채팅방(roomId)에서 메시지를 전송하는 함수
  // (클라이언트가 연결되지 않은 경우 전송하지 않음)
  const sendMessage = (messageBody: string) => {
    if (!client.connected) {
      console.error("STOMP Client is not connected");
      return;
    }
    client.publish({
      destination: `/pub/dms/${roomId}`,
      body: JSON.stringify({ content: messageBody }),
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  };

  return { client, sendMessage };
};

// 채팅방 리스트 업데이트 된 걸 확인하기 위한 client (가장 최근 메시지가 상단에 올라올 수 있도록)
export const createDMClient = (userId: number, onDMReceived: (dm: DMRoomTypes) => void) => {
  const client = createClient((client) => {
    client.subscribe(`/sub/users/dms/${userId}`, (message) => {
      console.log("New DM received:", message.body);
      const dm = JSON.parse(message.body);
      onDMReceived(dm);
    });
  });

  client.activate();

  return client;
};

// DM 채팅방에 입장하지 않고 1회성으로 메시지만 보낼 때 사용
// 새로운 DM을 생성할 때(roomId: 존재) / 기존 DM방에 메시지를 보낼 때(roomId: null)
export const sendMessage = (roomId: number | null, userId: number | null, messageBody: string) => {
  const destination = roomId ? `/pub/dms/${roomId}` : "/pub/dms/create";
  const body = roomId ? { content: messageBody } : { userId, content: messageBody };

  const client = createClient((client) => {
    client.publish({
      destination,
      body: JSON.stringify(body),
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    client.deactivate();
  });

  client.activate();
};
