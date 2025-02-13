import { CloseCircleIcon } from "@/assets/svg";
import type { HashTagTypes } from "@/pages/HomePage/types/homeDataTypes";
import * as s from "./HashtagChip.styles";

interface HashtagChipProps extends HashTagTypes {
  removeHashtag: (id: number) => void;
}

const HashtagChip = ({ id, content, removeHashtag }: HashtagChipProps) => {
  return (
    <div css={s.hashtagLayoutStyle}>
      <button
        type="button"
        css={s.deleteStyle}
        onClick={() => removeHashtag(id)}
      >
        <CloseCircleIcon width={18} />
      </button>
      <button type="button" css={s.hashtagStyle}>
        {content}
      </button>
    </div>
  );
};

export default HashtagChip;
