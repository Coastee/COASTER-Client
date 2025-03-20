import { AddButton, SearchLayout, TitleContainer } from "@/components";
import { useSearch } from "@/components/SearchLayout/hooks/useSearch";
import type { QueryParamTypes } from "@/components/SearchLayout/types/searchTypes";
import { GROUP_SORTING_OPTIONS } from "@/constants/dropdown";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import * as s from "./GroupChatListPage.styles";
import AddGroupChatModal from "./components/AddGroupChatModal/AddGroupChatModal";
import GroupChatListAll from "./components/GroupChatListAll/GroupChatListAll";

const GroupChatListPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const { serverId: param } = useParams();
  const serverId = Number(param);

  const location = useLocation();
  const hashTagData = location.state?.hashTagData || [];

  const [queryParam, setQueryParam] = useState<QueryParamTypes>({
    page: 0,
    sort: GROUP_SORTING_OPTIONS[0].id,
    scope: "",
    keyword: "",
    tagList: [],
  });

  const { data } = useSearch({
    serverId,
    type: "groups",
    queryParam,
  });

  return (
    <div css={s.layoutStyle}>
      <AddGroupChatModal isVisible={isVisible} setIsVisible={setIsVisible} />
      <AddButton setIsModalVisible={setIsVisible} />
      <SearchLayout queryParam={queryParam} setQueryParam={setQueryParam} hashTagData={hashTagData} />

      <TitleContainer
        title="그룹 채팅방"
        sortingOptions={GROUP_SORTING_OPTIONS}
        sortingOption={GROUP_SORTING_OPTIONS.find((option) => option.id === queryParam.sort)}
        setSortingOption={(newOpt) => setQueryParam((prev) => ({ ...prev, sort: newOpt.id }))}
      >
        {data && <GroupChatListAll serverId={serverId} data={data} />}
      </TitleContainer>
    </div>
  );
};

export default GroupChatListPage;
