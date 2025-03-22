import { RotateLogoIcon } from "@/assets/svg";
import * as s from "@pages/DMPage/components/EmptyPanel/EmptyPanel.styles";

const ChatEmptyPanel = () => {
  return (
    <div css={s.wrapperStyle}>
      <RotateLogoIcon width={80} height={70} css={{ marginBottom: "2.7rem", flexShrink: "0" }} />
      <h1>채팅방 메시지</h1>
      <p css={{ marginBottom: "1rem" }}>왼쪽 채팅방을 선택해서 대화를 나눠보세요!</p>
    </div>
  );
};

export default ChatEmptyPanel;
