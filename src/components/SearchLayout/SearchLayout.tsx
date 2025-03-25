import { RotateLogoIcon } from "@/assets/svg";
import { Button, Input } from "@/components";
import { useUpdateSearchParam } from "@/components/SearchLayout/hooks/useUpdateSearchParam";
import type { HomeQueryParamTypes, QueryParamTypes } from "@/components/SearchLayout/types/searchTypes";
import type { HashtagTypes } from "@/components/TagChip/types/tagChipTypes";
import * as s from "./SearchLayout.styles";
interface SearchLayoutProps<T extends QueryParamTypes | HomeQueryParamTypes> {
  queryParam: T;
  setQueryParam: (searchParam: T) => void;
  hashTagData: HashtagTypes[] | [];
}

const SearchLayout = <T extends QueryParamTypes | HomeQueryParamTypes>({
  queryParam,
  setQueryParam,
  hashTagData,
}: SearchLayoutProps<T>) => {
  const { updateField, updateTagList } = useUpdateSearchParam(queryParam, setQueryParam);

  const selectedTags = queryParam.tags.map((tag, index) => ({ id: -index - 1, content: tag }));
  const uniqueHashTagData = hashTagData.filter((tag) => !queryParam.tags.includes(tag.content));
  const includeSelectedTags = [...selectedTags, ...uniqueHashTagData];

  return (
    <div css={s.searchLayoutStyle}>
      <Input
        leftIcon={<RotateLogoIcon width={18} />}
        placeholder="관심있는 키워드를 검색해보세요!"
        value={queryParam.keyword}
        onChange={(e) => updateField("keyword", e.target.value as T["keyword"])}
      />
      <ul css={s.hashTagListStyle}>
        {includeSelectedTags.length > 0 ? (
          includeSelectedTags.map((tag) => {
            const isSelected = queryParam.tags.includes(tag.content);
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
          })
        ) : (
          <li css={{ visibility: "hidden" }}>
            <Button variant="hashtag" size="semiLarge">
              Placeholder
            </Button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default SearchLayout;
