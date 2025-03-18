import { NoDataContainer } from "@/components";
import * as s from "@/pages/GroupChatPage/components/ChatInfoList/ChatInfoList.styles";
import ChatListItem from "@/pages/GroupChatPage/components/ChatListItem/ChatListItem";
import type { ChatRoomResult, ChatRoomTypes } from "@/pages/GroupChatPage/types";

interface ChatInfoListProps {
  ownerList: ChatRoomResult;
  joinedList: ChatRoomResult;
  name: string;
  setSelectedRoom: (room: ChatRoomTypes) => void;
}

const ChatInfoList = ({ ownerList, joinedList, name, setSelectedRoom }: ChatInfoListProps) => {
  return (
    <section css={s.sectionStyle}>
      <h1 css={s.nameStyle}>{name}</h1>

      <h2 css={s.titleStyle}>내가 개설한 그룹챗</h2>
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
          <NoDataContainer id="NO_JOINED_GROUP_CHAT" width="18rem" />
        )}
      </div>

      <h2 css={[s.titleStyle, { marginTop: "2rem" }]}>참여한 그룹챗</h2>
      <div css={s.listWrapperStyle}>
        {joinedList?.pageInfo.totalElements > 0 ? (
          <ul css={s.listStyle}>
            {joinedList.chatRoomList.map((chat, index) => (
              <ChatListItem key={chat.id} name={chat.title} index={index} length={joinedList.pageInfo.totalElements} />
            ))}
          </ul>
        ) : (
          <NoDataContainer id="NO_JOINED_COFFEE_CHAT" width="18rem" />
        )}
      </div>
    </section>
  );
};

export default ChatInfoList;
