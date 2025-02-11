import { RotateLogoIcon, StarIcon } from "@/assets/svg";
import * as s from "@/pages/GroupChatPage/components/ChatListItem/ChatListItem.styles";
import { theme } from "@/styles/theme/theme";
import { useState } from "react";

const ChatListItem = ({ name }: { name: string }) => {
  const [isMarked, setIsMarked] = useState(false);

  const toggle = () => {
    setIsMarked((prev) => !prev);
  };

  return (
    <li css={s.listWrapperStyle}>
      <div css={s.layoutStyle}>
        <RotateLogoIcon width={14} height={12} css={{ flexShrink: "0" }} />
        {name}
      </div>
      <StarIcon
        width={18}
        height={18}
        fill={isMarked ? `${theme.color.primaryBlue2}` : "transparent"}
        stroke={isMarked ? `${theme.color.primaryBlue2}` : `${theme.color.dark1}`}
        onClick={toggle}
        css={{ flexShrink: "0", cursor: "pointer" }}
      />
    </li>
  );
};

export default ChatListItem;
