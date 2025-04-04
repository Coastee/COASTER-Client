import rotateLogoImg from "@/assets/img/rotateLogoImg.png";
import { RotateLogoIcon } from "@/assets/svg";
import { NoDataContainer } from "@/components";
import type { ChatRoomTypes } from "@/components/DetailModal/types/chatRoomTypes";
import Divider from "@/components/Divider/Divider";
import * as s from "./GroupChatList.styles";

type GroupChatListProps = {
  data: ChatRoomTypes[] | undefined;
  handleItemClick: (id: number, type: string) => void;
};

const GroupChatList = ({ data, handleItemClick }: GroupChatListProps) => {
  const items = data || [];
  const itemCount = items.length || 0;

  return (
    <>
      {itemCount === 0 ? (
        <NoDataContainer id="NO_GROUP_CHAT" height="20.8rem" />
      ) : (
        <ul css={s.listContainerStyle}>
          {items.map((chat, idx) => (
            <li
              key={chat.id}
              onClick={() => handleItemClick(chat.id, "groupChatRoom")}
              onKeyDown={(e) => {
                e.key === "Enter" && handleItemClick(chat.id, "groupChatRoom");
              }}
            >
              <article css={s.listItemStyle}>
                <div css={s.infoLayoutStyle}>
                  <div css={s.textLayoutStyle}>
                    <RotateLogoIcon width={20} style={{ flexShrink: "0" }} />
                    <h1 css={s.listTitleStyle}>{chat.title}</h1>
                    <p css={s.circle} />
                    <p css={s.listUsersStyle}>
                      {chat.currentCount}/{chat.maxCount}명
                    </p>
                  </div>
                  <p css={s.listDescStyle}>{chat.content}</p>
                </div>
                <img
                  src={chat.thumbnail || rotateLogoImg}
                  onError={(e) => {
                    e.currentTarget.src = rotateLogoImg;
                  }}
                  alt="그룹 채팅 썸네일"
                  css={s.thumbnailImgStyle}
                />
              </article>

              {itemCount > 1 && idx < itemCount - 1 && <Divider css={s.DividerStyle} />}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default GroupChatList;
