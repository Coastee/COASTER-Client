import { RotateLogoIcon } from "@/assets/svg";
import Input from "@/components/Input/Input";
import * as s from "./SearchBar.styles";

const SearchBar = () => {
  return (
    <div css={s.containerStyle}>
      <Input
        leftIcon={<RotateLogoIcon width={18} />}
        placeholder="관심있는 키워드를 검색해보세요!"
      />
    </div>
  );
};

export default SearchBar;
