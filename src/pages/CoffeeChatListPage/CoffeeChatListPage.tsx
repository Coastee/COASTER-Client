import { Search, TitleContainer } from "@/components";
import { SORTING_OPTIONS } from "@/constants/dropdown";
import { useState } from "react";
import * as s from "./CoffeeChatListPage.styles";
import CoffeeChatListAll from "./components/CoffeeChatListAll/CoffeeChatListAll";

const CoffeeChatListPage = () => {
  const [sortingOption, setSortingOption] = useState(SORTING_OPTIONS[0]);

  return (
    <div css={s.containerStyle}>
      <Search />
      <TitleContainer
        title="오프라인 커피챗"
        sortingOptions={SORTING_OPTIONS}
        sortingOption={sortingOption}
        setSortingOption={setSortingOption}
      >
        <CoffeeChatListAll />
      </TitleContainer>
    </div>
  );
};

export default CoffeeChatListPage;
