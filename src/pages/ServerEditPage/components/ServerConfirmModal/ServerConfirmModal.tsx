import type { ServerTypes } from "@/components/ServerHeader/types/serverTypes";
import { useEnterServer, useExitServer } from "@/pages/ServerEditPage/hooks/useServerEdit";
import { useModalType } from "@/stores/useModal";
import * as s from "./ServerConfirmModal.styles";

interface ServerConfirmModalProps {
  item: ServerTypes | null;
  closeModal: () => void;
}

const ServerConfirmModal = ({ item, closeModal }: ServerConfirmModalProps) => {
  const modalType = useModalType();

  const enterServer = useEnterServer(item?.id ?? -1);
  const exitServer = useExitServer(item?.id ?? -1);

  const handleConfirm = () => {
    if (modalType === "server-enter") {
      enterServer.mutate();
    } else if (modalType === "server-exit") {
      exitServer.mutate();
    }

    closeModal();
  };

  if (!item || !modalType) return null;

  return (
    <div css={s.backgroundStyle}>
      <div css={s.modalStyle}>
        <h1 css={s.titleStyle}>
          {modalType === "server-enter" ? "서버를 추가하시겠습니까?" : "서버를 나가시겠습니까?"}
        </h1>
        <div css={s.serverNameStyle}>{item.title || "서버 이름 없음"}</div>

        <div css={s.buttonLayout}>
          <button type="button" onClick={closeModal} css={s.cancelBtnStyle}>
            취소
          </button>
          <button type="button" onClick={handleConfirm} css={s.addBtnStyle(modalType)}>
            {modalType === "server-enter" ? "추가" : "나가기"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServerConfirmModal;
