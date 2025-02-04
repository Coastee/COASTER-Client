import { SearchLayout, TitleContainer } from "@/components";
import { SORTING_OPTIONS } from "@/constants/dropdown";
import { hashTagsDummy } from "@/constants/hashTagsDummy";
import { useState } from "react";
import * as s from "./GroupChatListPage.styles";
import GroupChatListAll from "./components/GroupChatListAll/GroupChatListAll";

const GroupChatListPage = () => {
  const [sortingOption, setSortingOption] = useState(SORTING_OPTIONS[0]);
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
        sortingOptions={SORTING_OPTIONS}
        sortingOption={sortingOption}
        setSortingOption={setSortingOption}
      >
        <GroupChatListAll />
      </TitleContainer>
    </div>
  );
};

export default GroupChatListPage;
