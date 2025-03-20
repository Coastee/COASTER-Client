import rotateLogoImg from "@/assets/img/rotateLogoImg.png";
import { RotateLogoIcon } from "@/assets/svg";
import { DetailModal, NoDataContainer } from "@/components";

import type { GroupChatListResponse } from "@/pages/GroupChatListPage/types/groupChatTypes";
import { useState } from "react";
import * as s from "./GroupChatListAll.styles";

interface GroupChatListAllProps {
  serverId: number;
  data: GroupChatListResponse;
}

const GroupChatListAll = ({ serverId, data }: GroupChatListAllProps) => {
  const items = data?.result.chatRoomList ?? [];
  const itemCount = data?.result.pageInfo?.totalElements ?? 0;

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
            <DetailModal
              data={selectedChat}
              serverId={serverId}
              selectedItemId={selectedChat.id}
              setIsVisible={() => setSelectedId(null)}
            />
          )}
        </>
      )}
    </div>
  );
};

export default GroupChatListAll;
