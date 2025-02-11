import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const wrapperStyle = css`
  display: flex;

  width: 100%;

  padding: 5.3rem 17rem 4.2rem 5rem;

  flex-direction: column;
  justify-content: space-between;

  border-radius: 2.5rem 0 0 2.5rem;

  background-color: ${theme.color.dark3};
`;

export const titleLayoutStyle = css`
  display: flex;

  align-items: center;
  gap: 1.9rem;

  white-space: nowrap;
`;

export const titleStyle = css`
  ${theme.font.title2};
`;

export const scrollStyle = css`
  display: flex;

  height: 62rem;

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
