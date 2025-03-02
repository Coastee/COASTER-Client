import rotateLogoImg from "@/assets/img/rotateLogoImg.png";
import { RotateLogoIcon } from "@/assets/svg";
import { NoDataContainer } from "@/components";
import GroupChatDetailModal from "@/pages/GroupChatListPage/components/GroupChatDetailModal/GroupChatDetailModal";
import { GROUP_CHAT_DUMMY } from "@/pages/GroupChatListPage/constants/groupChatDetailDummy";
import { useState } from "react";
import * as s from "./GroupChatListAll.styles";
const GroupChatListAll = () => {
  const data = GROUP_CHAT_DUMMY;

  const items = data.result.chatRoomList;
  const itemsCount = items.length;

  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedChat = items.find((chat) => chat.id === selectedId);

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
                  onClick={() => setSelectedId(chat.id)}
                  onKeyDown={() => setSelectedId(chat.id)}
                >
                  <div css={s.infoLayoutStyle}>
                    <div css={s.textLayoutStyle}>
                      <RotateLogoIcon width={20} style={{ flexShrink: "0", paddingTop: "0.3rem" }} />
                      <h1 css={s.listTitleStyle}>{chat.title}</h1>
                      <p css={s.circle} />
                      <p css={s.listUsersStyle}>
                        {chat.currentCount}/{chat.maxCount}명
                      </p>
                    </div>
                    <p css={s.listDescStyle}>{chat.content}</p>
                  </div>
                  <img src={chat.thumbnail || rotateLogoImg} alt="그룹 채팅 썸네일" css={s.thumbnailImgStyle} />
                </article>
              </li>
            ))}
          </ul>
          {selectedChat && (
            <GroupChatDetailModal
              id={selectedChat.id}
              title={selectedChat.title}
              thumbnail={selectedChat.thumbnail ?? ""}
              content={selectedChat.content}
              hashTagList={selectedChat.hashTagList}
              nickname={selectedChat.user.nickname}
              expYears={selectedChat.user.userIntro.expYears}
              job={selectedChat.user.userIntro.job}
              isVisible={true}
              setIsVisible={() => setSelectedId(null)}
            />
          )}
        </>
      )}
    </div>
  );
};

export default GroupChatListAll;
