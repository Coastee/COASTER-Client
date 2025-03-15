import rotateLogoImg from "@/assets/img/rotateLogoImg.png";
import { RotateLogoIcon } from "@/assets/svg";
import { DetailModal, NoDataContainer } from "@/components";
import { GROUP_CHAT_DUMMY } from "@/pages/GroupChatListPage/constants/groupChatDetailDummy";
import { useGroupChatListAll } from "@/pages/GroupChatListPage/hooks/useGroupChat";
import type { GroupChatListResponse } from "@/pages/GroupChatListPage/types/groupChatTypes";
import { useGlobalServer } from "@/stores/useGlobalServerStore";
import { useState } from "react";
import * as s from "./GroupChatListAll.styles";
const GroupChatListAll = () => {
  // const data = GROUP_CHAT_DUMMY;
  // const items = data.result.chatRoomList;
  // const itemsCount = items.length;

  const currentServer = useGlobalServer();

  const data: GroupChatListResponse = useGroupChatListAll(currentServer?.id);
  const items = data.result.chatRoomList;

  const itemCount = items.result.pageInfo.totalElements;

  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedChat = items.find((chat) => chat.id === selectedId);

  return (
    <div>
      {itemCount === 0 ? (
        <NoDataContainer id="NO_GROUP_CHAT" height="25.1rem" />
      ) : (
        <>
          <ul css={s.listContainerStyle(itemCount)}>
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
                  <img
                    src={chat.thumbnail || rotateLogoImg}
                    onError={(e) => {
                      e.currentTarget.src = rotateLogoImg;
                    }}
                    alt="그룹 채팅 썸네일"
                    css={s.thumbnailImgStyle}
                  />
                </article>
              </li>
            ))}
          </ul>

          {selectedChat && (
            <DetailModal data={selectedChat} isVisible={true} setIsVisible={() => setSelectedId(null)} />
          )}
        </>
      )}
    </div>
  );
};

export default GroupChatListAll;
