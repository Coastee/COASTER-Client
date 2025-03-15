import { AddButton, SearchLayout, TitleContainer } from "@/components";
import { SORTING_OPTIONS } from "@/constants/dropdown";
import { HASH_TAGS_DUMMY } from "@/constants/hashTagsDummy";
import { useState } from "react";
import * as s from "./GroupChatListPage.styles";
import AddGroupChatModal from "./components/AddGroupChatModal/AddGroupChatModal";
import GroupChatListAll from "./components/GroupChatListAll/GroupChatListAll";

const GroupChatListPage = () => {
  const [sortingOption, setSortingOption] = useState(SORTING_OPTIONS[0]);
  const [keyword, setKeyword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div css={s.layoutStyle}>
      <AddGroupChatModal isVisible={isVisible} setIsVisible={setIsVisible} />
      <AddButton setIsModalVisible={setIsVisible} />
      <SearchLayout keyword={keyword} setKeyword={setKeyword} hashTagData={HASH_TAGS_DUMMY} />

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
