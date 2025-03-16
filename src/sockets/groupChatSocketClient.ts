import { createClient } from "@/sockets/createClient";

const accessToken = localStorage.getItem("accessToken");

// 그룹챗 구독 및 메시지 전송을 위한 클라이언트 생성
export const createStompClient = (roomId: number, onMessageReceived: (message: string) => void) => {
  const client = createClient((client) => {
    console.log(`Connected to Chatroom ${roomId}`);

    client.subscribe(`/sub/chats/${roomId}`, (message) => {
      console.log("Received message: ", message.body);
      onMessageReceived(message.body);
    });
  });

  client.activate();

  // 메시지 전송 함수 반환
  const sendMessage = (messageBody: string) => {
    if (!client.connected) {
      console.error("STOMP Client is not connected");
      return;
    }
    client.publish({
      destination: `/pub/chats/${roomId}`,
      body: JSON.stringify({ content: messageBody }),
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  };

  return { client, sendMessage };
};

// 메시지 전송 함수 (DM 생성 및 DM 전송)
export const sendMessage = (roomId: number | null, userId: number | null, messageBody: string) => {
  const destination = roomId ? `/pub/chats/${roomId}` : "/pub/chats/create";
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
