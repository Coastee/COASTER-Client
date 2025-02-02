import { GroupChatListAll, TitleContainer } from "@/components";
import { SORTING_OPTIONS } from "@/constants/dropdown";
import { useState } from "react";
import * as s from "./GroupChatListPage.styles";

export const GroupChatListPage = () => {
  const [sortingOption, setSortingOption] = useState(SORTING_OPTIONS[0]);

  return (
    <div css={s.containerStyle}>
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
