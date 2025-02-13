import { CloseCircleIcon } from "@/assets/svg";
import type { HashtagTypes } from "@/components/HashtagChip/types/hashtagTypes";
import * as s from "./HashtagChip.styles";

interface HashtagChipProps extends HashtagTypes {
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
