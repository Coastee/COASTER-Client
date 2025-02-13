import { css } from "@emotion/react";

export const wrapperStyle = css`
  display: flex;

  height: 100vh;
  padding: 4.2rem 9.8rem 0 4.2rem;

  gap: 3.3rem;
`;

export const layoutStyle = css`
  display: flex;

  flex-direction: column;

  height: 100vh;

  gap: 1.6rem;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
