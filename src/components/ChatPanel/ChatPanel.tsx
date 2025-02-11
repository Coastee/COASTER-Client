import * as s from "@/components/ChatPanel/ChatPanel.style";

interface ChatPanelProps {
  isUser: boolean;
  message: string;
  time: string;
}

const ChatPanel = ({ isUser, message, time }: ChatPanelProps) => {
  return (
    <>
      <div css={s.wrapperStyle(isUser)}>
        <p css={s.messageStyle}>{message}</p>
      </div>
      <div css={s.timeWrapperStyle(isUser)}>
        <p css={s.timeStyle}>{time}</p>
      </div>
    </>
  );
};

export default ChatPanel;
