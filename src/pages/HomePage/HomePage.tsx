import { DetailModal, SearchLayout, TitleContainer } from "@/components";
import { INITIAL_QUERY_PARAM } from "@/components/SearchLayout/constants/searchInitial";
import CoffeeChatList from "@/pages/CoffeeChatListPage/components/CoffeeChatList/CoffeeChatList";
import GroupChatList from "@/pages/GroupChatListPage/components/GroupChatList/GroupChatList";
import GlobalChatPreview from "@/pages/HomePage/components/GlobalChatPreview/GlobalChatPreview";
import { useHomeData } from "@/pages/HomePage/hooks/useHomeData";
import { useHomeSearch } from "@/pages/HomePage/hooks/useHomeSearch";
import type { SelectedItemTypes } from "@/pages/HomePage/types/selectedItemTypes";
import { getSelectedChat } from "@/pages/HomePage/utils/getSelectedChat";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as s from "./HomePage.styles";

const HomePage = () => {
  const navigate = useNavigate();

  const param = useParams();
  const serverId = Number(param.serverId);

  const { data: homeData, isLoading } = useHomeData(serverId);

  const [queryParam, setQueryParam] = useState(INITIAL_QUERY_PARAM);
  const [selectedItem, setSelectedItem] = useState<SelectedItemTypes>({ id: null, type: null });

  const { homeGroupRooms, homeMeetingRooms, isSearching } = useHomeSearch(serverId, queryParam, 500);

  const selectedChat = getSelectedChat(selectedItem, homeGroupRooms, homeMeetingRooms);

  if (isLoading) return <div>로딩 중...</div>;
  if (!homeData) return <div>데이터 없음</div>;

  const { hashTagList, notice, chat } = homeData;

  const handleItemClick = (id: number, type: string) => {
    setSelectedItem({ id: id, type: type });
  };

  return (
    <>
      {selectedChat && serverId && (
        <DetailModal
          data={selectedChat}
          serverId={serverId}
          selectedItemId={Number(selectedItem.id)}
          isCoffeeChat={selectedItem.type === "meetingChatRoom"}
          setIsVisible={() => setSelectedItem({ type: null, id: null })}
        />
      )}

      <div css={s.layoutStyle}>
        <div css={s.leftLayoutStyle(isSearching)}>
          <SearchLayout queryParam={queryParam} setQueryParam={setQueryParam} hashTagData={hashTagList} />
          <TitleContainer
            title="그룹 채팅방"
            textButton="전체보기"
            handleTextButtonClick={() => {
              navigate("./group-chat-list", { state: { hashTagData: hashTagList } });
            }}
          >
            <GroupChatList data={homeGroupRooms} handleItemClick={handleItemClick} />
          </TitleContainer>
          <TitleContainer
            title="오프라인 커피챗"
            textButton="전체보기"
            handleTextButtonClick={() => {
              navigate("./tea-time-list", { state: { hashTagData: hashTagList } });
            }}
            css={{ paddingBottom: "5rem" }}
          >
            <CoffeeChatList data={homeMeetingRooms} handleItemClick={handleItemClick} />
          </TitleContainer>
        </div>

        {isSearching ? (
          <div css={s.emptyBoxStyle} />
        ) : (
          <TitleContainer
            title="전체 채팅"
            textButton="더보기"
            handleTextButtonClick={() => {
              navigate("../global-chat");
            }}
            css={{ paddingTop: "10rem" }}
          >
            <GlobalChatPreview chat={chat} notice={notice} />
          </TitleContainer>
        )}
      </div>
    </>
  );
};

export default HomePage;
