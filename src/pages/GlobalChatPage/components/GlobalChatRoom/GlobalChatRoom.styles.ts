import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const wrapperStyle = css`
  display: flex;

  width: 100%;

  height: 100vh;

  padding: 5.3rem 4.5rem 4.2rem 4.5rem;

  z-index: 1;

  flex-direction: column;
  justify-content: space-between;

  border-radius: 2.5rem 0 0 2.5rem;

  background-color: ${theme.color.dark3};
`;

export const headerStyle = css`
  display: flex;

  justify-content: space-between;
  align-items: center;
`;

export const titleStyle = css`
  display: flex;

  align-items: center;

  gap: 1rem;

  white-space: nowrap;

  h1 {
    max-width: 40rem;

    ${theme.font.title2};
  }

  h2 {
    padding-top: 0.8rem;

    ${theme.font.body1};
    font-weight: 400;
    color: ${theme.color.gray2};
  }
`;

export const noticeButtonStyle = (isNoticeOpened: boolean) => css`
  position: absolute;

  display: flex;
  flex-direction: column;

  gap: 0.8rem;

  padding: ${isNoticeOpened ? "0.8rem 1.5rem 1.2rem 1.5rem " : "0.8rem 1.5rem"};

  border-radius: 0.7rem;

  background-color: ${theme.color.primaryBlue2};
`;

export const noticeTitleStyle = css`
  display: flex;

  align-items: center;

  gap: 0.7rem;

  white-space: nowrap;

  cursor: pointer;

  p {
    ${theme.font.body2}
    font-weight: 500;
  }

  svg:nth-of-type(1) {
    padding-top: 0.2rem;
  }

  svg:nth-of-type(2) path {
    fill: ${theme.color.white};
  }
`;

export const noticeContentStyle = css`
  ${theme.font.body3}
  font-weight: 400;
  width: 26rem;
`;

export const scrollStyle = css`
  display: flex;

  height: 62rem;

  padding: 1.8rem 0 7rem 0;

  flex-direction: column;
  gap: 2.5rem;

  overflow-y: scroll;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const layoutStyle = css`
  display: flex;
  flex-direction: column;

  gap: 0.6rem;

  p {
    ${theme.font.body2}
  }
`;

export const iconStyle = css`
  padding: 1rem;

  box-sizing: content-box;

  cursor: pointer;
`;
