import { RotateLogoIcon } from "@/assets/svg";
import Divider from "@/components/Divider/Divider";
import { CHAT_ROOMS_DUMMY } from "@/constants/chatRoomsDummy";
import * as s from "./GroupChatList.styles";

const GroupChatList = () => {
  return (
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
          {idx < 2 && <Divider css={s.DividerStyle} />}
        </>
      ))}
    </ul>
  );
};

export default GroupChatList;
