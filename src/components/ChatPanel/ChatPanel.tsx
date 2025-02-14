import * as s from "@/components/ChatPanel/ChatPanel.style";
import TimeChip from "@/components/TimeChip/TimeChip";

interface ChatPanelProps {
  isUser: boolean;
  message: string;
  time: string;
  isDM: boolean;
}

const ChatPanel = ({ isUser, message, time, isDM }: ChatPanelProps) => {
  return (
    <div css={s.wrapperStyle(isUser)}>
      {isUser && isDM && <TimeChip time={time} />}
      <div css={s.messageWrapperStyle(isUser)}>
        <p css={s.messageStyle}>{message}</p>
      </div>
      {!isUser && isDM && <TimeChip time={time} />}
    </div>
  );
};

export default ChatPanel;
