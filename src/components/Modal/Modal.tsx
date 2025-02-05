import { CloseIcon } from "@/assets/svg";
import type { HTMLAttributes, ReactNode } from "react";
import * as s from "./Modal.styles";

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  currentUsers?: number;
  maxUsers?: number;
  extraButton?: ReactNode;
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
  children?: ReactNode;
}

const Modal = ({
  title,
  currentUsers,
  maxUsers,
  extraButton,
  isVisible,
  setIsVisible,
  children,
  ...props
}: ModalProps) => {
  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div css={s.layoutStyle} {...props} onClick={handleClose}>
      <div
        css={s.modalStyle}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <header css={s.modalHeaderStyle}>
          <div css={s.headerTextStyle}>
            <h1 css={s.titleStyle}>{title}</h1>
            {currentUsers !== undefined && maxUsers !== undefined && (
              <>
                <p css={s.circleStyle}> · </p>
                <p css={s.userCountStyle}>
                  {currentUsers}/{maxUsers}명
                </p>
              </>
            )}
          </div>
          <div css={s.headerButtonsStyle}>
            {extraButton && <div css={s.headerIconStyle}>{extraButton}</div>}
            <CloseIcon
              width={43}
              css={s.headerIconStyle}
              onClick={handleClose}
            />
          </div>
        </header>
        <div css={s.modalContentStyle}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
