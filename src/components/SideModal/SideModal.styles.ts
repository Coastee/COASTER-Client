import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";
export const layoutStyle = css`
  position: fixed;
  top: 0;
  left: 0;

  z-index: 2;

  display: flex;

  align-items: flex-start;

  width: 100%;
  height: 100vh;

  background: rgba(0, 0, 0, 0.5);
`;

export const modalStyle = css`
  position: absolute;
  top: 0;
  right: 0;

  z-index: 2;

  display: flex;
  flex-direction: column;

  padding: 4.4rem 5.4rem 5.4rem 5.4rem;

  width: auto;
  min-width: 60rem;
  height: 100%;

  border-radius: 1rem 0 0 1rem;

  background-color: ${theme.color.dark3};
`;

export const modalHeaderStyle = css`
  display: flex;

  justify-content: space-between;
  align-items: start;
  gap: 7rem;

  padding-bottom: 1rem;
`;

export const headerTextStyle = css`
  display: flex;

  align-items: start;

  gap: 1rem;

  padding-top: 1rem;
`;

export const titleStyle = css`
  max-width: 40rem;

  ${theme.font.title2};
`;

export const circleStyle = css`
  ${theme.font.title2};
`;

export const userCountStyle = css`
  ${theme.font.title2};
  color: ${theme.color.gray1};
  font-weight: 400;

  white-space: nowrap;
`;

export const headerButtonsStyle = css`
  display: flex;

  gap: 1rem;

  margin-right: -1rem;
`;

export const modalContentStyle = css``;

export const headerIconStyle = css`
  display: flex;
  flex-shrink: 0;

  justify-content: center;
  align-items: center;

  padding: 1rem;

  cursor: pointer;
`;
