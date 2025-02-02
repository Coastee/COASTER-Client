import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const wrapperStyle = css`
  display: flex;

  flex-direction: column;

  gap: 1.3rem;
`;

export const titleStyle = css`
  display: flex;

  align-items: center;
  gap: 0.7rem;

  ${theme.font.title3};
`;

export const listWrapperStyle = css`
  width: 41.1rem;

  padding: 2rem;

  border-radius: 10px;

  background-color: ${theme.color.dark3};
`;

export const listStyle = css`
  height: 33rem;

  padding-right: 1.5rem;

  background-color: ${theme.color.dark3};

  overflow-y: scroll;
`;
