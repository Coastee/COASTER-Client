import { SearchLayout, SideModal, TitleContainer } from "@/components";
import { fetchServerHome } from "@/components/ServerHeader/apis/server";
import { CHAT_ROOM_DETAIL_DUMMY } from "@/constants/chatRoomDetailDummy";
import { HASH_TAGS_DUMMY } from "@/constants/hashTagsDummy";
import CoffeeChatList from "@/pages/CoffeeChatListPage/components/CoffeeChatList/CoffeeChatList";
import GroupChatList from "@/pages/GroupChatListPage/components/GroupChatList/GroupChatList";
import GlobalChatPreview from "@/pages/HomePage/components/GlobalChatPreview/GlobalChatPreview";
import type { HomeDataTypes } from "@/pages/HomePage/types/homeDataTypes";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as s from "./HomePage.styles";

const HomePage = () => {
  const navigate = useNavigate();

  const [homeData, setHomeData] = useState<HomeDataTypes | null>(null);
  const serverId = 1;

  const [keyword, setKeyword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const { title, currentUsers, maxUsers } = CHAT_ROOM_DETAIL_DUMMY;

  const [selectedItemId, setSelectedItemId] = useState<string | undefined>(undefined);

  const handleItemClick = (id: string) => {
    setSelectedItemId(id);
    setIsVisible(true);
  };

  useEffect(() => {
    const loadHomeData = async () => {
      const result = await fetchServerHome(serverId);
      result && setHomeData(result);
    };
    loadHomeData();
  }, []);

  if (!homeData) {
    return <div>로딩 중...</div>;
  }

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
          <div css={s.leftLayoutStyle}>
            <SearchLayout keyword={keyword} setKeyword={setKeyword} hashTagData={HASH_TAGS_DUMMY} />
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
