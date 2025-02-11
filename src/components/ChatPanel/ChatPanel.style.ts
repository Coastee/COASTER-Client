import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const wrapperStyle = (isUser: boolean) => css`
  position: relative;

  padding: 1.2rem 1.8rem;

  border-radius: ${isUser ? "0.2rem 1rem 1rem 1rem" : "1rem 0.2rem 1rem 1rem"};
`;

export const messageStyle = css`
  ${theme.font.body2}
`;

export const timeWrapperStyle = (isUser: boolean) => css`
  position: absolute;
  display: flex;

  right: ${isUser ? "0" : "1rem"};
  left: ${isUser ? "1rem" : "0"};
  bottom: 0;

  justify-content: center;
  align-items: center;

  border: 1px solid ${theme.color.dark2};
  border-radius: 0.6rem;
`;

export const timeStyle = css`
  color: ${theme.color.gray1};

  ${theme.font.body3};
`;
