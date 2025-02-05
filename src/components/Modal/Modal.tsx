import { CloseIcon } from "@/assets/svg";
import type { HTMLAttributes, ReactNode } from "react";
import * as s from "./Modal.styles";

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  currentUsers?: number;
  maxUsers?: number;
  extraButton?: ReactNode;
  children?: ReactNode;
}

const Modal = ({
  title,
  currentUsers,
  maxUsers,
  extraButton,
  children,
  ...props
}: ModalProps) => {
  return (
    <div css={s.layoutStyle} {...props}>
      <div css={s.modalStyle}>
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
            {extraButton}
            <CloseIcon width={43} css={s.closeIconStyle} />
          </div>
        </header>
        <div css={s.modalContentStyle}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
