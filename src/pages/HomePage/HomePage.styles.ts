import { scrollDarkStyle } from "@/styles/scrollStyle";
import { css } from "@emotion/react";

export const layoutStyle = css`
  display: flex;

  gap: 4rem;

  padding: 4.2rem 5rem 0 4.2rem;

  width: calc(100vw - 32.6rem);
  height: 100vh;

  overflow: scroll;
  ${scrollDarkStyle}
`;

export const leftLayoutStyle = css`
  display: flex;
  flex-direction: column;

  gap: 4rem;
`;
