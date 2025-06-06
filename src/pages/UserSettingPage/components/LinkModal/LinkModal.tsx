import { LinkedInIcon, PlusIcon } from "@/assets/svg";
import * as s from "@/pages/UserSettingPage/components/LinkModal/LinkModal.style";
import { plusBtnStyle } from "@/pages/UserSettingPage/components/ProfileEdit/ProfileEdit.styles";
import { TITLE } from "@/pages/UserSettingPage/constants/modal";
import { LINKEDIN_URL } from "@/pages/UserSettingPage/constants/url";
import { useCloseModal, useModalIsOpen, useModalType } from "@/stores/useModal";
import { getDomainIcon } from "@/utils/icon";
import { useCallback, useState } from "react";

interface LinkModalProps {
  onAddLink: (url: string) => void;
}

const LinkModal = ({ onAddLink }: LinkModalProps) => {
  const isOpen = useModalIsOpen();
  const closeModal = useCloseModal();
  const modalType = useModalType();

  const [url, setUrl] = useState("");

  const icon = getDomainIcon(url);

  const title = modalType === "link" ? TITLE.LINK : TITLE.LINKEDIN;
  const isPlusIcon = icon?.type === PlusIcon;

  const isValidUrl = useCallback(() => {
    try {
      return !!new URL(url);
    } catch {
      return false;
    }
  }, [url]);

  if (!isOpen) return null;

  const handleClose = () => {
    setUrl("");
    closeModal();
  };

  const handleAddLink = () => {
    if (modalType === "link") {
      onAddLink(url);
    } else {
      window.location.href = LINKEDIN_URL;
    }

    handleClose();
  };

  return (
    <div css={s.backgroundStyle}>
      <div css={s.modalStyle}>
        <h1 css={s.titleStyle}>{title}</h1>
        <div css={s.linkInputLayoutStyle}>
          {modalType === "link" && <div css={isPlusIcon ? plusBtnStyle : s.otherIconStyle}>{icon}</div>}
          {modalType === "certification" && <LinkedInIcon width={33} height={33} />}
          <div css={s.inputWrapperStyle}>
            <input
              type="text"
              css={s.inputStyle}
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="링크를 입력하세요"
            />
          </div>
        </div>
        <div css={s.buttonLayout}>
          <button type="button" onClick={handleClose} css={s.cancelBtnStyle}>
            취소
          </button>
          <button type="button" onClick={handleAddLink} css={s.addBtnStyle} disabled={!url.trim() || !isValidUrl()}>
            추가하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkModal;
