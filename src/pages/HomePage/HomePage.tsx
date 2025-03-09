import { fetchServerHome } from "@/apis/server";
import { SearchLayout, SideModal, TitleContainer } from "@/components";
import { CHAT_ROOM_DETAIL_DUMMY } from "@/constants/chatRoomDetailDummy";
import CoffeeChatList from "@/pages/CoffeeChatListPage/components/CoffeeChatList/CoffeeChatList";
import GroupChatList from "@/pages/GroupChatListPage/components/GroupChatList/GroupChatList";
<<<<<<< HEAD
import GlobalChatPreview from "@/pages/HomePage/components/GlobalChatPreview/GlobalChatPreview";
=======
import type { HomeDataTypes } from "@/pages/HomePage/types/homeDataTypes";
>>>>>>> 9e52692 (#69 [FEAT] 홈 화면 해시태그, 그룹챗, 커피챗 리스트 조회 api 연결)
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
<<<<<<< HEAD
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
              <CoffeeChatList />
            </TitleContainer>
          </div>
          <TitleContainer
            title="전체 채팅"
            textButton="더보기"
            handleTextButtonClick={() => {
              navigate("../global-chat");
            }}
          >
            <GlobalChatPreview />
          </TitleContainer>
        </div>
=======
        <SearchLayout keyword={keyword} setKeyword={setKeyword} hashTagData={hashTagList} />
>>>>>>> 9e52692 (#69 [FEAT] 홈 화면 해시태그, 그룹챗, 커피챗 리스트 조회 api 연결)
        <TitleContainer
          title="전체 채팅"
          textButton="더보기"
          handleTextButtonClick={() => {
            navigate("../global-chat");
          }}
          css={{ paddingTop: "12.3rem" }}
        >
<<<<<<< HEAD
          <GlobalChatPreview />
=======
          <GroupChatList data={groupChatRoom} handleItemClick={handleItemClick} />
        </TitleContainer>
        <TitleContainer
          title="오프라인 커피챗"
          textButton="전체보기"
          handleTextButtonClick={() => {
            navigate("./coffee-chat-list");
          }}
        >
          <CoffeeChatList data={meetingChatRoom} />
>>>>>>> 9e52692 (#69 [FEAT] 홈 화면 해시태그, 그룹챗, 커피챗 리스트 조회 api 연결)
        </TitleContainer>
      </div>
    </>
  );
};

export default HomePage;
