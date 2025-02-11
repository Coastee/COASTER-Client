import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const wrapperStyle = (isUser: boolean) => css`
  display: flex;

  justify-content: ${isUser ? "flex-end" : "flex-start"};
  align-items: flex-end;
  gap: 1rem;
`;

export const messageWrapperStyle = (isUser: boolean) => css`
  max-width: 29rem;

  padding: 1.2rem 1.8rem;

  border-radius: ${isUser ? "1rem 0.2rem 1rem 1rem" : "0.2rem 1rem 1rem 1rem"};

  background-color: ${isUser ? theme.color.primaryBlue2 : theme.color.dark2};
`;

export const messageStyle = css`
  ${theme.font.body2}
`;
