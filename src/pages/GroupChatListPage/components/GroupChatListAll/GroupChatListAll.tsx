import { RotateLogoIcon } from "@/assets/svg";
import { CHAT_ROOMS_DUMMY } from "@/dummy/chatRoomsDummy";
import * as s from "./GroupChatListAll.styles";

const GroupChatListAll = () => {
  return (
    <ul css={s.listContainerStyle}>
      {CHAT_ROOMS_DUMMY.map((chat, idx) => (
        <li key={chat.id} css={s.listItemStyle}>
          <div css={s.infoLayoutStyle}>
            <div css={s.textLayoutStyle}>
              <RotateLogoIcon width={20} style={{ minWidth: "2rem" }} />
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
        </li>
      ))}
    </ul>
  );
};

export default GroupChatListAll;
