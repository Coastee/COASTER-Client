import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const wrapperStyle = css`
  display: flex;

  width: 100%;

  padding: 5.3rem 17rem 4.2rem 5rem;

  flex-direction: column;
  justify-content: space-between;
  gap: 2.5rem;

  background-color: ${theme.color.dark3};
`;

export const layoutStyle = (isUser: boolean) => css`
 display: flex;

 justify-content: ${isUser ? "flex-end" : "flex-start"};
 gap: 1.3rem;

 overflow-y: scroll;
`;

export const nameBoxStyle = (isUser: boolean) => css`
  display: flex;

  justify-content: ${isUser ? "flex-end" : "flex-start"};
  align-items: center;
  gap: 0.6rem;

  ${theme.font.body1};
`;
