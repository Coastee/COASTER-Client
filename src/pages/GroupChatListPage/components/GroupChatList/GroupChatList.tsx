import { RotateLogoIcon } from "@/assets/svg";
import { NoDataContainer } from "@/components";
import Divider from "@/components/Divider/Divider";
import { CHAT_ROOMS_DUMMY } from "@/constants/chatRoomsDummy";
import * as s from "./GroupChatList.styles";

const GroupChatList = () => {
  const items = CHAT_ROOMS_DUMMY.slice(0, 3);
  const itemsCount = items.length;

  return (
    <>
      {itemsCount === 0 ? (
        <NoDataContainer id="no-group-chat" height="20.8rem" />
      ) : (
        <ul css={s.listContainerStyle}>
          {CHAT_ROOMS_DUMMY.slice(0, 3).map((chat, idx) => (
            <>
              <li key={chat.id}>
                <article css={s.listItemStyle}>
                  <div css={s.infoLayoutStyle}>
                    <div css={s.textLayoutStyle}>
                      <RotateLogoIcon width={20} style={{ flexShrink: "0" }} />
                      <h1 css={s.listTitleStyle}>{chat.title}</h1>
                      <p css={s.circle} />
                      <p css={s.listUsersStyle}>
                        {chat.currentUsers}/{chat.maxUsers}명
                      </p>
                    </div>
                    <p css={s.listDescStyle}>{chat.desc}</p>
                  </div>
                  <img
                    src={chat.imgSrc}
                    alt="그룹 채팅 썸네일"
                    css={s.thumbnailImgStyle}
                  />
                </article>
              </li>
              {itemsCount > 1 && idx < itemsCount - 1 && (
                <Divider css={s.DividerStyle} />
              )}
            </>
          ))}
        </ul>
      )}
    </>
  );
};

export default GroupChatList;
