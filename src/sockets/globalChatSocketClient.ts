import { createClient } from "@/sockets/createClient";

const accessToken = localStorage.getItem("accessToken");

// 전체 채팅방 연결(sub), 실시간 메시지 전송(pub)
export const createStompClient = (roomId: number, onMessageReceived: (message: string) => void) => {
  const client = createClient((client) => {
    console.log(`Connected to Global Chatroom ${roomId}`);

    client.subscribe(`/sub/chats/${roomId}`, (message) => {
      console.log("Received message: ", message.body);
      onMessageReceived(message.body);
    });
  });

  client.activate();

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
