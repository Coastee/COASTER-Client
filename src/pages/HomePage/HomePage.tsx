import { DetailModal, SearchLayout, TitleContainer } from "@/components";
import CoffeeChatList from "@/pages/CoffeeChatListPage/components/CoffeeChatList/CoffeeChatList";
import GroupChatList from "@/pages/GroupChatListPage/components/GroupChatList/GroupChatList";
import GlobalChatPreview from "@/pages/HomePage/components/GlobalChatPreview/GlobalChatPreview";
import { useHomeData } from "@/pages/HomePage/hooks/useHomeData";
import { useGlobalServer } from "@/stores/useGlobalServerStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as s from "./HomePage.styles";
const HomePage = () => {
  const navigate = useNavigate();
  const globalServer = useGlobalServer();

  const [keyword, setKeyword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<{ id: string | null; type: string | null }>({
    id: null,
    type: null,
  });

  const serverId = Number(globalServer?.id);
  const { data: homeData, isLoading } = useHomeData(serverId);

  if (isLoading) return <div>로딩 중...</div>;
  if (!homeData) return <div>데이터 없음</div>;

  const { hashTagList, groupChatRoom, meetingChatRoom, notice, chat } = homeData;

  const handleItemClick = (type: string, id: string) => {
    setSelectedItem({ type: type, id: id });
    setIsVisible(true);
  };

  const selectedChat = (() => {
    if (selectedItem.type === "meetingChatRoom") {
      return meetingChatRoom.chatRoomList.find((chat) => chat.id === Number(selectedItem.id));
    }
    if (selectedItem.type === "groupChatRoom") {
      return groupChatRoom.chatRoomList.find((chat) => chat.id === Number(selectedItem.id));
    }
    return null;
  })();

  return (
    <>
      {selectedChat && serverId && (
        <DetailModal
          data={selectedChat}
          serverId={serverId}
          selectedItemId={Number(selectedItem.id)}
          isVisible={true}
          setIsVisible={() => setSelectedItem({ type: null, id: null })}
        />
      )}

      <div css={s.layoutStyle}>
        <div css={s.leftLayoutStyle}>
          <SearchLayout keyword={keyword} setKeyword={setKeyword} hashTagData={hashTagList} />
          <TitleContainer
            title="그룹 채팅방"
            textButton="전체보기"
            handleTextButtonClick={() => {
              navigate("./group-chat-list");
            }}
          >
            <GroupChatList data={groupChatRoom} handleItemClick={handleItemClick} />
          </TitleContainer>
          <TitleContainer
            title="오프라인 커피챗"
            textButton="전체보기"
            handleTextButtonClick={() => {
              navigate("./coffee-chat-list");
            }}
            css={{ paddingBottom: "5rem" }}
          >
            <CoffeeChatList data={meetingChatRoom} handleItemClick={handleItemClick} />
          </TitleContainer>
        </div>
        <TitleContainer
          title="전체 채팅"
          textButton="더보기"
          handleTextButtonClick={() => {
            navigate("../global-chat", { state: { chat, notice } });
          }}
          css={{ paddingTop: "10rem" }}
        >
          <GlobalChatPreview chat={chat} notice={notice} />
        </TitleContainer>
      </div>
    </>
  );
};

export default HomePage;
