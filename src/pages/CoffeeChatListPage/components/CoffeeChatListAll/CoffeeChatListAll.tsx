import { RotateLogoIcon } from "@/assets/svg";
import { NoDataContainer } from "@/components";
import { COFFEE_CHAT_LIST_DUMMY } from "@/constants/coffeeChatListDummy";
import { formatDate, formatTime } from "@/utils/dateTime";
import * as s from "./CoffeeChatListAll.styles";

const CoffeeChatListAll = () => {
  const items = COFFEE_CHAT_LIST_DUMMY;
  const itemsCount = items.length;

  return (
    <div>
      {itemsCount === 0 ? (
        <NoDataContainer id="no-coffee-chat" height="25.1rem" />
      ) : (
        <ul css={s.listContainerStyle(itemsCount)}>
          {items.map((chat) => (
            <li key={chat.id} style={{ paddingRight: "0" }}>
              <article css={s.listItemStyle} >
                <img src={chat.imgSrc} alt="썸네일" css={s.thumbnailImgStyle} />
                <div css={s.infoLayoutStyle}>
                  <div css={s.titleLayoutStyle}>
                    <RotateLogoIcon width={20} style={{ flexShrink: "0" }} />
                    <h1 css={s.listTitleStyle}>{chat.title}</h1>
                  </div>
                  <div css={s.detailLayoutStyle}>
                    <p css={s.detailText}>
                      {`${formatDate(chat.date)}${"  "}${formatTime(
                        chat.time
                      )}`}
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
          ))}
        </ul>
      )}
    </div>
  );
};

export default CoffeeChatListAll;
