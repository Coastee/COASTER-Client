import * as StompJs from "@stomp/stompjs";
import SockJS from "sockjs-client";

const STOMP_URL = import.meta.env.VITE_STOMP_URL;
const STOMP_HTTPS_URL = import.meta.env.VITE_STOMP_HTTPS_URL;
const accessToken = localStorage.getItem("accessToken");

// STOMP 클라이언트 생성 함수
const createClient = (onConnect?: (client: StompJs.Client) => void) => {
  const client = new StompJs.Client({
    brokerURL: STOMP_URL,
    reconnectDelay: 5000,
    debug: (str) => console.log(str),
    connectHeaders: {
      Authorization: `Bearer ${accessToken}`,
    },
    onConnect: () => onConnect?.(client),
    onStompError: (frame) => console.error("STOMP Error: ", frame),
  });

  client.webSocketFactory = () => {
    const socket = new SockJS(import.meta.env.VITE_STOMP_HTTPS_URL);
    return socket as unknown as StompJs.IStompSocket;
  };

  return client;
};

// DM 구독 및 메시지 전송을 위한 클라이언트 생성
export const createStompClient = (roomId: number, onMessageReceived: (message: string) => void) => {
  const client = createClient((client) => {
    console.log(`Connected to room ${roomId}`);

    client.subscribe(`/sub/dms/${roomId}`, (message) => {
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
      destination: `/pub/dms/${roomId}`,
      body: JSON.stringify({ content: messageBody }),
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  };

  return { client, sendMessage };
};

// 메시지 전송 함수 (DM 생성 및 DM 전송)
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
