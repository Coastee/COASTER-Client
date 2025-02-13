import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const wrapperStyle = css`
  display: flex;

  width: 100%;

  padding: 5.3rem 4.5rem 4.2rem 4.5rem;

  z-index: 1;

  flex-direction: column;
  justify-content: space-between;

  border-radius: 2.5rem 0 0 2.5rem;

  background-color: ${theme.color.dark3};
`;

export const headerStyle = css`
  display: flex;

  padding-bottom: 2.2rem;

  justify-content: space-between;
  align-items: center;
`;

export const titleLayoutStyle = css`
  display: flex;

  align-items: center;
  gap: 1.7rem;

  white-space: nowrap;
`;

export const titleStyle = css`
  ${theme.font.title2};
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

export const layoutStyle = (isUser: boolean) => css`
 display: flex;

 justify-content: ${isUser ? "flex-end" : "flex-start"};
 gap: 1.3rem;
`;

export const nameBoxStyle = (isUser: boolean) => css`
  display: flex;

  justify-content: ${isUser ? "flex-end" : "flex-start"};
  align-items: center;
  gap: 0.6rem;

  ${theme.font.body1};
`;

export const infoLayoutStyle = css`
  display: flex;

  flex-direction: column;
  gap: 0.45rem;

  & > h1 {
    ${theme.font.body1}
    font-weight: 500;
  }
`;

export const infoStyle = css`
  color: ${theme.color.gray1};

  ${theme.font.body2};
`;

export const circleStyle = css`
  width: 0.3rem;
  height: 0.3rem;

  border-radius: 100%;

  background-color: ${theme.color.gray1};
`;

export const iconStyle = css`
  padding: 1rem;

  box-sizing: content-box;

  cursor: pointer;
`;
