import { CloseCircleIcon } from "@/assets/svg";
import type { TagChipTypes } from "@/components/TagChip/types/tagChipTypes";
import * as s from "./TagChip.styles";

interface TagChipProps extends TagChipTypes {
  variant?: "hashTag" | "link";
  showCloseButton?: boolean;
  removeHashtag?: (id: number) => void;
}

const TagChip = ({ variant = "hashTag", showCloseButton = true, id = 0, content, removeHashtag }: TagChipProps) => {
  return (
    <div css={s.hashtagLayoutStyle}>
      <button type="button" css={s.deleteStyle} onClick={() => removeHashtag?.(id)}>
        {showCloseButton && <CloseCircleIcon width={18} />}
      </button>
      <button type="button" css={s.hashtagStyle(variant)}>
        {content}
      </button>
    </div>
  );
};

export default TagChip;
