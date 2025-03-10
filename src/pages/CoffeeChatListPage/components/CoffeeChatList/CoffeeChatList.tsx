import rotateLogoImg from "@/assets/img/rotateLogoImg.png";
import { RotateLogoIcon } from "@/assets/svg";

import { NoDataContainer } from "@/components";
import type { HomeDataTypes } from "@/pages/HomePage/types/homeDataTypes";

import { parseDateArray } from "@/utils/dateTime";

import * as s from "./CoffeeChatList.styles";

const CoffeeChatList = ({ data }: { data: HomeDataTypes["meetingChatRoom"] }) => {
  const items = data?.chatRoomList || [];
  const itemCount = items.length || 0;

  const formatParsedDate = (dateArray: number[]) => {
    const { month, day, hour, minute, meridiem } = parseDateArray(dateArray);
    return `${month}/${day} ${meridiem} ${hour}:${String(minute).padStart(2, "0")}`;
  };

  return (
    <ul css={s.listContainerStyle(itemCount)}>
      {itemCount === 0 ? (
        <NoDataContainer id="NO_COFFEE_CHAT" height="25.1rem" />
      ) : (
        items.map((chat, idx) => (
          <li key={chat.id}>
            <article css={s.listItemStyle({ itemCount, idx })}>
              <img src={chat.thumbnail || rotateLogoImg} alt="썸네일" css={s.thumbnailImgStyle} />
              <div css={s.infoLayoutStyle}>
                <div css={s.titleLayoutStyle}>
                  <RotateLogoIcon width={20} style={{ flexShrink: "0" }} />
                  <h1 css={s.listTitleStyle}>{chat.title}</h1>
                </div>
                <div css={s.detailLayoutStyle}>
                  <p css={s.detailText}>{chat.period.startDate ? formatParsedDate(chat.period.startDate) : ""}</p>
                  <p css={s.circle} />
                  <p css={s.detailText}>방장 {chat.user.nickname}</p>
                  <p css={s.detailText}>
                    {chat.currentCount}/{chat.maxCount}명
                  </p>
                </div>
                <p css={s.listDescStyle}>{chat.content}</p>
              </div>
            </article>
          </li>
        ))
      )}
    </ul>
  );
};

export default CoffeeChatList;
