import { SearchLayout, TitleContainer } from "@/components";
import { hashTagsDummy } from "@/constants/hashTagsDummy";
import CoffeeChatList from "@/pages/CoffeeChatListPage/components/CoffeeChatList/CoffeeChatList";
import GroupChatList from "@/pages/GroupChatListPage/components/GroupChatList/GroupChatList";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as s from "./HomePage.styles";

const HomePage = () => {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState("");

  return (
    <div css={s.layoutStyle}>
      <SearchLayout
        keyword={keyword}
        setKeyword={setKeyword}
        hashTagData={hashTagsDummy}
      />
      <TitleContainer
        title="그룹 채팅방"
        textButton="전체보기"
        handleTextButtonClick={() => {
          navigate("./group-chat-list");
        }}
      >
        <GroupChatList />
      </TitleContainer>
      <TitleContainer
        title="오프라인 커피챗"
        textButton="전체보기"
        handleTextButtonClick={() => {
          navigate("./coffee-chat-list");
        }}
      >
        <CoffeeChatList />
      </TitleContainer>
    </div>
  );
};

export default HomePage;
