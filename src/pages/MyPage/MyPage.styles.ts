import { css } from "@emotion/react";

export const wrapperStyle = css`
  display: flex;

  gap: 3.3rem;

  padding: 4.2rem 9.8rem 0 4.2rem;

  height: 100vh;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const layoutStyle = css`
  display: flex;

  flex-direction: column;

  height: 100vh;

  gap: 1.6rem;
`;
