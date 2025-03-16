import * as StompJs from "@stomp/stompjs";
import SockJS from "sockjs-client";

const STOMP_URL = import.meta.env.VITE_STOMP_URL;
const STOMP_HTTPS_URL = import.meta.env.VITE_STOMP_HTTPS_URL;
const accessToken = localStorage.getItem("accessToken");

// STOMP 클라이언트 생성 함수
export const createClient = (onConnect?: (client: StompJs.Client) => void) => {
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
    const socket = new SockJS(STOMP_HTTPS_URL);
    return socket as unknown as StompJs.IStompSocket;
  };

  return client;
};
