import { NoDataContainer } from "@/components";
import * as s from "@/pages/GroupChatPage/components/ChatInfoList/ChatInfoList.styles";
import ChatListItem from "@/pages/GroupChatPage/components/ChatListItem/ChatListItem";
import { useFetchCoffeeChat } from "@/pages/GroupChatPage/hooks/useFetchCoffeeChat";
import { useFetchGroupChat } from "@/pages/GroupChatPage/hooks/useFetchGroupChat";

interface ChatInfoListProps {
  name: string;
}

const ChatInfoList = ({ name }: ChatInfoListProps) => {
  const { data: groupChatList } = useFetchGroupChat();
  const { data: coffeeChatList } = useFetchCoffeeChat();

  return (
    <section css={s.sectionStyle}>
      <h1 css={s.nameStyle}>{name}</h1>

      <h2 css={s.titleStyle}>내가 개설한 그룹챗</h2>
      <div css={s.listWrapperStyle}>
        {groupChatList?.chatRoomList?.length > 0 ? (
          <ul css={s.listStyle}>
            {groupChatList.chatRoomList.map((chat, index) => (
              <ChatListItem key={chat.id} name={chat.title} index={index} length={groupChatList.chatRoomList.length} />
            ))}
          </ul>
        ) : (
          <NoDataContainer id="NO_JOINED_GROUP_CHAT" width="18rem" />
        )}
      </div>

      <h2 css={[s.titleStyle, { marginTop: "2rem" }]}>참여한 그룹챗</h2>
      <div css={s.listWrapperStyle}>
        {coffeeChatList?.chatRoomList?.length > 0 ? (
          <ul css={s.listStyle}>
            {coffeeChatList.chatRoomList.map((chat, index) => (
              <ChatListItem key={chat.id} name={chat.title} index={index} length={coffeeChatList.chatRoomList.length} />
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
