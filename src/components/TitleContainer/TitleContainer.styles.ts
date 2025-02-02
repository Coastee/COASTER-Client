import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const titleContainerStyle = css`
  display: flex;

  flex-direction: column;

  gap: 0.9rem;
`;

export const headerStyle = css`
  display: flex;

  align-items: center;
  gap: 0.2rem;

  margin: 0;
`;

export const sortingStyle = css`
  display: flex;

  flex-direction: column;
  align-items: end;

  margin-left: auto;

  button {
    padding: 1.3rem 1rem 0.7rem 1rem;
  }
`;

export const titleStyle = css`
  padding: 0.3rem;

  ${theme.font.title2};

  white-space: nowrap;
`;

export const contentStyle = css`
  padding-right: 1rem;
`;
