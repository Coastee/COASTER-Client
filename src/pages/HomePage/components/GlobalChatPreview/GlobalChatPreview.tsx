import { PinIcon } from "@/assets/svg";
import { Button } from "@/components";
import * as s from "./GlobalChatPreview.styles";

const chatDummy = [
  {
    id: 1,
    name: "김준희",
    message: "실시간 채팅ㅋㅋㅋㅋㅋㅋ으하하 무슨 말을 적어볼까나 실시간 채팅ㅋㅋㅋㅋㅋㅋ으하하 무슨 말을 적어볼까나",
  },
  { id: 2, name: "남다은", message: "실시간 채팅ㅋㅋㅋㅋㅋㅋ" },
  { id: 3, name: "이민호", message: "안녕하세요! 반갑습니다." },
  { id: 4, name: "박지성", message: "오늘 날씨가 좋네요." },
  { id: 5, name: "최수영", message: "다들 점심 뭐 드셨나요?" },
  { id: 6, name: "김태희", message: "프로젝트 진행 상황 공유합니다." },
  { id: 7, name: "정우성", message: "주말에 뭐 하시나요?" },
  { id: 8, name: "한지민", message: "좋은 아침입니다!" },
  { id: 9, name: "송중기", message: "회의는 언제 시작하나요?" },
  { id: 10, name: "전지현", message: "다음 주 일정 확인 부탁드립니다." },
];

const GlobalChatPreview = () => {
  return (
    <div css={s.layoutStyle}>
      <div css={s.noticeStyle}>
        <PinIcon width={10} height={13} />
        <p>[공지필독]</p>
        <p>처음 오신 분들은 공지를 꼭 읽어주세요. 왜냐하면 이 문장은 긴 문장이기 때문입니다.</p>
      </div>
      <div css={s.chatStyle}>
        {chatDummy.slice(0, 6).map((chat) => {
          return (
            <div css={s.chatBarStyle} key={chat.id}>
              <Button variant="tertiary" size="medium">
                {chat.name}
              </Button>
              <p>{chat.message}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GlobalChatPreview;
