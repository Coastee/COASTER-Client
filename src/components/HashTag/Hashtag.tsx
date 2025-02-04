import { toHashTag } from "@/utils/hashTag";
import * as s from "./Hashtag.styles";

interface HashtagProps {
  tag: string;
  handleHashtagClick: () => void;
}

const Hashtag = ({ tag, handleHashtagClick }: HashtagProps) => {
  return (
    <button css={s.hashtagStyle} onClick={handleHashtagClick}>
      {toHashTag(tag)}
    </button>
  );
};

export default Hashtag;
