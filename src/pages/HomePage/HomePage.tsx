import { GroupChatList, TitleContainer } from "@/components";
import CoffeeChatList from "@/components/CoffeeChatList/CoffeeChatList";
import { useNavigate } from "react-router-dom";
import * as s from "./HomePage.styles";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div css={s.containerStyle}>
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
