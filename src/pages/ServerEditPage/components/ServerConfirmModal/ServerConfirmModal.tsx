import { useCloseModal, useModalIsOpen } from "@/stores/useModal";
import { useState } from "react";
import * as s from "./ServerConfirmModal.styles";

const ServerConfirmModal = () => {
  const isOpen = useModalIsOpen();
  const closeModal = useCloseModal();
  // const modalType = useModalType();
  const modalType = "link";

  const [url, setUrl] = useState("");

  if (!isOpen) return null;

  const handleClose = () => {
    setUrl("");
    closeModal();
  };

  return (
    <div css={s.backgroundStyle}>
      <div css={s.modalStyle}>
        <h1 css={s.titleStyle}>
          아래 서버를 <span>추가</span>하시겠습니까?
        </h1>
        <div css={s.serverNameStyle}>서버 이름</div>

        <div css={s.buttonLayout}>
          <button type="button" onClick={handleClose} css={s.cancelBtnStyle}>
            취소
          </button>
          <button
            type="button"
            onClick={() => {
              console.log("완료");
              setUrl("");
              closeModal();
            }}
            css={s.addBtnStyle}
          >
            추가
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServerConfirmModal;
