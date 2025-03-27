import { AddButton, SearchLayout, TitleContainer } from "@/components";
import { useHashtagSearch } from "@/components/SearchLayout/hooks/useHashtagSearch";
import { useSearch } from "@/components/SearchLayout/hooks/useSearch";
import type { QueryParamTypes } from "@/components/SearchLayout/types/searchTypes";
import { MEETING_SORTING_OPTIONS } from "@/constants/dropdown";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import * as s from "./CoffeeChatListPage.styles";
import AddCoffeeChatModal from "./components/AddCoffeeChatModal/AddCoffeeChatModal";
import CoffeeChatListAll from "./components/CoffeeChatListAll/CoffeeChatListAll";

const CoffeeChatListPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { serverId: param } = useParams();
  const serverId = Number(param);

  const location = useLocation();
  const prevKeyword = location.state?.keyword || "";
  const prevTags = location.state?.tags || [];

  const [queryParam, setQueryParam] = useState<QueryParamTypes>({
    page: 0,
    sort: MEETING_SORTING_OPTIONS[0].id,
    scope: "",
    keyword: prevKeyword,
    tags: prevTags,
  });

  const { data } = useSearch({
    serverId,
    type: "meetings",
    queryParam,
  });

  const { data: hashtagData = [] } = useHashtagSearch({
    serverId,
    keyword: queryParam.keyword,
    tags: queryParam.tags,
  });

  return (
    <div css={s.layoutStyle}>
      <AddCoffeeChatModal isVisible={isModalVisible} setIsVisible={setIsModalVisible} />
      <AddButton setIsModalVisible={setIsModalVisible} />
      <SearchLayout queryParam={queryParam} setQueryParam={setQueryParam} hashTagData={hashtagData} />
      <TitleContainer
        title="티타임 모집"
        sortingOptions={MEETING_SORTING_OPTIONS}
        sortingOption={MEETING_SORTING_OPTIONS.find((option) => option.id === queryParam.sort)}
        setSortingOption={(newOpt) => setQueryParam((prev) => ({ ...prev, sort: newOpt.id }))}
      >
        {data && <CoffeeChatListAll serverId={serverId} data={data} />}
      </TitleContainer>
    </div>
  );
};

export default CoffeeChatListPage;
