import { RotateLogoIcon } from "@/assets/svg";
import { NoDataContainer } from "@/components";
import { COFFEE_CHAT_LIST_DUMMY } from "@/constants/coffeeChatListDummy";
import { formatDate, formatTime } from "@/utils/dateTime";
import * as s from "./CoffeeChatList.styles";

const CoffeeChatList = () => {
  const items = COFFEE_CHAT_LIST_DUMMY.slice(0, 3);
  const itemsCount = items.length;

  return (
    <ul css={s.listContainerStyle(itemsCount)}>
      {itemsCount === 0 ? (
        <NoDataContainer id="NO_COFFEE_CHAT" height="25.1rem" />
      ) : (
        items.map((chat, idx) => (
          <li key={chat.id}>
            <article
              css={s.listItemStyle}
              style={{
                borderRight:
                  itemsCount > 1 && idx < itemsCount - 1
                    ? "1px solid #414e5f"
                    : "none",
              }}
            >
              <img src={chat.imgSrc} alt="썸네일" css={s.thumbnailImgStyle} />
              <div css={s.infoLayoutStyle}>
                <div css={s.titleLayoutStyle}>
                  <RotateLogoIcon width={20} style={{ flexShrink: "0" }} />
                  <h1 css={s.listTitleStyle}>{chat.title}</h1>
                </div>
                <div css={s.detailLayoutStyle}>
                  <p css={s.detailText}>
                    {`${formatDate(chat.date)}${"  "}${formatTime(chat.time)}`}
                  </p>
                  <p css={s.circle} />
                  <p css={s.detailText}>방장 {chat.owner}</p>
                  <p css={s.detailText}>
                    {chat.currentUsers}/{chat.maxUsers}명
                  </p>
                </div>
                <p css={s.listDescStyle}>{chat.desc}</p>
              </div>
            </article>
          </li>
        ))
      )}
    </ul>
  );
};

export default CoffeeChatList;
