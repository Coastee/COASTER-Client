import type { ServerTypes } from "@/components/ServerHeader/types/serverTypes";
import { useEnterServer, useExitServer } from "@/pages/ServerEditPage/hooks/useServerEdit";
import { useModalType } from "@/stores/useModal";
import * as s from "./ServerConfirmModal.styles";

interface ServerConfirmModalProps {
  item: ServerTypes | null;
  closeModal: () => void;
}

const ServerConfirmModal = ({ item, closeModal }: ServerConfirmModalProps) => {
  const enterServer = item ? useEnterServer(item.id) : null;
  const exitServer = item ? useExitServer(item.id) : null;

  const modalType = useModalType();

  const handleCancel = () => {
    console.log("취소 버튼 클릭", item);
    closeModal();
  };

  const handleConfirm = () => {
    console.log("완료 버튼 클릭", item);
    // item이 null이 아닌 경우에만 서버 엔트리/이탈 실행
    if (item) {
      if (modalType === "server-enter" && enterServer) {
        enterServer.mutate();
      } else if (modalType === "server-exit" && exitServer) {
        exitServer.mutate();
      }
    }
    closeModal();
  };

  if (!item) return null;
  return (
    item &&
    modalType && (
      <div css={s.backgroundStyle}>
        <div css={s.modalStyle}>
          <h1 css={s.titleStyle}>
            {modalType === "server-enter" ? "서버를 추가하시겠습니까?" : "서버를 나가시겠습니까?"}
          </h1>
          <div css={s.serverNameStyle}>{item?.title || "서버 이름 없음"}</div>

          <div css={s.buttonLayout}>
            <button type="button" onClick={handleCancel} css={s.cancelBtnStyle}>
              취소
            </button>
            <button type="button" onClick={handleConfirm} css={s.addBtnStyle(modalType)}>
              {modalType === "server-enter" ? "추가" : "나가기"}
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default ServerConfirmModal;
