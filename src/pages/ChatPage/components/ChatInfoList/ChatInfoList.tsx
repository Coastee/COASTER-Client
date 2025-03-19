import { NoDataContainer } from "@/components";
import * as s from "@/pages/ChatPage/components/ChatInfoList/ChatInfoList.styles";
import ChatListItem from "@/pages/ChatPage/components/ChatListItem/ChatListItem";
import type { ChatRoomResult, ChatRoomTypes } from "@/pages/ChatPage/types";

interface ChatInfoListProps {
  menu: string;
  ownerList: ChatRoomResult;
  joinedList: ChatRoomResult;
  setSelectedRoom: (room: ChatRoomTypes) => void;
}

const ChatInfoList = ({ menu, ownerList, joinedList, setSelectedRoom }: ChatInfoListProps) => {
  const upperCaseMenu = menu.replace(/-/g, "_").toUpperCase();
  const title = menu === "group-chat" ? "그룹챗" : menu === "tea-time" ? "티타임" : "채팅방";

  return (
    <section css={s.sectionStyle}>
      <h1 css={s.nameStyle}>{title}</h1>

      <h2 css={s.titleStyle}>내가 개설한 {title}</h2>
      <div css={s.listWrapperStyle}>
        {ownerList?.pageInfo.totalElements > 0 ? (
          <ul css={s.listStyle}>
            {ownerList.chatRoomList.map((chat, index) => (
              <li
                key={chat.id}
                onClick={() => {
                  setSelectedRoom(chat);
                }}
                onKeyDown={() => {
                  setSelectedRoom(chat);
                }}
              >
                <ChatListItem name={chat.title} index={index} length={ownerList.pageInfo.totalElements} />
              </li>
            ))}
          </ul>
        ) : (
          <NoDataContainer
            id={`NO_CREATED_${upperCaseMenu}`}
            width="18rem"
            padding="3rem 7.8rem 3rem"
            logoSize={40}
            navPath={`../home/${menu}-list`}
          />
        )}
      </div>

      <h2 css={[s.titleStyle, { marginTop: "2rem" }]}>참여한 {title}</h2>
      <div css={s.listWrapperStyle}>
        {joinedList?.pageInfo.totalElements > 0 ? (
          <ul css={s.listStyle}>
            {joinedList.chatRoomList.map((chat, index) => (
              <li
                key={chat.id}
                onClick={() => {
                  setSelectedRoom(chat);
                }}
                onKeyDown={() => {
                  setSelectedRoom(chat);
                }}
              >
                <ChatListItem name={chat.title} index={index} length={joinedList.pageInfo.totalElements} />
              </li>
            ))}
          </ul>
        ) : (
          <NoDataContainer
            id={`NO_JOINED_${upperCaseMenu}`}
            width="18rem"
            padding="3rem 7.8rem 3rem"
            logoSize={40}
            navPath={`../home/${menu}-list`}
          />
        )}
      </div>
    </section>
  );
};

export default ChatInfoList;
