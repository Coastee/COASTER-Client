import { RotateLogoIcon } from "@/assets/svg";
import { Hashtag, Input } from "@/components";
import { hashTagsDummy } from "@/constants/hashTagsDummy";
import * as s from "./SearchLayout.styles";

interface SearchLayoutProps {
  keyword: string;
  setKeyword: (value: string) => void;
  hashTagData: string[];
}

const SearchLayout = ({
  keyword,
  setKeyword,
  hashTagData,
}: SearchLayoutProps) => {
  return (
    <div css={s.searchLayoutStyle}>
      <Input
        leftIcon={<RotateLogoIcon width={18} />}
        placeholder="관심있는 키워드를 검색해보세요!"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <ul css={s.hashTagListStyle}>
        {hashTagsDummy.map((tag) => (
          <li key={tag.id}>
            <Hashtag tagContent={tag.content} onClick={() => setKeyword(tag.content)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchLayout;
