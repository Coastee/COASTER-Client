import * as s from "@/pages/GroupChatPage/components/ChatInfoList/ChatInfoList.styles";
import ChatListItem from "@/pages/GroupChatPage/components/ChatListItem/ChatListItem";
import { CREATED_CHAT_LIST, JOINED_CHAT_LIST } from "@/pages/GroupChatPage/constants/dummy";
import { scrollStyle } from "@/styles/scrollStyle";

interface ChatInfoListProps {
  name: string;

  // 서버에서 데이터 주는 형태에 따라 인터페이스 수정
  createdChatList?: string[];
  joinedChatList?: string[];
}

const ChatInfoList = ({ name, createdChatList, joinedChatList }: ChatInfoListProps) => {
  return (
    <section css={s.sectionStyle}>
      <h1 css={s.nameStyle}>{name}</h1>
      <h2 css={s.titleStyle}>내가 개설한 그룹챗</h2>
      {
        <div css={s.listStyle}>
          <ul css={[s.listStyle, scrollStyle]}>
            {CREATED_CHAT_LIST.length > 0 && CREATED_CHAT_LIST.map((chat) => <ChatListItem key={chat} name={chat} />)}
          </ul>
        </div>
      }
      <h2 css={[s.titleStyle, { marginTop: "2rem" }]}>참여한 그룹챗</h2>
      {
        <div css={s.listStyle}>
          <ul css={[s.listStyle, scrollStyle]}>
            {JOINED_CHAT_LIST.length > 0 && JOINED_CHAT_LIST.map((chat) => <ChatListItem key={chat} name={chat} />)}
          </ul>
        </div>
      }
    </section>
  );
};

export default ChatInfoList;
