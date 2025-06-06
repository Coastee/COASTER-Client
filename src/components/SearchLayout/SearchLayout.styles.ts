import { css } from "@emotion/react";

export const searchLayoutStyle = css`
  display: flex;
  flex-direction: column;
  row-gap: 1.2rem;
`;

export const hashTagListStyle = css`
  display: flex;
  flex-wrap: wrap;

  align-items: center;

  overflow: hidden;

  gap: 1rem;

  max-height: 3.1rem;
`;

export const emptyHashtagBoxStyle = css`
  visibility: hidden;
  
  height: 3.1rem;
`;
