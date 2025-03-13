// // socket.ts

// import * as StompJs from "@stomp/stompjs";
// import SockJS from "sockjs-client";

// const STOMP_URL = import.meta.env.VITE_STOMP_URL;
// const STOMP_HTTPS_URL = import.meta.env.VITE_STOMP_HTTPS_URL;
// const accessToken = localStorage.getItem("accessToken");

// // STOMP 클라이언트를 설정하는 함수
// export const createStompClient = (roomId: number, onMessageReceived: (message: string) => void) => {
//   const client = new StompJs.Client({
//     brokerURL: STOMP_URL, // 환경 변수에서 brokerURL을 가져옵니다
//     reconnectDelay: 5000, // 자동 재연결 설정
//     debug: (str) => {
//       console.log(str); // 디버깅용
//     },
//     connectHeaders: {
//       Authorization: `Bearer ${accessToken}`,
//     },
//   });

//   // 웹소켓 URL 설정 및 SockJS 사용
//   client.webSocketFactory = () => {
//     const sockjs = new SockJS(STOMP_HTTPS_URL); // 원하는 웹소켓 URL로 변경
//     return sockjs as any; // SockJS를 IStompSocket 타입으로 변환
//   };

//   // 연결이 완료되면 호출되는 콜백 함수
//   client.onConnect = (frame) => {
//     console.log("Connected: " + frame);

//     // DM 관련 구독 경로로 변경 (채팅방 ID가 들어가야 함)
//     client.subscribe(`/sub/dms/${roomId}`, (message) => {
//       console.log("Received message: ", message.body);
//       onMessageReceived(message.body); // 메시지를 받으면 콜백 함수로 전달
//     });

//     // 메시지를 보내는 함수 반환
//     const sendMessage = (userId: number, messageBody: string) => {
//       if (!client.connected) {
//         console.error("STOMP Client is not connected");
//         return;
//       }

//       client.publish({
//         destination: "/pub/dms/create",
//         body: JSON.stringify({ userId, content: messageBody }),
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       });
//     };

//     // STOMP 연결 오류 처리
//     client.onStompError = (frame) => {
//       console.error("STOMP Error: ", frame);
//     };

//     return { client, sendMessage }; // 클라이언트와 sendMessage 반환
//   };
// };
import * as StompJs from "@stomp/stompjs";
import SockJS from "sockjs-client";

const STOMP_URL = import.meta.env.VITE_STOMP_URL;
const STOMP_HTTPS_URL = import.meta.env.VITE_STOMP_HTTPS_URL;
const accessToken = localStorage.getItem("accessToken");

// STOMP 클라이언트를 생성하는 함수 (DM 구독 및 메시지 전송)
export const createStompClient = (roomId: number, onMessageReceived: (message: string) => void) => {
  const client = new StompJs.Client({
    brokerURL: STOMP_URL,
    reconnectDelay: 5000,
    debug: (str) => console.log(str),
    connectHeaders: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  client.webSocketFactory = () => new SockJS(STOMP_HTTPS_URL) as any;

  client.onConnect = (frame) => {
    console.log("Connected: " + frame);

    client.subscribe(`/sub/dms/${roomId}`, (message) => {
      console.log("Received message: ", message.body);
      onMessageReceived(message.body);
    });
  };

  client.onStompError = (frame) => console.error("STOMP Error: ", frame);

  client.activate();

  const sendMessage = (messageBody: string) => {
    if (!client.connected) {
      console.error("STOMP Client is not connected");
      return;
    }

    client.publish({
      destination: `/pub/dms/${roomId}`,
      body: JSON.stringify({ content: messageBody }),
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  };

  return { client, sendMessage };
};

// 최초 DM 생성 함수 (roomId 없이 실행 가능)
export const sendInitialMessage = (userId: number, messageBody: string) => {
  const client = new StompJs.Client({
    brokerURL: STOMP_URL,
    reconnectDelay: 5000,
    debug: (str) => console.log(str),
    connectHeaders: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  client.webSocketFactory = () => new SockJS(STOMP_HTTPS_URL) as any;

  client.onConnect = () => {
    client.publish({
      destination: "/pub/dms/create",
      body: JSON.stringify({ userId, content: messageBody }),
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    client.deactivate();
  };

  client.onStompError = (frame) => {
    console.error("STOMP Error: ", frame);
    console.error("STOMP Headers: ", frame.headers);
    console.error("STOMP Body: ", frame.body);
  };

  client.activate();
};

// 이미 대화 중인 DM에 메시지 전송 함수
export const sendMessageToRoom = (roomId: number, messageBody: string) => {
  const client = new StompJs.Client({
    brokerURL: STOMP_URL,
    reconnectDelay: 5000,
    debug: (str) => console.log(str),
    connectHeaders: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  client.webSocketFactory = () => new SockJS(STOMP_HTTPS_URL) as any;

  client.onConnect = () => {
    client.publish({
      destination: `/pub/dms/${roomId}`,
      body: JSON.stringify({ content: messageBody }),
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    client.deactivate();
  };

  client.onStompError = (frame) => console.error("STOMP Error: ", frame);

  client.activate();
};
