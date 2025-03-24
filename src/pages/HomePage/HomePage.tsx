import { DetailModal, SearchLayout, TitleContainer } from "@/components";
import { useSearch } from "@/components/SearchLayout/hooks/useSearch";
import type { QueryParamTypes } from "@/components/SearchLayout/types/searchTypes";
import CoffeeChatList from "@/pages/CoffeeChatListPage/components/CoffeeChatList/CoffeeChatList";
import GroupChatList from "@/pages/GroupChatListPage/components/GroupChatList/GroupChatList";
import GlobalChatPreview from "@/pages/HomePage/components/GlobalChatPreview/GlobalChatPreview";
import { useHomeData } from "@/pages/HomePage/hooks/useHomeData";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as s from "./HomePage.styles";
const HomePage = () => {
  const navigate = useNavigate();
  const param = useParams();

  const [isVisible, setIsVisible] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  
  const [selectedItem, setSelectedItem] = useState<{ id: string | null; type: string | null }>({
    id: null,
    type: null,
  });

  const [queryParam, setQueryParam] = useState<QueryParamTypes>({
    page: 0,
    sort: "",
    scope: "",
    keyword: "",
    tags: [],
  });

  const serverId = Number(param.serverId);
  const { data: homeData, isLoading } = useHomeData(serverId);
  const { data: groupsSearchResult } = useSearch({
    serverId,
    type: "groups",
    queryParam,
  });

  const { data: meetingsSearchResult } = useSearch({
    serverId,
    type: "meetings",
    queryParam,
  });

  const homeGroupRooms = groupsSearchResult?.result.chatRoomList.slice(0, 3);
  const homeMeetingRooms = meetingsSearchResult?.result.chatRoomList.slice(0, 3);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSearching(queryParam.keyword !== "" || queryParam.tags.length > 0);
    }, 500);

    return () => clearTimeout(timeout);
  }, [queryParam]);

  if (isLoading) return <div>로딩 중...</div>;
  if (!homeData) return <div>데이터 없음</div>;

  const { hashTagList, notice, chat } = homeData;

  const handleItemClick = (type: string, id: string) => {
    setSelectedItem({ type: type, id: id });
    setIsVisible(true);
  };

  const selectedChat = (() => {
    if (selectedItem.type === "meetingChatRoom") {
      return homeGroupRooms?.find((chat) => chat.id === Number(selectedItem.id));
    }
    if (selectedItem.type === "groupChatRoom") {
      return homeMeetingRooms?.find((chat) => chat.id === Number(selectedItem.id));
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
