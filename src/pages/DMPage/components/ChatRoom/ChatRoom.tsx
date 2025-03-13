import { ExitIcon, SendIcon } from "@/assets/svg";
import { Divider, Input, UserBox } from "@/components";
import ChatPanel from "@/components/ChatPanel/ChatPanel";

import { PLACEHOLDER } from "@/constants/placeholder";
import { useScrollToBottom } from "@/hooks/useScroll";
import { useDmLogs } from "@/pages/DMPage/hooks/useDm";
import { createStompClient } from "@/sockets/\bstomp"; // STOMP 관련 함수 추가
import type { DMRoomTypes } from "@/pages/DMPage/types/dmTypes";
import * as s from "@pages/DMPage/components/ChatRoom/ChatRoom.styles";
import { useEffect, useState } from "react";

interface ChatRoomProps {
  roomId: number;
  userId: number;
  dmList: DMRoomTypes[];
}

const ChatRoom = ({ roomId, userId }: ChatRoomProps) => {
  const scrollRef = useScrollToBottom();
  const [message, setMessage] = useState(""); // 입력 메시지 상태 관리
  const [dmLogs, setDmLogs] = useState<DMRoomTypes[]>([]); // 대화 내용 상태
  const [stompClient, setStompClient] = useState<any>(null); // STOMP 클라이언트 상태
  const myId = 19;

  const { data } = useDmLogs(roomId);

  useEffect(() => {
    if (roomId) {
      // STOMP 클라이언트 연결 및 구독 설정
      const { client, sendMessage } = createStompClient(roomId, (messageContent: string) => {
        // 받은 메시지 처리
        const messageData = JSON.parse(messageContent); // 메시지 문자열을 JSON으로 파싱
        const newMessage = {
          id: messageData.id,
          user: messageData.user,
          content: messageData.content,
          createdDate: new Date(...messageData.createdDate), // receivedDate 배열을 Date 객체로 변환
        };

        setDmLogs((prevLogs) => {
          // 메시지 중복 방지: 이미 같은 ID의 메시지가 있는지 체크
          if (!prevLogs.find((msg) => msg.id === newMessage.id)) {
            return [newMessage, ...prevLogs]; // 새 메시지를 맨 앞에 추가
          }
          return prevLogs;
        });
      });

      setStompClient({ client, sendMessage });
    }

    // 컴포넌트 언마운트 시 STOMP 클라이언트 비활성화
    return () => {
      if (stompClient) {
        stompClient.client.deactivate();
      }
    };
  }, [roomId]);

  // 초기 로딩 후 불러온 메시지 처리
  useEffect(() => {
    if (data && data.result && data.result.dmList) {
      const initialMessages = data.result.dmList.map((message: any) => ({
        id: message.id,
        user: message.user,
        content: message.content,
        createdDate: new Date(...message.createdDate), // receivedDate 배열을 Date 객체로 변환
      }));
      setDmLogs(initialMessages);
    }
  }, [data]);

  const handleSendMessage = () => {
    if (stompClient && message.trim() !== "") {
      stompClient.sendMessage(message); // 메시지 보내기
      const newMessage = {
        id: Date.now(), // 임시 ID 생성
        user: { id: myId, nickname: "나" }, // 사용자 정보
        content: message,
        createdDate: new Date(), // 현재 시간
      };
      setDmLogs((prevLogs) => [newMessage, ...prevLogs]); // 보내는 메시지는 맨 앞에 추가
      setMessage(""); // 입력창 초기화
    } else {
      console.error("STOMP 클라이언트가 없거나 메시지가 비어있습니다.");
    }
  };

  useEffect(() => {
    console.log("dmLogs: ", dmLogs);
  }, [dmLogs]);

  if (!data) return <p>Loading...</p>;

  return (
    <section css={s.wrapperStyle}>
      <header css={s.headerStyle}>
        <div css={s.titleLayoutStyle}>
          {/* userIntro의 expYears와 job에 대한 안전한 접근 */}
          <UserBox name={dmLogs[0]?.user?.nickname ?? "사용자 없음"} />
          <div css={s.infoLayoutStyle}>
            <h1>{dmLogs[0]?.user?.nickname ?? "사용자 없음"}</h1>
            <div css={{ display: "flex", gap: "0.8rem", alignItems: "center" }}>
              <p css={s.infoStyle}>
                {dmLogs[0]?.user?.userIntro?.expYears ?? "경력 미제공"}년차
              </p>
              <div css={s.circleStyle} />
              <p css={s.infoStyle}>{dmLogs[0]?.user?.userIntro?.job ?? "직무 미제공"}</p>
            </div>
          </div>
        </div>
        <ExitIcon width={23} height={23} css={s.iconStyle} onClick={() => {}} />
      </header>
      <Divider />
      <div css={s.scrollStyle} ref={scrollRef}>
        {[...dmLogs].reverse().map((chat, index) => (
          <div key={`${index}-${chat.id}`} css={s.layoutStyle(chat.user.id === myId)}>
            {!(chat.user.id === myId) && <UserBox name={chat.user.nickname} size="medium" />}
            <div css={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              <ChatPanel
                isUser={chat.user.id === myId}
                message={chat.content}
                time={chat.createdDate.toString()}
                isDM={true}
              />
            </div>
          </div>
        ))}
      </div>
      <div>
        <Input
          placeholder={PLACEHOLDER.CHAT}
          rightIcon={<SendIcon width={14} height={14} />}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") handleSendMessage();
          }}
        />
      </div>
    </section>
  );
};

export default ChatRoom;
