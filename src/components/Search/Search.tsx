import { RotateLogoIcon } from "@/assets/svg";
import { Button, Input } from "@/components";
import * as s from "./Search.styles";

const Search = () => {
  return (
    <div css={s.containerStyle}>
      <Input
        leftIcon={<RotateLogoIcon width={18} />}
        placeholder="관심있는 키워드를 검색해보세요!"
      />
      <div css={s.hashTagListStyle}>
        <Button variant="hashtag">#요즘 뜨는 유행어</Button>
        <Button variant="hashtag">#요즘 뜨는 유행어</Button>
        <Button variant="hashtag">#요즘 뜨는 유행어</Button>
        <Button variant="hashtag">#요즘 뜨는 유행어</Button>
        <Button variant="hashtag">#요즘 뜨는 유행어</Button>
        <Button variant="hashtag">#요즘 뜨는 유행어</Button>
        <Button variant="hashtag">#요즘 뜨는 유행어</Button>
        <Button variant="hashtag">#요즘 뜨는 유행어</Button>
      </div>
    </div>
  );
};

export default Search;
