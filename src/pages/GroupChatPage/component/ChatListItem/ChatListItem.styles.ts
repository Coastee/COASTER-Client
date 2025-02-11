import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const listWrapperStyle = css`
  display: flex;

  width: 16.8rem;

  padding: 1rem 0.9rem;

  justify-content: space-between;

  border-radius: 0.5rem;

  background-color: ${theme.color.dark3};

  :hover {
    background-color: ${theme.color.dark2};

    transition: 0.2s ease-in;
  }
`;

export const layoutStyle = css`
  display: flex;

  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  word-break: keep-all;

  ${theme.font.body2}
`;
