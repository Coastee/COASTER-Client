import { RotateLogoIcon } from "@/assets/svg";
import { NoDataContainer } from "@/components";
import { CHAT_ROOMS_DUMMY } from "@/constants/chatRoomsDummy";
import GroupChatDetailModal from "@/pages/GroupChatListPage/components/GroupChatDetailModal/GroupChatDetailModal";
import { GROUP_CHAT_DETAIL_DUMMY } from "@/pages/GroupChatListPage/constants/groupChatDetailDummy";
import { useState } from "react";
import * as s from "./GroupChatListAll.styles";

const GroupChatListAll = () => {
  const items = CHAT_ROOMS_DUMMY;
  const detail = GROUP_CHAT_DETAIL_DUMMY;
  const itemsCount = items.length;
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleItemClick = (id: number) => {
    setSelectedId(id);
  };

  const handleCloseModal = () => {
    setSelectedId(null);
  };

  return (
    <div>
      {itemsCount === 0 ? (
        <NoDataContainer id="NO_GROUP_CHAT" height="25.1rem" />
      ) : (
        <>
          <ul css={s.listContainerStyle(itemsCount)}>
            {items.map((chat) => (
              <li key={chat.id}>
                <article
                  css={s.listItemStyle}
                  onClick={() => handleItemClick(chat.id)}
                  onKeyDown={() => handleItemClick(chat.id)}
                >
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
                  <img src={chat.imgSrc} alt="그룹 채팅 썸네일" css={s.thumbnailImgStyle} />
                </article>
              </li>
            ))}
          </ul>
          {selectedId !== null && (
            <GroupChatDetailModal
              id={detail.id}
              title={detail.title}
              thumbnail={detail.thumbnail}
              content={detail.content}
              hashTagList={detail.hashTagList}
              nickname={detail.user.nickname}
              expYears={detail.user.userIntro.expYears}
              job={detail.user.userIntro.job}
              isVisible={true}
              setIsVisible={handleCloseModal}
            />
          )}
        </>
      )}
    </div>
  );
};

export default GroupChatListAll;
