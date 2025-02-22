import { CloseCircleIcon } from "@/assets/svg";
import type { HashtagTypes } from "@/components/TagChip/types/hashtagTypes";
import * as s from "./TagChip.styles";

interface TagChipProps extends HashtagTypes {
  variant?: "hashTag" | "link";
  removeHashtag: (id: number) => void;
}

const TagChip = ({ variant = "hashTag", id = 0, content, removeHashtag }: TagChipProps) => {
  return (
    <div css={s.hashtagLayoutStyle}>
      <button type="button" css={s.deleteStyle} onClick={() => removeHashtag(id)}>
        <CloseCircleIcon width={18} />
      </button>
      <button type="button" css={s.hashtagStyle(variant)}>
        {content}
      </button>
    </div>
  );
};

export default TagChip;
