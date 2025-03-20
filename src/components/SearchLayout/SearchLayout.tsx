import { RotateLogoIcon } from "@/assets/svg";
import { Button, Input } from "@/components";
import { useUpdateSearchParam } from "@/components/SearchLayout/hooks/useUpdateSearchParam";
import type { QueryParamTypes } from "@/components/SearchLayout/types/searchTypes";
import type { HashtagTypes } from "@/components/TagChip/types/tagChipTypes";
import { useEffect } from "react";
import * as s from "./SearchLayout.styles";

interface SearchLayoutProps {
  queryParam: QueryParamTypes;
  setQueryParam: (searchParam: QueryParamTypes) => void;
  hashTagData: HashtagTypes[];
}

const SearchLayout = ({ queryParam, setQueryParam, hashTagData }: SearchLayoutProps) => {
  const { updateField, updateTagList } = useUpdateSearchParam(queryParam, setQueryParam);

  useEffect(() => {
    console.log("queryParam: ", queryParam);
  }, [queryParam]);
  return (
    <div css={s.searchLayoutStyle}>
      <Input
        leftIcon={<RotateLogoIcon width={18} />}
        placeholder="관심있는 키워드를 검색해보세요!"
        value={queryParam.keyword}
        onChange={(e) => updateField("keyword", e.target.value)}
      />
      <ul css={s.hashTagListStyle}>
        {hashTagData.map((tag) => {
          const isSelected = queryParam.tagList.includes(tag.content);
          return (
            <li key={tag.id}>
              <Button
                variant="hashtag"
                size="semiLarge"
                onClick={() => updateTagList(tag.content)}
                css={{
                  color: isSelected ? "white" : "",
                  backgroundColor: isSelected ? "#3f4b5d;" : "",
                  fontWeight: isSelected ? "500;" : "",
                }}
              >
                {tag.content}
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchLayout;
