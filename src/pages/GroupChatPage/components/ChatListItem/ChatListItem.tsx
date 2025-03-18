import { RotateLogoIcon, StarIcon } from "@/assets/svg";
import { Divider } from "@/components";
import * as s from "@/pages/GroupChatPage/components/ChatListItem/ChatListItem.styles";
import { theme } from "@/styles/theme/theme";
import { useState } from "react";

interface ChatListItemProps {
  name: string;
  index: number;
  length: number;
}

const ChatListItem = ({ name, index, length }: ChatListItemProps) => {
  const [isMarked, setIsMarked] = useState(false);

  const toggle = () => {
    setIsMarked((prev) => !prev);
  };

  return (
    <>
      <div css={s.listWrapperStyle(isMarked)}>
        <span css={s.layoutStyle}>
          <RotateLogoIcon width={14} height={12} css={{ flexShrink: "0" }} />
          {name}
        </span>
        <StarIcon width={18} height={18} onClick={toggle} css={{ flexShrink: "0", cursor: "pointer" }} />
      </div>
      {length > 1 && index < length - 1 && <Divider css={{ backgroundColor: theme.color.dark5 }} />}
    </>
  );
};

export default ChatListItem;
