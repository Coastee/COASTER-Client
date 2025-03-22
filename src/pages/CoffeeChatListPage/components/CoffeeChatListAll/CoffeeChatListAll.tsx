import rotateLogoImg from "@/assets/img/rotateLogoImg.png";
import { RotateLogoIcon } from "@/assets/svg";
import { DetailModal, NoDataContainer } from "@/components";
import type { CoffeeChatListResponse } from "@/pages/CoffeeChatListPage/types/coffeeChatTypes";
import { parseDateArray } from "@/utils/dateTime";
import { useState } from "react";
import * as s from "./CoffeeChatListAll.styles";

interface CoffeeChatListAllProps {
  serverId: number;
  data: CoffeeChatListResponse;
}

const CoffeeChatListAll = ({ serverId, data }: CoffeeChatListAllProps) => {
  const items = data?.result.chatRoomList;
  const itemsCount = items?.length;

  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleCloseModal = () => {
    setSelectedId(null);
  };

  const selectedChat = items?.find((chat) => chat.id === selectedId);

  const dateTimeFormat = (dateArray: number[] | null) => {
    if (!dateArray) return;
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
          {items?.map((chat) => (
            <li key={chat.id} style={{ paddingRight: "0" }}>
              <article
                css={s.listItemStyle}
                onClick={() => setSelectedId(chat.id)}
                onKeyDown={() => setSelectedId(chat.id)}
              >
                <img
                  src={chat.thumbnail || rotateLogoImg}
                  onError={(e) => {
                    e.currentTarget.src = rotateLogoImg;
                  }}
                  alt="썸네일"
                  css={s.thumbnailImgStyle}
                />
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
        <DetailModal
          data={selectedChat}
          serverId={serverId}
          selectedItemId={selectedChat.id}
          isCoffeeChat={true}
          setIsVisible={handleCloseModal}
        />
      )}
    </div>
  );
};

export default CoffeeChatListAll;
