import { SearchLayout, TitleContainer } from "@/components";
import { SORTING_OPTIONS } from "@/constants/dropdown";
import { HASH_TAGS_DUMMY } from "@/constants/hashTagsDummy";
import { useState } from "react";
import * as s from "./CoffeeChatListPage.styles";
import AddCoffeeChatModal from "./components/AddCoffeeChatModal/AddCoffeeChatModal";
import CoffeeChatListAll from "./components/CoffeeChatListAll/CoffeeChatListAll";

const CoffeeChatListPage = () => {
  const [sortingOption, setSortingOption] = useState(SORTING_OPTIONS[0]);
  const [keyword, setKeyword] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(true);

  return (
    <div css={s.layoutStyle}>
      <AddCoffeeChatModal
        isVisible={isModalVisible}
        setIsVisible={setIsModalVisible}
      />
      <SearchLayout
        keyword={keyword}
        setKeyword={setKeyword}
        hashTagData={HASH_TAGS_DUMMY}
      />
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
