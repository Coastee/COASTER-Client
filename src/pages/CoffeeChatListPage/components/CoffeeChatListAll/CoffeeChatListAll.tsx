import rotateLogoImg from "@/assets/img/rotateLogoImg.png";
import { RotateLogoIcon } from "@/assets/svg";
import { DetailModal, NoDataContainer } from "@/components";
import { GROUP_CHAT_DUMMY } from "@/pages/GroupChatListPage/constants/groupChatDetailDummy";
import { parseDateArray } from "@/utils/dateTime";
import { useState } from "react";
import * as s from "./CoffeeChatListAll.styles";

const CoffeeChatListAll = () => {
  const data = GROUP_CHAT_DUMMY;
  const items = data.result.chatRoomList;
  const itemsCount = items.length;

  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleItemClick = (id: number) => {
    setSelectedId(id);
  };

  const handleCloseModal = () => {
    setSelectedId(null);
  };

  const selectedChat = items.find((chat) => chat.id === selectedId);

  const dateTimeFormat = (dateArray: number[]) => {
    const parsed = parseDateArray(dateArray);
    return `${parsed.month}/${parsed.day} ${parsed.meridiem} ${String(parsed.hour).padStart(2, "0")}:${String(
      parsed.minute
    ).padStart(2, "0")}`;
  };

  return (
    <div>
      {itemsCount === 0 ? (
        <NoDataContainer id="NO_COFFEE_CHAT" height="25.1rem" />
      ) : (
        <ul css={s.listContainerStyle(itemsCount)}>
          {items.map((chat) => (
            <li key={chat.id} style={{ paddingRight: "0" }}>
              <article
                css={s.listItemStyle}
                onClick={() => handleItemClick(chat.id)}
                onKeyDown={() => handleItemClick(chat.id)}
              >
                <img src={chat.thumbnail || rotateLogoImg} alt="썸네일" css={s.thumbnailImgStyle} />
                <div css={s.infoLayoutStyle}>
                  <div css={s.titleLayoutStyle}>
                    <RotateLogoIcon width={20} style={{ flexShrink: "0" }} />
                    <h1 css={s.listTitleStyle}>{chat.title}</h1>
                  </div>
                  <div css={s.detailLayoutStyle}>
                    <p css={s.detailText}>{dateTimeFormat(chat.period.startDate)}</p>
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
          ))}
        </ul>
      )}

      {selectedChat && (
        <DetailModal data={selectedChat} isCoffeeChat={true} isVisible={true} setIsVisible={handleCloseModal} />
      )}
    </div>
  );
};

export default CoffeeChatListAll;
