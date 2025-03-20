import { AddButton, SearchLayout, TitleContainer } from "@/components";
import { useSearch } from "@/components/SearchLayout/hooks/useSearch";
import type { QueryParamTypes } from "@/components/SearchLayout/types/searchTypes";
import { SORTING_OPTIONS } from "@/constants/dropdown";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import * as s from "./GroupChatListPage.styles";
import AddGroupChatModal from "./components/AddGroupChatModal/AddGroupChatModal";
import GroupChatListAll from "./components/GroupChatListAll/GroupChatListAll";

const GroupChatListPage = () => {
  const location = useLocation();

  const { serverId: param } = useParams();
  const serverId = Number(param);

  const [sortingOption, setSortingOption] = useState(SORTING_OPTIONS[0]);
  const [isVisible, setIsVisible] = useState(false);

  const hashTagData = location.state?.hashTagData || [];
  console.log(hashTagData);

  const [queryParam, setQueryParam] = useState<QueryParamTypes>({
    page: 0,
    sort: "",
    scope: "",
    keyword: "",
    tagList: [],
  });

  const { data } = useSearch({
    serverId,
    type: "groups",
    queryParam,
  });
  console.log(data);

  // useEffect(() => console.log(queryParam), [setQueryParam]);

  return (
    <div css={s.layoutStyle}>
      <AddGroupChatModal isVisible={isVisible} setIsVisible={setIsVisible} />
      <AddButton setIsModalVisible={setIsVisible} />
      <SearchLayout queryParam={queryParam} setQueryParam={setQueryParam} hashTagData={hashTagData} />

      <TitleContainer
        title="그룹 채팅방"
        sortingOptions={SORTING_OPTIONS}
        sortingOption={sortingOption}
        setSortingOption={setSortingOption}
      >
        {data && <GroupChatListAll serverId={serverId} data={data} />}
      </TitleContainer>
    </div>
  );
};

export default GroupChatListPage;
