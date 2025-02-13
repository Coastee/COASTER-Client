import { CloseCircleIcon } from "@/assets/svg";
import type { HashTagTypes } from "@/constants/hashTagsDummy";
import * as s from "./ModalHashtag.styles";

interface ModalHashtagProps extends HashTagTypes {
  removeHashtag: (id: number) => void;
}

const ModalHashtag = ({ id, content, removeHashtag }: ModalHashtagProps) => {
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

export default ModalHashtag;
