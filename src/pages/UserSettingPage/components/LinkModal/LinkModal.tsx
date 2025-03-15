import { PlusIcon } from "@/assets/svg";
import * as s from "@/pages/UserSettingPage/components/LinkModal/LinkModal.style";
import { plusBtnStyle } from "@/pages/UserSettingPage/components/ProfileEdit/ProfileEdit.styles";
import { useCloseModal, useModalIsOpen } from "@/stores/useModal";
import { useState } from "react";
const LinkModal = ({ onAddLink }: { onAddLink: (url: string) => void }) => {
  const isOpen = useModalIsOpen();
  const closeModal = useCloseModal();

  const [url, setUrl] = useState("");

  if (!isOpen) return null;

  return (
    <div css={s.backgroundStyle}>
      <div css={s.modalStyle}>
        <h1 css={s.titleStyle}>추가할 링크를 입력하세요</h1>
        <div css={s.linkInputLayoutStyle}>
          <div css={[plusBtnStyle, { width: "3.3rem", height: "3.3rem" }]}>
            <PlusIcon width={14} height={14} />
          </div>
          <div css={s.inputWrapperStyle}>
            <input type="text" css={s.inputStyle} value={url} onChange={(e) => setUrl(e.target.value)} />
          </div>
        </div>
        <div css={s.buttonLayout}>
          <button type="button" onClick={closeModal} css={s.cancelBtnStyle}>
            취소
          </button>
          <button type="button" onClick={() => onAddLink(url)} css={s.addBtnStyle}>
            추가하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkModal;
