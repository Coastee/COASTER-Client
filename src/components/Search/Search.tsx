import { RotateLogoIcon } from "@/assets/svg";
import { Button, Input } from "@/components";
import { hashTagsDummy } from "@/constants/hashTagsDummy";
import { toHashTag } from "@/utils/hashTag";
import * as s from "./Search.styles";

const Search = () => {
  return (
    <div css={s.containerStyle}>
      <Input
        leftIcon={<RotateLogoIcon width={18} />}
        placeholder="관심있는 키워드를 검색해보세요!"
      />
      <div css={s.hashTagListStyle}>
        {hashTagsDummy.map((tag, index) => (
          <Button key={tag} variant="hashtag">
            {toHashTag(tag)}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Search;
