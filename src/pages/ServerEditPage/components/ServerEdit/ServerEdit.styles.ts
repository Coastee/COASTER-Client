import { theme } from "@/styles/theme/theme";
import { css } from "@emotion/react";

export const boxWrapperStyle = css`
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  justify-content: end;

  height: 33.8rem;

  row-gap: 2rem;
  column-gap: 1rem;

  padding-top: 4rem;
`;

export const boxLayoutStyle = css`
  display: flex;

  align-items: center;
  gap: 1.2rem;

  cursor: pointer;
`;

export const labelStyle = css`
  ${theme.font.body1};

  white-space: nowrap;

  cursor: pointer;
`;
