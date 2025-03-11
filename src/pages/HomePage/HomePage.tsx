import { SearchLayout, SideModal, TitleContainer } from "@/components";
import { CHAT_ROOM_DETAIL_DUMMY } from "@/constants/chatRoomDetailDummy";
import CoffeeChatList from "@/pages/CoffeeChatListPage/components/CoffeeChatList/CoffeeChatList";
import GroupChatList from "@/pages/GroupChatListPage/components/GroupChatList/GroupChatList";
import GlobalChatPreview from "@/pages/HomePage/components/GlobalChatPreview/GlobalChatPreview";
import { useHomeData } from "@/pages/HomePage/hooks/useHomeData";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as s from "./HomePage.styles";

const HomePage = () => {
  const navigate = useNavigate();

  const serverId = 1; // 임시 id

  const [keyword, setKeyword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const { title, currentUsers, maxUsers } = CHAT_ROOM_DETAIL_DUMMY;

  const [selectedItemId, setSelectedItemId] = useState<string | undefined>(undefined);

  const handleItemClick = (id: string) => {
    setSelectedItemId(id);
    setIsVisible(true);
  };

  // const { data: homeData, isLoading } = useHomeData(serverId);
  const { data: homeData, isLoading } = useHomeData(useMemo(() => serverId, [serverId]));


  if (isLoading) return <div>로딩 중...</div>;
  if (!homeData) return <div>데이터 없음</div>;

  const { hashTagList, groupChatRoom, meetingChatRoom, notice } = homeData;

  return (
    <>
      <SideModal
        title={title}
        currentUsers={currentUsers}
        maxUsers={maxUsers}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
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
            <CoffeeChatList data={meetingChatRoom} />
          </TitleContainer>
        </div>
        <TitleContainer
          title="전체 채팅"
          textButton="더보기"
          handleTextButtonClick={() => {
            navigate("../global-chat");
          }}
          css={{ paddingTop: "12.3rem" }}
        >
          <GlobalChatPreview />
        </TitleContainer>
      </div>
    </>
  );
};

export default HomePage;
