import { RotateLogoIcon } from "@/assets/svg";
import { Button } from "@/components";
import * as s from "@pages/DMPage/components/EmptyPanel/EmptyPanel.styles";

const EmptyPanel = () => {
  return (
    <div css={s.wrapperStyle}>
      <RotateLogoIcon width={80} height={70} css={{ marginBottom: "2.7rem", flexShrink: "0" }} />
      <h1>내 메시지</h1>
      <p css={{ marginBottom: "1rem" }}>새로운 메시지를 전송해보세요</p>
      <Button>메시지 보내기</Button>
    </div>
  );
};

export default EmptyPanel;
