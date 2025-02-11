import { RotateLogoIcon, StarIcon } from "@/assets/svg";
import { Divider } from "@/components";
import * as s from "@/pages/GroupChatPage/components/ChatListItem/ChatListItem.styles";
import { theme } from "@/styles/theme/theme";
import { useState } from "react";

const ChatListItem = ({ name }: { name: string }) => {
  const [isMarked, setIsMarked] = useState(false);

  const toggle = () => {
    setIsMarked((prev) => !prev);
  };

  return (
    <li>
      <div css={s.listWrapperStyle(isMarked)}>
        <span css={s.layoutStyle}>
          <RotateLogoIcon width={14} height={12} css={{ flexShrink: "0" }} />
          {name}
        </span>
        <StarIcon width={18} height={18} onClick={toggle} css={{ flexShrink: "0", cursor: "pointer" }} />
      </div>
      <Divider style={{ backgroundColor: `${theme.color.dark5}` }} />
    </li>
  );
};

export default ChatListItem;
