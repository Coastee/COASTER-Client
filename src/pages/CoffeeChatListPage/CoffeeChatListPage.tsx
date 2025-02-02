import { TitleContainer } from "@/components";
import { SORTING_OPTIONS } from "@/constants/dropdown";
import { useState } from "react";
import * as s from "./CoffeeChatListPage.styles";
import CoffeeChatList from "./components/CoffeeChatList/CoffeeChatList";

const CoffeeChatListPage = () => {
  const [sortingOption, setSortingOption] = useState(SORTING_OPTIONS[0]);

  return (
    <div css={s.containerStyle}>
      <TitleContainer
        title="오프라인 커피챗"
        sortingOptions={SORTING_OPTIONS}
        sortingOption={sortingOption}
        setSortingOption={setSortingOption}
      >
        <CoffeeChatList />
      </TitleContainer>
    </div>
  );
};

export default CoffeeChatListPage;
